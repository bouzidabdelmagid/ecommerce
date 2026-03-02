const mongoose=require ("mongoose")
const orderschema= new mongoose.Schema({
    user:{type:mongoose.Schema.Types.ObjectId,ref:"User",required:true},
    totalamount:{type:Number,required:true},
    status:{type:String,enum:["pending","payed","canceled"],default:"pending"},
    createdat:{type:Date,default:Date.now} 
 })
 const Ordermodel= mongoose.model("Order",orderschema)
 module.exports=Ordermodel