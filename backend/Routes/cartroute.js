const express=require("express")
const { addtocart, getcart, updateCartItems, removeCartItems } = require("../Controllers/CartController")
const authentifacated = require("../middlewares/authentifacated")
const router=express.Router()
router.post("/addcart", authentifacated,addtocart)
router.get("/getcart",authentifacated ,getcart)
router.put("/updatecartitems/:id",authentifacated,updateCartItems)
router.delete("/productdelete/:id",authentifacated,removeCartItems)
module.exports=router
