const express=require("express")
const { addproduct, getallproduct, updateproduct, deleteproduct, getproductbyid } = require("../Controllers/ProductController")
const upload = require("../middlewares/upload")
const authentifacated = require("../middlewares/authentifacated")
const authorized = require("../middlewares/Authorized")
//creation dé route depuis express
const router=express.Router()
router.post('/addproduct',authentifacated,authorized("Admin","Provider"),upload.single("image"),addproduct)
router.get('/getallproduct',getallproduct) 
router.put('/updatedproduct/:id',authentifacated,authorized("Admin","Provider"),updateproduct)
router.delete('/deleteproduct/:id',authentifacated,authorized("Admin","Provider"),deleteproduct)
router.get('/getprouctbyid/:id',getproductbyid)

module.exports=router
