const Categorymodel = require("../Models/categoryModel")
const Product = require("../Models/ProductModel")

const addproduct= async(req,res)=>{
   try { const{name,price,description,category}=req.body
   const image=req.file ? req.file.filename : null 
    const newProduct=await new Product({name,price,description,image,category})
   await newProduct.save()
    
    //update of products [] with the created product id //
    await Categorymodel.findByIdAndUpdate({_id:req.body.category},{$push:{products:newProduct._id}})
    res.status(201).json({message:"Prodcut created"})
   } catch (error) {
     res.status(500).json({message:error.message})
   }
}
const getallproduct= async(req,res)=>{
    try {
      const allproduct=await Product.find().populate("category") 
       
        res.status(200).json({message:"Productlisted",data:allproduct})
        
    } catch (error) {
     res.status(500).json({message:error.message})   
    }
}
const updateproduct=async (req,res)=>{
  try {
    const{name,price}=req.body
    const productid=req.params.id
    const updatedproduct=await Product.findByIdAndUpdate(productid,{name,price},{new:true})
    if(!updatedproduct){res.status(404).json({message:"Product not find"})}
    else{ res.status(200).json({message:"Product updated",data:updatedproduct})}
  } catch (error) {
    res.status(500).json({message:error.message})
    
  }
}
const deleteproduct=async (req,res)=>{
  try {
    const productid=req.params.id
    const deleteproduct=await Product.findByIdAndDelete(productid)
    if(!deleteproduct){res.status(404).json({message:"Product not found"})}
    else{res.status(200).json({message:"Product delete"})}
    
  } catch (error) {
    res.status(500).json({message:error.message})
  }
}
const getproductbyid=async (req,res)=>{
  try {
    const productid=req.params.id
    const getproduct=await Product.findById(productid).populate("category")
    if(!getproduct){res.status(404).json({message:"Product not found"})}
    else{ res.status(200).json({message:"Product is found",data:getproduct})}
  } catch (error) {
    res.status(500).json({message:error.message})
  }
}

module.exports={addproduct,getallproduct,updateproduct,deleteproduct,getproductbyid}

