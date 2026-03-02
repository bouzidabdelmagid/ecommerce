const express=require("express")
const { addcategory, getallcategory, updatecategory, deletecategory, getcategorybyid } = require("../Controllers/CategoryController")
const authentifacated = require("../middlewares/authentifacated")
const authorized = require("../middlewares/Authorized")

//creation dé route depuis express
const router=express.Router()
router.post('/addcategory',authentifacated,authorized("Admin","Provider"),addcategory)
router.get('/getallcategory',getallcategory) 
router.put('/updatedcategory/:id',authentifacated,authorized("Admin","Provider"),updatecategory)
router.delete('/deletecategory/:id',authentifacated,authorized("Admin","Provider"),deletecategory)
router.get('/getcategory/:id',getcategorybyid)

module.exports=router