const mongoose=require ('mongoose')

const productschema=new mongoose.Schema({
    name:{type:String,required:true},
    price:{type:Number},
    image:{type:String},
    description:{type:String},
    category:{type:mongoose.Schema.Types.ObjectId,ref:"Category",required:true} 
})
const Product= mongoose.model("Product",productschema)
module.exports=Product