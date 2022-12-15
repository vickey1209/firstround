
const mongoose = require("mongoose");

mongoose.connect('mongodb://127.0.0.1/techrudite')
.then(() =>{
    console.log("connection success")
}).catch((e) =>{
    console.log("no connction")
});