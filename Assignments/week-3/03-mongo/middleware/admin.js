// Middleware for handling auth
const { Admin } = require("../db/index.js")
async function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const username = req.headers.username
    const password = req.headers.password

    const value = await Admin.findOne({
        username: username,
        password: password
    })
    if (!value) {
        res.status(403).json({
            message: "Admin username or password is wrong!"
        })
    }
    next()
}
module.exports = adminMiddleware;