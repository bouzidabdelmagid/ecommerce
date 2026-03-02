const Usermodel=require("../Models/userModel")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
const sendEmail = require("../utile/sendEmail")
const adduser= async (req,res)=>{
   try { const{fullName,email,password,Country,address,phoneNumber,role}=req.body
    const userExist=await Usermodel.findOne({email})
   if (userExist){
    return res.status(400).json({message:"email already exist"})
   }
   const hashedPassword=await bcrypt.hash(password,10)
    const newUser=await new Usermodel({fullName,email,password:hashedPassword,Country,address,phoneNumber,role})

   await newUser.save()
    return res.status(201).json({message:"User created"})
   } catch (error) {
     res.status(500).json({message:error.message})
   }

}
const generateAccessToken=(user)=> {
  return jwt.sign({id:user._id,role:user.role},process.env.ACCESS_KEY,{expiresIn:"1h"})
}
const generateRefreshToken=(user)=> {
  return jwt.sign({id:user._id,role:user.role},process.env.REFRESH_KEY,{expiresIn:"3w"})
}
let refreshtokens=[]
const login=async (req,res) => {
  try {
    const{email,password}=req.body
    const userExist=await Usermodel.findOne({email})
    if(!userExist){
      res.status(400).json({message:"User with email doesn't exist"})
    }
    const matchedPassword=await bcrypt.compare(password,userExist.password)
    if(!matchedPassword){
      res.status(400).json({message:"Wrong password"})
      
    }
    const accessToken=generateAccessToken(userExist)
    const refreshToken=generateRefreshToken(userExist)
    refreshtokens.push(refreshToken)
    res.status(200).json({message:"Login successfully",data:userExist,accessToken,refreshToken})
  } catch (error) {
    res.status(500).json({message:error.message})
  }
}
const logout= (req,res) => {
  try {
    const {refreshToken}=req.body
    if(!refreshToken){ 
      res.status(400).json({message:"No refresh token provided"})
    }
    refreshtokens=refreshtokens.filter(token=>token!==refreshToken)
    res.status(200).json({message:"logout successfully"})
    
  } catch (error) {
    res.status(500).json({message:error.message})
  }
}
const forgetPassword=async(req,res)=>{
  try {
    const{email}=req.body
    const userExist=await Usermodel.findOne({email})
    if(!userExist){
      res.status(400).json({message:"User with email doesn't exist"})
    }
    const token=jwt.sign({id:userExist._id},process.env.ACCESS_KEY,{expiresIn:"2h"})
    userExist.resetToken=token 
    await userExist.save ()
    const resetLink= `http://localhost:3000/resetpassword/${token}`
const htmlMessage=`<h2>Hello ${userExist.fullName} </h2> 
<p> Please use this klink to reset your password </p>
<a href=${resetLink}>${resetLink}</a>`
const Subject="Reset password"
const emailSent=await sendEmail(userExist.email,htmlMessage,Subject)
if (emailSent){
  return res.status(200).json({message:"Email has been send succefully"})
  
}
 else {
  return res.status(500).json({message:"failled to send"})
 }   
  } catch (error) {
    res.status(500).json({message:error.message})
  }
}
const resetPassword=async(req,res)=>{
  try {
    const {newPassword}=req.body
    const {token}=req.params
    const decodeToken=jwt.verify(token,process.env.ACCESS_KEY)
    const user=await Usermodel.findById(decodeToken.id)
    if(!user){
      return res.status(404).json({message:"User not found"})
    }
    else {
      const hashedPassword=await bcrypt.hash(newPassword,10)
      user.password=hashedPassword
      user.resetToken=null
      await user.save()
      return res.status(200).json({message:"password reset succefully"})
    }
  } catch (error) {
   return res.status(500).json({ message:error.message}) 
  }
}
module.exports={adduser,login,logout,forgetPassword,resetPassword}