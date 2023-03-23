import User from  "../models/userModel.js"

import bcrypt from 'bcrypt';
import {setCookie} from '../utils/setCookie.js' 
import ErrorHandler from "../utils/customeError.js";

export const getAllUsers = async(req,res,next)=>{
 

    try{
        const users = await User.find({})


        res.json({
            success: true,
            users:users
        })

    }catch(error){
       next(error)
    }
 
}

export const registerUsers = async (req,res,next)=>{ 

     try{
        const {name,email,password} = req.body;

        let user = await User.findOne({email})
    
        if(user) return next(new ErrorHandler("User Already Exits",400))
    
      
          const hasedPassword = await bcrypt.hash(password,10)
    
         user = await User.create({name,email,password:hasedPassword})
    
         setCookie(user,res,"successfully Registered",201)

     }catch(error){
       next(error)
     }

   

    
}

export const loginUser = async (req,res,next)=>{

    try{

        const {email,password} = req.body;


        let user = await User.findOne({email}).select("+password")
     
        if(!user) return next(new ErrorHandler('User not found',404))
            
        const isMatch = await bcrypt.compare(password,user.password)
     
        if(!isMatch) return next(new ErrorHandler('User Not Found',404))
        
        
     
       setCookie(user,res,`Welcome Back ${user.name}`,201)

    }catch(error){
     next(error)
    }


}
export const getMyDetails = (req,res,next)=>{
    try{
        res.status(200).json({
            success:true,
            user:req.user
         }) 
    }catch(error){
      next(error)
    }
          
} 

export const logout = (req,res,next)=>{

       try{
        res.status(200).cookie("token","",{expires:new Date(Date.now())}).json({
            success:true,
            message:"Successfully Logout"
         })
       }catch(error){
          next(error)
       }

     

}