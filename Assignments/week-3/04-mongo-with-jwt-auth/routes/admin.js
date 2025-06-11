const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const { Admin, Course } = require("../db/index.js")
const jwt = require("jsonwebtoken")

const secretKey = "#JWTSecureKey@01#"
// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username
    const password = req.body.password
    try {
        await Admin.create({
            username,
            password
        })
        res.status(200).json({
            message: 'Admin created successfully'
        })
    }
    catch (err) {
        res.status(400).json({
            message: "Something went wrong. Try Again"
        })
    }
});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username
    const password = req.body.password
    try {
        const existingUser = await Admin.findOne({ username, password })
        if (!existingUser) {
            throw new Error("No Admin found")
        }
        const token = jwt.sign({ username }, secretKey) 
        res.status(200).json({
            jwt_token: `Bearer ${token}`,
            message: "Admin sign in successfully"
        })
    }
    catch (err) {
        res.status(403).json({
            message: "No Admin found. Please signup!"
        })
    }
});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const { title, description, price, imageLink } = req.body
    const courseData = await Course.create({
        title, description, price, imageLink
    })

    if (!courseData) {
        res.status(403).json({
            message: "Unable to add course"
        })
    }
    res.status(200).json({
        message: 'Course created successfully', courseId: courseData._id
    })
});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const courseList = await Course.find({})
    res.status(200).json({
        courses: courseList
    })
});

module.exports = router;