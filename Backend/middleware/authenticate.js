const Users=require("../models/userSchema")

const authenticate= async()=>{
    try {
        const token=req.cookies.jwt
        if(!token){
            res.status(401).send("No token")
        }else{
            const verifyToken =jwt.verify(token,process.env.SECRET_KEY);
            const rootUser =await Users.findOne({_id : verifyToken,"tokens.token":token})

            if(!rootUser){
                res.status(401).send("User Not Found")
            }else{
               res.status(200).send("Authorized User") 
            }
        }
    } catch (error) {
        res.status(401).send("error")
        console.log("Error")
    }
}
module.exports=authenticate;