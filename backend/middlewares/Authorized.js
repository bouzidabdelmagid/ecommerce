const authorized=(...roles)=> {
    return (req,res,next)=>{
        if (!roles.includes(req.user.role)){
            return (res.status(403).json({message:"Forbiden access"}))
        }
        next()
    }


}
module.exports=authorized