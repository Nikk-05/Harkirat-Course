const jwt = require('jsonwebtoken')
const secretKey = "#JWTSecureKey@01#"
// Middleware for handling auth
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const token = req.headers.authorization
    const word = token.split(" ")
    const jwtToken = word[1]
    const decode = jwt.verify(jwtToken, secretKey)
    if(!decode){
        return res.status(403).json({
            message:"Unauthorized access"
        })
    }
    req.admin = decode
    next()
}

module.exports = adminMiddleware;