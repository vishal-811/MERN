 require('dotenv').config();
const { Router } = require("express");
const {adminMiddleware,emailpassSchema} = require("../middleware/admin");
const router = Router();
const bcrypt =require('bcrypt');
const saltrounds=10;
const {Admin, Course} =require('../db');
const jwt=require('jsonwebtoken')
const jwt_secret =process.env.JWT_SECRET;  
// Admin Routes
router.post('/signup', emailpassSchema, async (req, res) => {
    // Implement admin signup logic
    const {email,username , password} =req.body;
    
    try {
        const useremail =await Admin.findOne({email:email})
    if(useremail){
        res.status(406).json({msg:"Admin already exist with this credentials"})
    }
    const name =await Admin.findOne({username:username})
    if(name){
        res.status(406).json({msg:"Admin already exist"})
    }
    else{
        
        const hashedPassword = await bcrypt.hash(String(password),saltrounds); // 10 is the number of rounds

    await Admin.create({
        email,
        username,
        password:hashedPassword
    })

    const token =jwt.sign({username:username},jwt_secret);

    res.status(201).json({msg:"Admin created Successfully" ,token:token});
    }

    } catch (error) {
        console.error(error);
    }
});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
    const {email,username,password}=req.body;
    try {
    const alreadyexist =await Admin.findOne({email:email});
    console.log(alreadyexist);
    if(!alreadyexist){
        res.status(400).json({msg:"Admin doesn't exist ,Please signup firstly",token:null});
    }

    const passwordcheck =await bcrypt.compare(String(password) ,alreadyexist.password);

    if(!passwordcheck){
        res.status(400).json({msg:"Wrong password" , token:null})
    }

    const token =jwt.sign({username} ,jwt_secret);
    res.status(201).json({msg:"signin successfull" ,token:token});
    
    } catch (error) {
        res.status(400).json({msg:"signin fail"});
    }
});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
      const {title, description, price} =req.body;
       const newcourse =await Course.findOne({title:title})
       
        if(newcourse){
            res.status(400).json({msg:"course already exist"})
           }
            else{
                
                await Course.create({
                    // imageLink,
                    title,
                    description,
                    price
                })
    
                res.status(201).json({msg:"course created successfully"})
            }

});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const courses =await Course.find({});
    if(courses===null || courses===undefined){
        res.status(400).json({msg:"No courses are available"});
    }
     res.status(200).json({courses});
});

module.exports = router;