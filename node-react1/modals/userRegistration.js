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
    number:Number,
    email: String,
    password : String,
    schoolName:String,
    firstFriend:String,
    favourateDish:String,
    favourateColor:String,
    favourateSong:String
    
});

const UserRegistrationModule = mongoose.model("UserRegistration", UserSchema);

module.exports = UserRegistrationModule;
