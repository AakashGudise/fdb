
const express = require("express")
require("dotenv").config();
const mongoose = require("mongoose")
const cors = require("cors");
const cookiParser = require("cookie-parser")


require("./db/conn");

// const UserModule = require("./modals/userModule");
const UserRegistrationModule = require("./modals/userRegistration");
// const Router = require("./routes/route")
const router = require("./routes/router")
const UserModal = ("./modals/UserModule")
const app = express();

app.use(express.json());


app.use(cookiParser());
app.use(cors());
app.use(router)//imported from routes

// app.use(Router)//imported from routes

app.listen(5001,() =>{
    console.log("server is running at 5001")
})

// const connectDB = async()=> {
//     await mongoose.connect(`mongodb+srv://aakash:Aakash@123@cluster0.hlm4nsu.mongodb.net/`)
//     console/log(`the db is connected with${mongoose.connection.host}`)
// }
// connectDB()
// mongoose
//   .connect(
//     `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.fvblt9q.mongodb.net/fdubai?retryWrites=true&w=majority&appName=Cluster0` //@ajayreddycluster.1x5u1ub.mongodb.net/FDBPractice?retryWrites=true&w=majority
//   )//mongodb+srv://gudisheakash:Aakash@33909@cluster0.fvblt9q.mongodb.net/fdubai?retryWrites=true&w=majority&appName=Cluster0
//   .then(() => console.log("DB Connected"))
//   .catch((error) => console.log(error));

// mongoose.connect("mongodb://127.0.0.1:27017/fdb");

// app.post("/CreateUsersRegistration", (req,res) =>{
//     UserRegistrationModule.create(req.body)
//     .then(users => res.json(users))
//     .catch(err => res.json(err))
// })

// app.post("/CreateUsers", (req,res) =>{
//     UserModule.create(req.body)
//     .then(users => res.json(users))
//     .catch(err => res.json(err))
// })

// app.get("/" ,(req,res) => {
//     UserModule.find({})
//     .then(users => res.json(users))
//     .catch(err => res.json(err))
// })

// app.get('/getUser/:id', (req,res) =>{
//     const id = req.params.id
//     UserModule.findById({_id:id})
//     .then(users => res.json(users))
//     .catch(err => res.json(err))

// })

// // app.put('/UpdateUser/:id', (req,res) => {
// //     const id = req.params.id;
// //     UserModule.findByIdAndUpdate(id, {
// //         name: req.body.name,
// //         email: req.body.email,
// //         age: req.body.age
// //     }, { new: true })
// //         .then(user => res.json(user))
// //         .catch(err => res.json(err));
// // });
// app.put('/UpdateUser/:id',(req,res) =>{
//     const id = req.params.id

//     UserModule.findByIdAndUpdate({_id:id},{
//         name:req.body.name,
//         email:req.body.email,
//         age:req.body.age,
//         password:req.body.password
//     })
//     .then(users => res.json(users))
//     .catch(err => res.json(err))
// })


// app.delete('/deleteUser/:id',(req,res)=>{
//     const id = req.params.id;
//     UserModule.findByIdAndDelete(id)
//     .then(result => res.json(result))
//     .catch(err => res.json(err))
// })








