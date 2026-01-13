// require('dotenv').config({path:"./env"});
import express from "express"
const app=express();
import dotenv from "dotenv"
import mongoose from "mongoose"
import { DB_NAME } from "./constants.js"
import connectDB from "./db/index.js"

dotenv.config({path:'./env'})

connectDB()
.then( ()=>{
    app.get('/hello',(req, res)=>{
        res.send("Hello Mohammed Zubair");
    })

    app.listen(`App Is Listening At Port ${process.env.PORT}`,()=>{
        console.log(`App Is Listening at port ${process.env.PORT}`);
    })
})
.catch((error)=>{
    console.log("Error In Connecting To Database", error);
})

