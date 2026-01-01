# Mini-WhatsApp | RESTful CRUD Project

A server-side rendered messaging application designed to practice REST API architecture, CRUD operations, and MongoDB with Mongoose.  
The project includes UI pages, database models, and Express routing.

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| Backend | Node.js, Express.js |
| Database | MongoDB + Mongoose ODM |
| Frontend | EJS, Bootstrap 5, CSS |
| Tools | Nodemon, Method-Override, Git/GitHub |

---

## RESTful API Architecture

This project follows RESTful routing conventions for managing chat messages:

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET    | /chats | Fetch and display all messages |
| GET    | /chats/new | Render form for creating a new message |
| POST   | /chats | Create a new message and save to database |
| GET    | /chats/:id/edit | Render edit form for a specific message |
| PATCH  | /chats/:id | Update an existing message |
| DELETE | /chats/:id | Delete a message from the database |

---

## Project Folder Structure



## Project Folder Structure

project-folder/
|-- models/
| └── chat.js
|-- views/
| ├── index.ejs
| ├── new.ejs
| ├── edit.ejs
| └── home.ejs
|-- init.js
|-- app.js (or index.js)
|-- package.json
|-- public/ (CSS/JS if needed)




---

## MongoDB Usage (Mongo Shell)

Start MongoDB Shell:
```sh
mongosh



Useful Commands:

| Action                 | Command                   |
| ---------------------- | ------------------------- |
| Show databases         | show dbs                  |
| Select/Create database | use whatsapp              |
| Show collections       | show collections          |
| View data              | db.chats.find()           |
| Insert document        | db.chats.insertOne({...}) |
| Update document        | db.chats.updateOne()      |
| Delete one             | db.chats.deleteOne()      |
| Delete all             | db.chats.deleteMany({})   |


Initialize Sample Database
Inside init.js:



db.chats.deleteMany({});
Run:

sh
Copy code
node init.js
Features
Create, Read, Update, Delete chat messages

MongoDB + Mongoose integration

Express routing with Method-Override

Bootstrap Dark UI styling

Scalable structure for real-time messaging features

CRUD Summary
| Operation | Meaning | Mongo Function                   |
| --------- | ------- | -------------------------------- |
| C         | Create  | insertOne(), .save()             |
| R         | Read    | find(), findById()               |
| U         | Update  | updateOne(), findByIdAndUpdate() |
| D         | Delete  | deleteOne(), findByIdAndDelete() |


Installation & Run
Install dependencies:


npm install express ejs mongoose method-override nodemon
Start the server:


nodemon app.js
Open in browser:

http://localhost:8080/chats

Notes
Method-Override is required to use PATCH & DELETE with HTML forms

MongoDB Compass can be used to view database visually

Design can be improved with animations and modern chat UI

Future Improvements
Real-time messaging using Socket.IO

User authentication (login/signup)

Message seen indicators & reply feature

Profile system with avatars and online status

Made with Node.js, Express, MongoDB, Mongoose, and EJS





If you'd like, I can also:

✔ Fix grammar and keep it more concise  
✔ Add screenshots of your UI for GitHub  
✔ Add a short installation & usage guide at top  
✔ Help you upload everything properly to GitHub

Would you like me to **add screenshots** section too?