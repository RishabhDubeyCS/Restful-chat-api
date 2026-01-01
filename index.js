const express = require('express');
const app = express();  
const mongoose = require('mongoose');
const path = require('path');
const Chat = require('./models/chat.js');
const  methodOverride = require('method-override');


app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use (methodOverride('_method'));
main()
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

// HOME
app.get('/', (req, res) => {
    res.render('home.ejs');
});

// INDEX — show all chats
app.get("/chats", async (req, res) => {
    let chats = await Chat.find();
    // console.log(chats);
    res.render("index.ejs", { chats });
});

// NEW — show form
app.get("/chats/new", (req, res) => {
    res.render("new.ejs");
});

// CREATE
app.post("/chats", async (req, res) => {
    let { from, to, msg } = req.body;
    await Chat.create({
        from,
        to,
        msg,
        created_at: new Date()
    });
    res.redirect("/chats");
});

// EDIT — FIXED POSITION 
app.get("/chats/:id/edit", async (req, res) => {
    const { id } = req.params;
    let chat = await Chat.findById(id);
    res.render("edit", { chat });
});
//Put /chats/:id update route 
app.put("/chats/:id", async (req,res)=>{
    let {id} = req.params;
    let { msg : newMsg}= req.body;
    console.log(newMsg);
     let updatedChat =  await Chat.findByIdAndUpdate(id,
         {msg: newMsg}, 
        {runValidators: true},
    {new:true }
    );
console.log(updatedChat);
res.redirect("/chats");
})

//Chats  Destoy Route
app.delete("/chats/:id", async (req, res)=>{
     let {id} = req.params;
  let deletedChat = await Chat.findById(id);
         console.log(deletedChat);
         await Chat.findByIdAndDelete(id);

         res.redirect("/chats");
   
})
const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});