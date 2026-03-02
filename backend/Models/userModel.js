const mongoose=require('mongoose')
const userSchema=new mongoose.Schema({
fullName: {type:String,required:true},
email:{type:String,required:true},
password:{type:String,required:true},
Country:{type:String},
address:{type:String},
phoneNumber:{type:Number},
resetToken:{type:String},
role:{type:String,enum:["Admin","Provide","Client"],default:"Client",required:true}
})
 const User= mongoose.model("User",userSchema)
 module.exports=User
