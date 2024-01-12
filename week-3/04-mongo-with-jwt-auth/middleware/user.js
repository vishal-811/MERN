  require('dotenv').config();
const jwt=require('jsonwebtoken');
const secret_key=process.env.JWT_SECRET;
const {User} =require('../db')

async function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const token =req.headers.authorization;
     if(!token){
        res.status(401).json({msg:"Access Denied! , No token provided"});
     }
    
     try {
        const decode =jwt.verify(token,secret_key); 
        if(decode){
           const user=await User.findOne(decode.username); 
        //    console.log(user);
           if(!user){
            res.status(401).send('unauthorized');
        }
            req.user=user;
             next();
        }else{
            res.status(401).send("unauthorized");
        }
         
     } catch (error) {
         res.status(400).json({msg:"Invalid Token!"})
     }

}   



module.exports = userMiddleware;