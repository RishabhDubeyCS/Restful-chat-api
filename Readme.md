# Mongodb_With_express

A simple project demonstrating how to use **MongoDB with Express.js** including database connection, model creation, CRUD operations, and Mongo Shell usage.

---

## 📦 Tech Stack
- Node.js
- Express.js
- Mongoose (ODM library)
- EJS (Templating Engine)
- Nodemon
- MongoDB (Compass + Shell)

Install all dependencies:
```sh
npm install express ejs mongoose nodemon


|-- models/
|   └── chat.js
|-- views/
|-- init.js
|-- app.js / index.js
|-- package.json


# MongoDB Database Setup

mongosh

Useful Database Commands

| Task               | Command                       |
| ------------------ | ----------------------------- |
| Show all databases | `show dbs`                    |
| Current database   | `db`                          |
| Use/Create DB      | `use whatsapp`                |
| Show collections   | `show collections`            |
| Read data          | `db.chats.find()`             |
| Insert data        | `db.chats.insertOne({ ... })` |
| Update data        | `db.chats.updateOne()`        |
| Delete data        | `db.chats.deleteOne()`        |
| Delete all docs    | `db.chats.deleteMany({})`     |



🔄 Initialize Sample Database


db.chats.deleteMany({})


CRUD Summary

| Operation | Meaning | Method                 |
| --------- | ------- | ---------------------- |
| C         | Create  | insert / save          |
| R         | Read    | find / findOne         |
| U         | Update  | updateOne / updateMany |
| D         | Delete  | deleteOne / deleteMany |

🎯 Features

✔ MongoDB + Mongoose integration
✔ Simple and clean schema
✔ CRUD operations implemented
✔ Using Mongo Shell for database operations
✔ Express server setup for future growth





















npm i express ejs mongoose nodemon  
express and  mongoose setup
mongoose documentation 
Quick start


Creating the Model 

chat will have :(_id , from , to , message , created_at)

mongodb compass , mongodb shell install ok than run the mongosh 

mongosh //start 
use college // to create & use a new database called "college"  
CRUD
create mean insert  , read mean   find  ,update  , delete 

mongosh 
 show dbs
  db
   use whatsapp
    show collections
     db.chat.find()


 intialize Database 
 init.js file

db.chats.deleteMany({}) //delete all the connection 









