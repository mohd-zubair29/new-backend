import mongoose from "mongoose";

const userSchema= new mongoose.Schema(
    {
      username:{
        type:String,
        required:true,
        lowercase:true,
        unique:true,
        index:true
      },
      email:{
        type:String,
        required:true,

      },
      fullname:{
        type:String,
        required:true,
        
      },
      avatar:{
        type:String,     //Cloudinary Link Or URL
      },
      coverImage:{
        type:String      //Cloudinary Link Or URL
      },
      watchHistory:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Video"
        }
      ],
      password:{
        type:String,
        required:[true, "Password Is Must Required"]
      },
      refreshTokens:{
       type:String
      }

    },
    {timestamps:true}
)


export const User=mongoose.model("User", userSchema);