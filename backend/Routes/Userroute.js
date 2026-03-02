const express=require("express")
const { adduser, login, logout, forgetPassword, resetPassword } = require("../Controllers/UserController")

const router=express.Router()
router.post("/register",adduser)
router.post("/login",login)
router.post("/logout",logout)
router.post("/forgetpassword",forgetPassword )
router.post("/resetpassword/:token",resetPassword )
module.exports=router