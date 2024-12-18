import { response } from "express"
import User from "../model/user.model.js"
import bcrypt from "bcrypt"

export const SignUpAction=async(request,response,next)=>{
    const {id,name,email,password}=request.body
    try{
        let saltKey=bcrypt.genSaltSync(10);
       const  hashpassword=bcrypt.hashSync(password,saltKey)
        // request.body.password=hashpassword;
       const newUser=new User({id,name,email,password:hashpassword})     
       const savedUser=await newUser.save();
       response.status(201).json({message:"user created successfully"});

    //    ,user:{id:savedUser.id,name:savedUser.name,email:savedUser.email}
    }
    catch(error){
        console.log(error);
        
        response.status(500).json({error:"internal server error"});

    }
}

export const logInAction=async(request,response,next)=>{
    const {email,password}=request.body;
    try{
        let user =await User.findOne({email});
        if(user){
            let dbPassword=user.password;
            let status=bcrypt.compareSync(password,dbPassword);
            return status ? response.status(200).json({message:"sign in successful....",user}):response.status(401).json({error:"Unautherised user...."})
        }


      
     return response.status(401).json({error:"Unautherised user...."});

    }
    catch(error){
        response.status(500).json({error:"internal server error"});
    }
}