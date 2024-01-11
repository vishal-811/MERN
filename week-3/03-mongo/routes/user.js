const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const {User ,Course} =require('../db')

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    try {
        const {username ,password} =req.body;

    const newuser =await User.create({
        username,
        password
    })
    res.status(200).json({msg:"user created successfully"});
    } catch (error) {
        console.error(error);
    }
});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
   const courses =await Course.find({}).sort({
    createdAt:-1 //return courses in descending order , newest to oldest
   })
    res.status(200).json({courses})  
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
      const courseId =req.params.courseId;
      console.log(courseId);
      const username =req.headers.username;

      const course =await Course.findOne({_id:courseId});
         console.log(course);
      if(!Course){
        res.status(400).json({msg:"Course not found"});
      }
      else{
           await User.updateOne({
            username:username
           },
           {
             "$push":{
                purchasedCourses:courseId
             }
           })

         res.status(200).json({msg:"Course Purchased Successfully"});
      }
});
    

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const user=req.headers.username;
    console.log(user);
    const getUser=await User.findOne({user}).populate('purchasedCourses');
    console.log(getUser);
    res.status(200).json({purchasedCourses:getUser.purchasedCourses});
});

module.exports = router