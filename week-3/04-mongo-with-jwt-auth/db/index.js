require('dotenv').config();
const mongoose = require('mongoose');

// Connect to MongoDB
const url=process.env.MONGO_URL;
mongoose.connect(url);

// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here
    email:{
        type:String,
        rquired:[true,"email is required"]
    },
    username:{
        type:String,
        required:[true,"Username is required"]
    },
    password:{
         type:String,
         minlenght:6,
         required:[true,'password is required']
    }
},
{
    timestamps:true
});

const UserSchema = new mongoose.Schema({
    // Schema definition here
    email:{
        type:String,
        required:[true,'email is required']

    },
    username:{
        type:String,
        required:[true,'username is required']
    },
    password:{
        type:String,
        required:[true, 'password id required']
    },
    purchasedCourses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course'
    }]


},
{
    timestamps:true
});

const CourseSchema = new mongoose.Schema({
    // Schema definition here
      title:{
          type:String,
          required:[true,'title is required']
      },
      description:{
        type:String,
        required:[true,'description is required']
      },
      price:{
          type:Number,
          required:[true , 'price is required']
      },
    //   imageLink:{
    //       type:String,
    //   },

},
{
    timestamps:true
}
);

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}