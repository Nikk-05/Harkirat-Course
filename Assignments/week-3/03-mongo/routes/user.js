const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db/index.js")

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    const username = req.body.username
    const password = req.body.password
    try {
        await User.create({
            username, password
        })
        res.status(200).json({
            message: "User created successfully"
        })
    }
    catch (err) {
        res.status(403).json({
            message: "Something went wrong!"
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
    const course_id = req.params.courseId
    const username = req.headers.username
    await User.updateOne({
        username: username
    }, {
        "$push": {
            purchasedCourse: course_id
        }
    })
    res.status(200).json({
        message: 'Course purchased successfully'
    })
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const username = req.headers.username
    // const user = await User.findOne({
    //     username: username
    // })

    // const purchasedCourses = await Course.find({
    //     _id: {
    //         $in: user.purchasedCourse
    //     }
    // })
    const userPurchasedCourses = User.find({username})
    .populate('purchasedCourse')
    .exec()

    res.status(200).json({
        purchasedCourses: userPurchasedCourses
    })


});

module.exports = router