const mongoose=require("mongoose")
const cartitemschema=new mongoose.Schema({
    product:{type:mongoose.Schema.Types.ObjectId,ref:"Product",required:true},
    quantity:{type:Number,required:true,default:1}
})
const cartshema=new mongoose.Schema({
    user:{type:mongoose.Schema.Types.ObjectId,ref:"User",required:true},
    items:[cartitemschema]
    
})
module.exports=mongoose.model("Cart",cartshema)