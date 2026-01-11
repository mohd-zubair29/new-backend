import mongoose from "mongoose"


import { DB_NAME } from "../constants.js"


const connectDB= async ()=>{
    try {
        const connectionInstance=
         await mongoose.connect(`${process.env.MONGO_URL}/${process.env.DB_NAME}`);
     console.log(`\n MongoDB Is Connected !! ${connectionInstance.connection.host}`);
    } catch (error) {
         console.log("ERROR:", error);
    }
}

export default connectDB