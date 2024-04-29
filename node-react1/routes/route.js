const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");

router.post("/register", async (req, res) => {
    const { email } = req.body;

    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: "gudisheakash@gmail.com",//process.env.EMAIL
                pass:  "ypum jlhp ezrg fubj" //Aakash@33909"
            }
        });

        const mailOptions = {
            from: "gudisheakash@gmail.com",
            to: email,
            subject: "Password Recovery",
            html: '<h1>Congratulations!</h1><p>You have successfully sent an email.</p>'
        };

        const info = await transporter.sendMail(mailOptions);
        console.log("Email sent:", info.response);
        res.status(201).json({ status: 201, info });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: "Error sending email" });
    }
});

module.exports = router;
