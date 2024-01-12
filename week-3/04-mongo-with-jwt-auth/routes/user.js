require('dotenv').config();
const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const {emailpassSchema} =require('../middleware/admin');  //uses zod for validation
const {User,Course} =require('../db')
const bcrypt =require('bcrypt');
const jwt =require('jsonwebtoken');
const secret_key=process.env.JWT_SECRET;

// User Routes
router.post('/signup',emailpassSchema, async (req, res) => {
    // Implement user signup logic
    const {email,username,password} =req.body;
     
    try {
        const checkemail =await User.findOne({email});
    if(checkemail){
        res.status(406).json({msg:"email already exist, please signin"});
    }
    const checkusername =await User.findOne({username})
    if(checkusername){
        res.status(406).json({msg:"username already exist"});
    }

    const hashedPassword =await bcrypt.hash(String(password),10);
    await User.create({
        email,
        username,
        password:hashedPassword,
    })
     const token =jwt.sign({username},secret_key);
    res.status(201).json({msg:"user created successfully",token:token});
    } catch (error) {
         console.error(error);
    }
});

router.post('/signin',async (req, res) => {
    // Implement admin signup logic
    const {email,username,password}=req.body;
    const usercheck =await User.findOne({email:email ,username:username})
    // console.log(usercheck);
    // console.log(usercheck.password);
    if(!usercheck){
        res.status(400).json({msg:"Invalid email or username"});
    }
     const verifypass =await bcrypt.compare(String(password),usercheck.password);
    if(!verifypass){
        res.status(400).json({msg:"wrong password"});
    }
    else{
        const token =jwt.sign(username ,secret_key);
    res.status(200).json({msg:"signin succesfully" ,token:token});
    }
});

router.get('/courses', async(req, res) => {
    // Implement listing all courses logic
    try {
        const courses =await Course.find({});
        res.status(200).json(courses);
    } catch (error) {
        res.status(400).json({msg:"something went wrong"});
    }
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const courseId =req.params.courseId;
       const course =await Course.findById(courseId);
    //  console.log(course);
       if(!course){
        res.status(400).json({msg:"Cannot find any course with this course id"})
       }
       const user = await User.findById({_id: req.user._id});
    //    console.log(user.username);
        const updateuser =await User.findByIdAndUpdate(
            {_id:req.user._id},
             {
                $push:{
                    purchasedCourses:courseId
                }
             },
             {
                new:true,
             })
            console.log(updateuser);
            res.status(200).json({msg:"course purcahsed successfully"});
    });
    

router.get('/purchasedCourses', userMiddleware, async(req, res) => {
    // Implement fetching purchased courses logic
    try {
        const course =await User.findOne({username:req.user.username}).populate('purchasedCourses');
    res.status(200).json(course.purchasedCourses);
    } catch (error) {
        res.status(400).json({msg:"No course purchased"});
    }
});

module.exports = router