const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://user2000:@cluster0.pdnkicq.mongodb.net/courseDb');

// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here
    username:{
       type: string,
        required:[true, 'username is  required']
    },
    password:{
        type:string,
        required:[true, 'password is required'],
        length:6
    },
 },

// {
    // timestamps:true,
// }

);

const UserSchema = new mongoose.Schema({
    // Schema definition here
});

const CourseSchema = new mongoose.Schema({
    // Schema definition here
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}