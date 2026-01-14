// require('dotenv').config({path:"./env"});
import dotenv from "dotenv"
import mongoose from "mongoose"
import { DB_NAME } from "./constants.js"
import connectDB from "./db/index.js"
import {app} from "./app.js"
dotenv.config({path:'./env'})

connectDB()
.then( ()=>{
   
    app.listen(`App Is Listening At Port ${process.env.PORT}`,()=>{
        console.log(`App Is Listening at port ${process.env.PORT}`);
    })
})
.catch((error)=>{
    console.log("Error In Connecting To Database", error);
})

