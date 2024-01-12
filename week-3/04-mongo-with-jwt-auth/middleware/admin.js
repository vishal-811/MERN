const jwt =require('jsonwebtoken');
const jwt_secret ="hello";
const zod =require('zod');

// Middleware for handling auth
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
     const token =req.headers.authorization;
     if(!token){
        res.status(401).send("Access Denied! No token provides")
     }
     try {
        const decoded =jwt.verify(token,jwt_secret);
        req.admin =decoded;
        next();
     } catch (error) {
         res.status(400).json({msg:"Invalid token"});
     }
}


function emailpassSchema(req,res,next){
    const {email,username, password} =req.body;
    const emailSchema = zod.string().email();
    const usernameSchema =zod.string();
    const passwordSchema =zod.string().or(zod.number());

    try {
         emailSchema.parse(email);
         usernameSchema.parse(username);
         passwordSchema.parse(password);
         next();
    } catch (error) {
        console.error(error)
       res.status(400).json({msg:"Invalid username or password"});   
    }
}
module.exports = {
    adminMiddleware,
    emailpassSchema
};