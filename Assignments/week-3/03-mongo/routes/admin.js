const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db/index.js")
const router = Router();

// Admin Routes
router.post('/signup', (req, res) => {
    // Implement admin signup logic
    const username = req.body.username
    const password = req.body.password
    Admin.create({
        username,
        password
    })
    res.status(200).json({
        message: 'Admin created successfully'
    })
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

router.get('/courses', adminMiddleware, async(req, res) => {
    // Implement fetching all courses logic
    const courseList = await Course.find({})
    res.status(200).json({
        courses: courseList
    })

});

module.exports = router;