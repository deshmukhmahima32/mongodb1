import mongoose from "mongoose";

const UserSchema=mongoose.Schema({
    id:{
        type:Number,
        required:true,
    },
    name:{
        type:String,
        required:true,
    },
    email:{
       type:String,
       required:true,
       unique:true
    },
    password:{
        type:String,
        unique:true,
        required:true
    }
},{
    timestamps:false
});

const User = mongoose.model('user', UserSchema);

export default User;