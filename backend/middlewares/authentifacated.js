const jwt=require("jsonwebtoken")
module.exports=(req,res,next)=>{
    try {
        const autHeader=req.headers.authorization
    if(!autHeader){
        return res.status(401).json({message:"unauthorized action"})
    }
    const token=autHeader.split(" ")[1]
    const decodeToken=jwt.verify(token,process.env.ACCESS_KEY)
req.user=decodeToken 
console.log("the token is:",decodeToken)
next ()
       
    } catch (error) {
      res.status(403).json({message:"invalide Token"})  
    }
}