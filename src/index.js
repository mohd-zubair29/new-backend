// require('dotenv').config({path:"./env"});
import dotenv from "dotenv"
import mongoose from "mongoose"
import { DB_NAME } from "./constants.js"
import connectDB from "./db/index.js"

dotenv.config({path:'./env'})

connectDB()
.then( ()=>{
    app.listen(`App Is Listening At Port ${process.env.PORT}`)
})
.catch((error)=>{
    console.log("Error In Connecting To Database", error);
})

