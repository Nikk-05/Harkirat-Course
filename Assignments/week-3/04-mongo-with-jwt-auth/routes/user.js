const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db/index.js")

const secretKey = "userSceretKey@01"
// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    const username = req.body.username
    const password = req.body.password
    try {
        await User.create({
            username,
            password
        })
        res.status(200).json({
            message: 'User created successfully'
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
        const existingUser = await User.findOne({ username, password })
        if (!existingUser) {
            throw new Error("No Admin found")
        }
        const token = jwt.sign({ username }, secretKey)
        res.status(200).json({
            jwt_token: `Bearer ${token}`,
            message: "User sign in successfully"
        })
    }
    catch (err) {
        res.status(403).json({
            message: "No User found. Please signup!"
        })
    }
});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    const courseList = await Course.find({})
    res.status(200).json({
        courses: courseList
    })

});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId
    const username = req.user.username
    try {
        await User.updateOne({
            username,
            "$push": {
                purchasedCourse: courseId
            }
        })
        res.status(200).json({
            message: "Purchase completed successfully"
        })
    }
    catch (err) {
        res.status(400).json({
            message: "Purchase unuccessful, Try again!"
        })
    }

});

router.get('/purchasedCourses', userMiddleware, (req, res) => {
    // Implement fetching purchased courses logic
    const username = req.user.username
    const userPurchasedCourses = User.find({ username })
        .populate('purchasedCourse')
        .exec()

    res.status(200).json({
        purchasedCourses: userPurchasedCourses
    })
});

module.exports = router