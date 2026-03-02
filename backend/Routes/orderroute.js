const express=require("express")
const { createOrderFromCarte, getOrderDetails } = require("../Controllers/OrderController")
const authentifacated = require("../middlewares/authentifacated")
const router=express.Router()
router.post("/createorder",authentifacated ,createOrderFromCarte)
router.get("/getorder",authentifacated ,getOrderDetails)
module.exports=router
