const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://user2000:VX8opgPWYEsnQnfi@cluster0.pdnkicq.mongodb.net/Course_base?retryWrites=true&w=majority');

// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here
    username:{
       type:String,
        required:[true, 'username is  required']
    },
    password:{
        type:String,
        required:[true, 'password is required'],
        minlength:6
    },
 },

{
    timestamps:true,
}

);

const UserSchema = new mongoose.Schema({
    // Schema definition here
    username:{
        type:String,
        required:[true ,'username is required']
    },

    password:{
        type:String,
        required:[true ,'password is required']
    },
    purchasedCourses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }],
});


const CourseSchema = new mongoose.Schema({
    // Schema definition here
    id :{
        type: Number,
         required:[true, 'id is reuired'],
         unique:true
    },
    title:{
        type:String,
        required:[true , 'Title is required']
    },
    description:{
        type:String,
    },
    price:{
        type:String,
        required:[true ,'Price is required']
    },
    imageLink:{
        type:String,
    }

},

{
    timestamps:true,
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