const cartModel = require("../Models/cartModel")
const Ordermodel = require("../Models/orderModel")
const orderLineModel=require("../Models/orderLineModel")
const createOrderFromCarte= async (req,res) =>{
    try {  const userId=req.user.id //req.use from middlewear;authentificated         
        const cart=await cartModel.findOne({user:userId}).populate("items.product")
        if(!cart||cart.items.length===0){
            res.status(404).json({message:"cart not found"})
        }
//inititialisation d'une variable pour calculer le montant total de la commande
let total=0
//creation d'une nouvelle commande associer á lýtilisateur connecté
const newOrder=new Ordermodel({user:userId,totalamount:0})
await newOrder.save()
for(const i of cart.items){
    total=total+i.quantity*i.product.price
    const newOrderLine=new orderLineModel({order:newOrder._id,product:i.product._id,quantity:i.quantity})
    await newOrderLine.save()
}
newOrder.totalamount=total
await newOrder.save()
cart.items=[]
await cart.save()
res.status(201).json({message:"Order Created"})
    } catch (error) {
       res.status(500).json({message:error.message}) 
    }
}
const getOrderDetails= async (req,res)=>{
    try { const userId=req.user.id
         const order=await Ordermodel.findOne({user:userId})
          if(!order) {
            res.status(404).json({message:"ordr for this user not found"})
        }
       res.status(201).json({message:"order listed",data:order}) 
        
    } catch (error) {
         res.status(500).json({message:error.message}) 
    }
}

module.exports={createOrderFromCarte,getOrderDetails}
