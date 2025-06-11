
const secretKey = "userSceretKey@01"
function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
     const token = req.headers.authorization
        const word = token.split(" ")
        const jwtToken = word[1]
        const decode = jwt.verify(jwtToken, secretKey)
        if(!decode){
            return res.status(403).json({
                message:"Unauthorized access"
            })
        }
        req.user = decode
        next()
}

module.exports = userMiddleware;