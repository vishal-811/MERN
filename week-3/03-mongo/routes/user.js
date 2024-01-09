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
    createdAt:-1 //return courses in descending order
   })
    res.status(200).json({courses})  
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const courseId =req.params.courseId;
    
      res.status(200).json({msg:"course purchased successfully"});


    

});

router.get('/purchasedCourses', userMiddleware, (req, res) => {
    // Implement fetching purchased courses logic
    const purchasedCourse =
    res.status(200).json({purchasedCourse})
});

module.exports = router