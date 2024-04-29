const jwt = require("jsonwebtoken");
const userdb = require("../modals/userSchema")
// const userdb = require("../models/userSchema");
// const keysecret = process.env.SECRET_KEY
const keysecret = "Aakashfinddubaiproject"//process.env.SECRET_KEY//23 words secret key wecan weite any thing



const authenticate = async(req,res,next)=>{

    try {
        const token = req.headers.authorization;
        
        const verifytoken = jwt.verify(token,keysecret);
        
        const rootUser = await userdb.findOne({_id:verifytoken._id});
        
        if(!rootUser) {throw new Error("user not found")}

        req.token = token
        req.rootUser = rootUser
        req.userId = rootUser._id

        next();

    } catch (error) {
        res.status(401).json({status:401,message:"Unauthorized no token provide"})
    }
}


module.exports = authenticate