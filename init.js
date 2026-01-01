// const mongoose = require('mongoose');
// const Chat = require('./models/chat.js');

// main()
// .then(() => {
//     console.log('Connected to MongoDB');
// })
// .catch((err) => {
//     console.log(err);
// });

// async function main (){
//     await mongoose.connect ('mongodb://127.0.0.1:27017/whatsapp');
// }




// let allChats = [
//     {
//         from: "Rohan",
//         to: "Aisha",
//         msg: "Hi Aisha! Kya kar rahi ho?",
//         created_at: new Date()
//     },
//     {
//         from: "Aisha",
//         to: "Rohan",
//         msg: "Nothing much, bas coding kar rahi hoon 😄",
//         created_at: new Date()
//     },
//     {
//         from: "Rohan",
//         to: "Aisha",
//         msg: "Waah! Kya bana rahi ho?",
//         created_at: new Date()
//     },
//     {
//         from: "Aisha",
//         to: "Rohan",
//         msg: "Node.js + MongoDB project 😊",
//         created_at: new Date()
//     },
//     {
//         from: "Arjun",
//         to: "Riya",
//         msg: "Good Morning Riya! 🌞",
//         created_at: new Date()
//     },
//     {
//         from: "Riya",
//         to: "Arjun",
//         msg: "Good Morning! Breakfast ho gaya? 😄",
//         created_at: new Date()
//     },
//     {
//         from: "Vikram",
//         to: "Neha",
//         msg: "Kal movie kaisi thi?",
//         created_at: new Date()
//     },
//     {
//         from: "Neha",
//         to: "Vikram",
//         msg: "Bohot mast! Action scenes top class 🔥",
//         created_at: new Date()
//     },
//     {
//         from: "Karan",
//         to: "Sneha",
//         msg: "Assignment submit kar diya?",
//         created_at: new Date()
//     },
//     {
//         from: "Sneha",
//         to: "Karan",
//         msg: "Haan just abhi submit kiya 😌",
//         created_at: new Date()
//     },
//     {
//         from: "Rahul",
//         to: "Priya",
//         msg: "Kal milte hain coffee pe? ☕",
//         created_at: new Date()
//     },
//     {
//         from: "Priya",
//         to: "Rahul",
//         msg: "Sure, time bata dena 😊",
//         created_at: new Date()
//     }
// ];

// Chat.insertMany(allChats);


// // let chat1 = new Chat({
// //     from:"Alice",
// //     to:"Bob",
// //     msg:"Hello, Bob!",
// //     created_at: new Date()//UTC time
// // });

// // chat1.save().then((res)=>{
// //     console.log(res);
// // })
