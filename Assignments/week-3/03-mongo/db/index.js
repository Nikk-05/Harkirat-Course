const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://singhnikhil0528:EQ6xDeceWzLhjC3t@coursecluster.vtcfwro.mongodb.net/course_app');

// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here
    username: String,
    password: String

});

const UserSchema = new mongoose.Schema({
    // Schema definition here
    username: String,
    password: String,
    purchasedCourse:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'course'
    }]

});

const CourseSchema = new mongoose.Schema({
    // Schema definition here
    title: String,
    description: String,
    price: Number,
    imageLink: String,
    published:{
        type: Boolean,
        default: true
    }
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}