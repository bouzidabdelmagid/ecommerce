const mongoose=require('mongoose')
const categoryschema=new mongoose.Schema({
    name:{type:String,required:true},
    products:[{type:mongoose.Schema.Types.ObjectId,ref:"Product",required:true}]
    
})

const Categorymodel= mongoose.model("Category",categoryschema)
module.exports=Categorymodel