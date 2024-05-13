import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import connectDB from "./db/index.js";
import dotenv from "dotenv";
import {app} from './app.js'


dotenv.config({
  path: "./env",
});

connectDB()
  .then( ()=>{
    app.listen(process.env.PORT || 7000 ,()=>{
      console.log(`Server is runnig at port: ${process.env.PORT}`)
  })
  }
    
  )
  .catch((error) => {
    console.log("MongoDB connection failed !!", error);
  });

// import { express } from "express";
// const app = express();
// // function connectDb(){}
// // connectDb()
// ;(async()=>{
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${process.env.PORT}`)
//         app.on("error",(e)=>{
//             console.log("ERROR:",error)
//             throw error
//         })
//         app.listen(process.env.PORT,()=>{
//             console.log(`App is listening on port ${process.env.PORT}`)
//         })
//     } catch (error) {
//         console.log("ERROR:",error)
//         throw error;
//     }
// })()
