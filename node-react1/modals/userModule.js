// const mongoose = require("mongoose");

// const UserSchema = new mongoose.Schema({
//     name : String,
//     email : String,
//     age :Number
// })


// const UserModule = mongoose.model("users",UserSchema);

// module.exports = UserModule
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
    password : String,
});

const UserModule = mongoose.model("usersData", UserSchema);

module.exports = UserModule;
