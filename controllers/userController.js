const userModel = require("../models/user");
const bodyPart = require("../models/body_parts");
const exerciseModel = require("../models/exercise");
const SECRET_KEY="GYM_API";
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")

const signup=async (req,res,next)=>{
    const {username,email,password}=req.body;
    try {
        const existingUser=await userModel.findOne({$or:[{username:username},{email:email}]});
    if(existingUser){
    
        return res.status(400).json({message:"This email or username already exists!",bodypart:documents})
    }
    const hashedPassword=await bcrypt.hash(password,12);
   
    
    const user =await userModel.create({email:email,username:username,password:hashedPassword});
    const token=jwt.sign({email:user.email,id:user._id},SECRET_KEY);
    res.status(200).json({user,token});

    } catch (error) {
        res.status(200).json({error:`${error}`})
    }
}


const login=async (req,res,next)=>{
    const {username,email,password}=req.body;
    try {
        console.log(email,username);
         const existingUser=await userModel.findOne({$or:[{username:username},{email:email}]});
    if(!existingUser){
        console.log(existingUser);
        return res.status(400).json({message:"This email or username doesn't exists!"})
    }
    const matchPassword=await bcrypt.compare(password,existingUser.password);
    if(!matchPassword){
        return res.status(200).json({message:"Incorrect Password"});
    }
    const token=jwt.sign({email:existingUser.email,id:existingUser._id},SECRET_KEY);
    res.status(200).json({existingUser,token});

    } catch (error) {
        res.status(200).json({error:error})
    }
}
    module.exports={signup,login}