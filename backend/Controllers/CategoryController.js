const Categorymodel = require("../Models/categoryModel") 

const addcategory= async(req,res)=>{
   try { const{name}=req.body
    const newCategory=await new Categorymodel({name})
   await newCategory.save()
    res.status(201).json({message:"New Category Created"})
    
   } catch (error) {
     res.status(500).json({message:error.message})
   }
}
const getallcategory= async(req,res)=>{
    try {
      const allcategory=await Categorymodel.find().populate("products")
       
        res.status(200).json({message:"Categorylisted",data:allcategory})
        
    } catch (error) {
     res.status(500).json({message:error.message})   
    }
}
const updatecategory=async (req,res)=>{
  try {
    const{name}=req.body
    const categoryid=req.params.id
    const updatedcategory=await Categorymodel.findByIdAndUpdate(categoryid,{name},{new:true})
    if(!updatedcategory){res.status(404).json({message:"category not found"})}
    else{ res.status(200).json({message:"category updated",data:updatedcategory})}
  } catch (error) {
    res.status(500).json({message:error.message})
    
  }
}
const deletecategory=async (req,res)=>{
  try {
    const categoryid=req.params.id
    const deletedcategory=await Categorymodel.findByIdAndDelete(categoryid)
    if(!deletedcategory){res.status(404).json({message:"category not founded"})}
    else { res.status(200).json({message:"category deleted"})}
  } catch (error) {
    res.status(500).json({message:error.message})
    }
    
  }
  const getcategorybyid=async (req,res)=>{
    try {
       const categoryid=req.params.id
       const getcategory=await Categorymodel.findById(categoryid)
       if(!getcategory){res.status(404).json({message:"category not founded"})}
    else { res.status(200).json({message:"categorylisted",data:getcategory})}
      
    } catch (error) {
      res.status(500).json({message:error.message})
      
    }
   

  }


module.exports={addcategory,getallcategory,updatecategory,deletecategory,getcategorybyid}