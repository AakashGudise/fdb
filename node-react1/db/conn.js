const mongoose = require("mongoose");
const DB ='mongodb+srv://gudisheakash:gudisheakash@cluster0.3p36pes.mongodb.net/fdb'
//process.env.DATABASE

mongoose.connect(DB)
  .then(() => console.log('Database Connected'))
  .catch((err) => {
    console.error('Error connecting to the database:', err);
  });
// mongoose.connect(DB, {
//     useUnifiedTopology: true,
//     useNewUrlParser: true // 
// }).then(() => console.log('DataBase Connected')).catch((errr) => {
//     console.log(errr);
// })

// const DB = "mongodb+srv://gudisheakash:Aakash@33909@cluster0.ddpn4i9.mongodb.net/fdb?retryWrites=true&w=majority&appName=Cluster0"
// //process.env.DATABASE

// mongoose.connect(DB,{
//     useUnifiedTopology: true,
//     useNewUrlParser: true
// }).then(()=> console.log("DataBase Connected")).catch((errr)=>{
//     console.log(errr);
// })

// //   mongodb+srv://gudisheakash:Aakash@33909@cluster0.ddpn4i9.mongodb.net/fdb?retryWrites=true&w=majority&appName=Cluster0

// const mongoose = require("mongoose");

// const DB = "mongodb+srv://gudisheakash:Aakash@33909@cluster0.fvblt9q.mongodb.net/fdubai?retryWrites=true&w=majority&appName=Cluster0";

// 'mongodb://127.0.0.1:27017/fdb'
// "mongodb+srv://gudisheakash:Aakash@33909@cluster0.ddpn4i9.mongodb.net/fdb?retryWrites=true&w=majority&appName=Cluster0";
// process.env.DATABASE
// mongoose.connect(DB).then(() => {
//     console.log("Database Connected");
// }).catch((err) => {
//     console.error("Error connecting to database:", err);
// });

// mongoose.connect(DB, {
//     useUnifiedTopology: true,
//     useNewUrlParser: true
// }).then(() => console.log("Database Connected")).catch((errr) => {
//     console.log(errr);
// });

// 

// const mongoose = require(mongoose);
// c
 // // mongodb+srv://gudisheakash:Aakash@33909@cluster0.ddpn4i9.mongodb.net/fdb?retryWrites=true&w=majority&appName=Cluster0 const mongoose = require( mongoose ); const DB = mongodb+srv://gudisheakash:Aakash@33909@cluster0.fvblt9q.mongodb.net/fdubai?retryWrites=true&w=majority&appName=Cluster0 ; // mongodb://127.0.0.1:27017/fdb // mongodb+srv://gudisheakash:Aakash@33909@cluster0.ddpn4i9.mongodb.net/fdb?retryWrites=true&w=majority&appName=Cluster0 ; // process.env.DATABASE mongoose.connect(DB).then(() => { console.log( Database Connected ); }).catch((err) => { console.error( Error connecting to database: , err); }); // mongoose.connect(DB, { // useUnifiedTopology: true, // useNewUrlParser: true // }).then(() => console.log( Database Connected )).catch((errr) => { // console.log(errr); // }); 
