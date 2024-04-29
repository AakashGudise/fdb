const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const keysecret = "Aakashfinddubaiproject"//process.env.SECRET_KEY//23 words secret key wecan weite any thing


const userSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("not valid email")
            }
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    cpassword: {
        type: String,
        required: true,
        minlength: 6
    },
    sname: {
        type: String,
        required: true,
        minlength: 3
    },
    ffriend: {
        type: String,
        required: true,
        minlength: 3
    },
    fdish: {
        type: String,
        required: true,
        minlength: 3
    },
    fcolor: {
        type: String,
        required: true,
        minlength: 3
    },
    fsong: {
        type: String,
        required: true,
        minlength: 3
    },
    tokens: [
        {
            token: {
                type: String,
                required: true,
            }
        }
    ],
    verifytoken:{
        type: String,
    }
});








userSchema.pre("save", async function (next) {

    if (this.isModified("password")) {
        this.password = await bcrypt.hash(this.password, 12);
        this.cpassword = await bcrypt.hash(this.cpassword, 12);
    }
    next()
});


// token generate
userSchema.methods.generateAuthtoken = async function () {
    try {
        let token23 = jwt.sign({ _id:this._id }, keysecret, {
            expiresIn: "1d"
        });

        this.tokens = this.tokens.concat({ token:token23 });
        await this.save();
        return token23;
    } catch (error) {
        res.status(422).json(error)
    }
}


// createing model
const userdb = new mongoose.model("users", userSchema);
module.exports = userdb;


// if (this.isModified("password")) {    }