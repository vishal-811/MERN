const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const {Admin, Course} =require('../db')

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const username =req.body.username;
    const password=req.body.password;

    try {
        const newAdmin =await Admin.create({
            username:username,
            password:password
        })
        res.status(200).json({msg:"Admin created Successfully"});
   
    } catch (error) {
        console.error(error);
    }
});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    //  const title =req.body.title;
    //  const description =req.body.description;
    //  const price =req.body.price;
    //  const imageLink =req.body.imageLink;
      
    
    try {
        const {title ,description, price,imageLink} =req.body;
    const newcourse =await Course.create({
        title,
        description,
        price,
        imageLink
    })
    res.status(200).json({msg:"course created successfully"})
    } catch (error) {
         console.error(error);
         res.status(403).json({msg:"something went wrong"})
    }
});

router.get('/courses', adminMiddleware, async(req, res) => {
    // Implement fetching all courses logic
       try {
        const courses=await Course.find({})
        res.status(200).json(courses)
       } catch (error) {
          res.status(400).json({msg:"something went wrong"})
       }       
});

module.exports = router;

// Input: Headers: { 'username': 'username', 'password': 'password' }
//   Output: { courses: [ { id: 1, title: 'course title', description: 'course description', price: 100, imageLink: 'https://linktoimage.com', published: true }, ... ] }