const mongoose=require ("mongoose")
const orderlineschema= new mongoose.Schema({
    order:{type:mongoose.Schema.Types.ObjectId,ref:"Order",required:true},
   product:{type:mongoose.Schema.Types.ObjectId,ref:"Product",required:true},
    quantity:{type:Number,required:true}
 })
 const orderlinemodel=mongoose.model("Orderline",orderlineschema)
 module.exports=orderlinemodel