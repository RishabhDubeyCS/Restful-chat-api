
/*
  This is a CRUD web application built using Express and MongoDB.

  Technologies used:
  - Express.js for server and routing
  - Mongoose for MongoDB connection and data modeling
  - EJS for server-side rendering
  - method-override to support PUT and DELETE requests from forms
  - Custom ExpressError class for centralized error handling

  Functionality:
  - Display all chats
  - Create a new chat
  - Edit an existing chat
  - Update a chat message
  - Delete a chat
  - Handle errors using middleware
*/

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const Chat = require("./models/chat");
const ExpressError = require("./ExpressError");

/*
  ================== APP CONFIG ==================
  Setting views directory and view engine
*/
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

/*
  ================== GLOBAL MIDDLEWARE ==================
  - express.urlencoded: parses form data
  - method-override: allows PUT and DELETE from forms
*/
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

/*
  ================== DATABASE CONNECTION ==================
  Connects to MongoDB database: fakewhatsapp
*/
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/fakewhatsapp");
  console.log("Connected to MongoDB");
}
main().catch(err => console.log(err));

/*
  ================== ROUTES ==================
*/

// HOME ROUTE
app.get("/", (req, res) => {
  res.render("home.ejs");
});

// INDEX ROUTE - Show all chats
app.get("/chats", async (req, res, next) => {
  try {
    const chats = await Chat.find();
    res.render("index.ejs", { chats });
  } catch (err) {
    next(err);
  }
});

// NEW ROUTE - Show form to create new chat
app.get("/chats/new", (req, res) => {
  res.render("new.ejs");
});

// CREATE ROUTE - Save new chat to database
app.post("/chats", async (req, res, next) => {
  try {
    const { from, to, msg } = req.body;
    await Chat.create({
      from,
      to,
      msg,
      created_at: new Date()
    });
    res.redirect("/chats");
  } catch (err) {
    next(err);
  }
});

// SHOW ROUTE - Show single chat (using edit view)
app.get("/chats/:id", async (req, res, next) => {
  try {
    const chat = await Chat.findById(req.params.id);
    if (!chat) {
      return next(new ExpressError("Chat not found", 404));
    }
    res.render("edit.ejs", { chat });
  } catch (err) {
    next(err);
  }
});

// EDIT ROUTE - Show edit form
app.get("/chats/:id/edit", async (req, res, next) => {
  try {
    const chat = await Chat.findById(req.params.id);
    if (!chat) {
      return next(new ExpressError("Chat not found", 404));
    }
    res.render("edit.ejs", { chat });
  } catch (err) {
    next(err);
  }
});

// UPDATE ROUTE - Update chat message
app.put("/chats/:id", async (req, res, next) => {
  try {
    await Chat.findByIdAndUpdate(
      req.params.id,
      { msg: req.body.msg },
      { runValidators: true }
    );
    res.redirect("/chats");
  } catch (err) {
    next(err);
  }
});

// DELETE ROUTE - Delete chat
app.delete("/chats/:id", async (req, res, next) => {
  try {
    await Chat.findByIdAndDelete(req.params.id);
    res.redirect("/chats");
  } catch (err) {
    next(err);
  }
});

/*
  ================== ERROR HANDLING MIDDLEWARE ==================
  Handles all errors passed using next(err)
*/
app.use((err, req, res, next) => {
  const { statusCode = 500, message = "Something went wrong" } = err;
  res.status(statusCode).send(message);
});

/*
  ================== SERVER ==================
*/
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
