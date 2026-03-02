const cartModel = require("../Models/cartModel")

const addtocart=async (req,res)=> {
    try {const{product,quantity}=req.body
    const userId=req.user.id //req.use from middlewear;authentificated
        let cart=await cartModel.findOne({user:userId})
        if(!cart){
           cart= new cartModel({user:userId,items:[]})
        }
        const itemIndex=cart.items.findIndex(i=>i.product.toString()===product)
        if (itemIndex>-1){
            cart.items[itemIndex].quantity+=quantity
        }
        else { 
            cart.items.push({product,quantity})
        }
        await cart.save()
        res.status(201).json({message:"product added",data:cart})
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}
const getcart=async (req,res)=>{
    try { const userId=req.user.id 
        const cart=await cartModel.findOne({user:userId}).populate("items.product")
        if(!cart) {
            res.status(404).json({message:"cart for this user not found"})
        }
       res.status(201).json({message:"cart listed",data:cart}) 
        
    } catch (error) {
       res.status(500).json({message:error.message}) 
    }
}
const updateCartItems= async (req,res)=> {
    try {
        const userId=req.user.id 
        const cart=await cartModel.findOne({user:userId})
        const{quantity}=req.body
        const productid=req.params.id
        if(!cart){
            res.status(404).json({message:"cart not found"})
        }
        const item=cart.items.find(i=>i.product.toString()===productid.toString())
        if(!item){res.status(404).json({message:"Product not found in the cart items"})}
        else{
            item.quantity=quantity
        }
        await cart.save()
        res.status(200).json({message:"cart updated succefuly"})
    } catch (error) {
       res.status(500).json({message:error.message}) 
    }
}
const removeCartItems=async (req,res)=>{
    try {
        const userId=req.user.id 
        const productid=req.params.id
        const cart=await cartModel.findOne({user:userId})
         if(!cart){
            res.status(404).json({message:"cart not found"})
        }
         cart.items=cart.items.filter(i=>i.product.toString()!==productid.toString())
         await cart.save()
         res.status(200).json({message:"product deleted succefully"}) 
    } catch (error) {
        res.status(500).json({message:error.message}) 
    }
}
module.exports={addtocart,getcart,updateCartItems,removeCartItems}