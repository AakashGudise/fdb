const express = require("express");
const router = new express.Router();
const userdb = require("../modals/userSchema");
const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");
// const userdb = require("../models/userSchema");
var bcrypt = require("bcryptjs");
const authenticate = require("../middleware/authenticate")
// const authenticate = require("../middleware/authenticate");

const keysecret = "Aakashfinddubaiproject"//process.env.SECRET_KEY//23 words secret key wecan weite any thing




// email config

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: 'gudisheakash@gmail.com',
        pass: "ypum jlhp ezrg fubj"
    }
})




// for user registration

router.post("/register", async (req, res) => {
    console.log(req.body)

    const { fname, email, password, cpassword, sname, ffriend, fdish, fcolor, fsong } = req.body;

    if (!fname || !email || !password || !cpassword || !sname || !ffriend || !fdish || !fcolor || !fsong) {
        res.status(422).json({ error: "fill all the details" })
    }

    try {

        const preuser = await userdb.findOne({ email: email });

        if (preuser) {
            res.status(422).json({ error: "This Email is Already Exist" })
        } else if (password !== cpassword) {
            res.status(422).json({ error: "Password and Confirm Password Not Match" })
        } else {
            const finalUser = new userdb({
                fname, email, password, cpassword, sname, ffriend, fdish, fcolor, fsong
            });

            // here password hasing

            const storeData = await finalUser.save();

            // console.log(storeData);
            res.status(201).json({ status: 201, storeData })
        }

    } catch (error) {
        console.error("Error:", error); // Log the error
        res.status(422).json(error);
        console.log("catch block error");
    }
    // catch (error) {
    //     res.status(422).json(error);
    //     console.log("catch block error");
    // }

});




// user Login

router.post("/login", async (req, res) => {
    console.log(req.body);

    const { email, password } = req.body;

    if (!email || !password) {
        res.status(422).json({ error: "fill all the details" })
    }

    try {
        const userValid = await userdb.findOne({ email: email });

        if (userValid) {

            const isMatch = await bcrypt.compare(password, userValid.password);

            if (!isMatch) {
                res.status(422).json({ error: "invalid details" })
            } else {

                // token generate
                const token = await userValid.generateAuthtoken();

                cookiegenerate
                res.cookie("usercookie", token, {
                    expires: new Date(Date.now() + 9000000),
                    httpOnly: true
                });
                const result = {
                    userValid,
                    token
                }
                res.status(201).json({ status: 201, result })
            }
        }
    } catch (error) {
        console.error("Error:", error); // Log the error
        res.status(401).json(error);
        console.log("catch block errors occurs");
    }
});



// user valid
router.get("/validuser", authenticate, async (req, res) => {
    try {
        const ValidUserOne = await userdb.findOne({ _id: req.userId });
        res.status(201).json({ status: 201, ValidUserOne });
    } catch (error) {
        res.status(401).json({ status: 401, error });
    }
});


// user logout

router.get("/logout", authenticate, async (req, res) => {
    try {
        req.rootUser.tokens = req.rootUser.tokens.filter((curelem) => {
            return curelem.token !== req.token
        });

        res.clearCookie("usercookie", { path: "/" });

        req.rootUser.save();

        res.status(201).json({ status: 201 })

    } catch (error) {
        res.status(401).json({ status: 401, error })
    }
})


//////////////////////////////////////////////

// send email Link For Password Recovery
router.post("/sendpasswordlink", async (req, res) => {
    console.log(req.body)

    const { email } = req.body;

    if (!email) {
        res.status(401).json({ status: 401, message: "Enter Your Email" })
    }

    try {
        const userfind = await userdb.findOne({ email: email });

        // console.log("userfind", userfind)////checking user details alogn with is in console terminal

        // token generate for reset password
        const token = jwt.sign({ _id: userfind._id }, keysecret, {
            expiresIn: "300s"
        });

        //console.log("token",token)// ckecking token generated or not in terminal

        const setusertoken = await userdb.findByIdAndUpdate({ _id: userfind._id }, { verifytoken: token }, { new: true });//this is fro update need find and compare code
        console.log("setusertoken", setusertoken)

        if (setusertoken) {
            const mailOptions = {
                from: 'gudisheakash@gmail.com',
                to: email,
                subject: "Sending Email For password Reset",
                text: `THIS LINK EXPIRES IN 5 MINUTES HTTP://localhost:3000/questions` // this link takes us directly to the questiuons page

                //the below link takes a token for auth and above link directly takes us to questions page


                // `THIS LINK EXPIRES IN 5MINUTES HTTP://localhost:3000/questions/${userfind.id}/${setusertoken.verifytoken}`//this verifirs token 
            }

            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    console.log("error", error);
                    res.status(401).json({ status: 401, message: "email not send" })
                } else {
                    console.log("Email sent", info.response);
                    res.status(201).json({ status: 201, message: "Email sent Succsfully" })
                }
            })

        }

    } catch (error) {
        res.status(401).json({ status: 401, message: "invalid user" })
    }

});

router.post("/security", async (req, res) => {
    const { email, sname, ffriend, fdish, fcolor, fsong } = req.body;

    try {
        const userValid = await userdb.findOne({ email });

        if (!userValid) {
            console.log("user verified")
            return res.status(404).json({ error: "User not found" });
            console.log("user verifies")

        }

        if (
            userValid.sname !== sname ||
            userValid.ffriend !== ffriend ||
            userValid.fdish !== fdish ||
            userValid.fcolor !== fcolor ||
            userValid.fsong !== fsong
        ) {
            return res.status(422).json({ error: "Invalid details" });
        }

        return res.status(200).json({ message: "Security questions verified successfully" });
    } catch (error) {
        console.error("Error:", error);
        return res.status(500).json({ error: "Internal server error" });
    }
});

router.get("/validuser",authenticate,async(req,res)=>{
    try {
        const ValidUserOne = await userdb.findOne({_id:req.userId});
        res.status(201).json({status:201,ValidUserOne});
    } catch (error) {
        res.status(401).json({status:401,error});
    }
});

// router.post("/security", async (req, res) => {
//     const { email, sname, ffriend, fdish, fcolor, fsong } = req.body;

//     try {
//         const userValid = await userdb.findOne({ email });

//         if (!userValid) {
//             return res.status(404).json({ error: "User not found" });
//         }

//         if (
//             userValid.sname !== sname ||
//             userValid.ffriend !== ffriend ||
//             userValid.fdish !== fdish ||
//             userValid.fcolor !== fcolor ||
//             userValid.fsong !== fsong
//         ) {
//             return res.status(422).json({ error: "Invalid details" });
//         }

//         // // Decrypt the password temporarily
//         const decryptedPassword = await bcrypt.compare(req.body.password, userValid.password);

//         // Return decrypted password along with user data
//         return res.status(200).json({ password: decryptedPassword, user: userValid });
//     } catch (error) {
//         console.error("Error:", error);
//         return res.status(500).json({ error: "Internal server error" });
//     }
// });


// router.post("/security", async (req, res) => {
//     console.log(req.body);

//     const {
//         email,
//         sname,
//         ffriend,
//         fdish,
//         fcolor,
//         fsong
//     } = req.body;

//     // Check if all required fields are provided
//     if (!email || !sname || !ffriend || !fdish || !fcolor || !fsong) {
//         return res.status(422).json({ error: "Fill all the details" });
//     }

//     try {
//         const userValid = await userdb.findOne({ email });

//         // If user with the provided email doesn't exist
//         if (!userValid) {
//             return res.status(404).json({ error: "User not found" });
//         }

//         // Check if the provided details match the user's data
//         if (
//             userValid.sname !== sname ||
//             userValid.ffriend !== ffriend ||
//             userValid.fdish !== fdish ||
//             userValid.fcolor !== fcolor ||
//             userValid.fsong !== fsong
//         ) {
//             return res.status(422).json({ error: "Invalid details" });
//         }

//         // Generate token and set cookie
//         const token = await userValid.generateAuthtoken();
//         res.cookie("usercookie", token, {
//             expires: new Date(Date.now() + 9000000),
//             httpOnly: true
//         });

//         const result = {
//             userValid,
//             // token
//         };

//         return res.status(201).json({ status: 201, result });
//     } catch (error) {
//         console.error("Error:", error);
//         return res.status(500).json({ error: "Internal server error" });
//     }
// });



// user valid
// router.get("/securityvaliduser", authenticate, async (req, res) => {
//     try {
//         const ValidUserOne = await userdb.findOne({ _id: req.userId });
//         res.status(201).json({ status: 201, ValidUserOne });
//     } catch (error) {
//         res.status(401).json({ status: 401, error });
//     }
// });



module.exports = router;




