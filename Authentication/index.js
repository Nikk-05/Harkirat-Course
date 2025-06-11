import express from 'express'
import jwt from 'jsonwebtoken'
import mongoose from 'mongoose'
const jwtPassword = "qwertyuiopasdfghjk"


mongoose.connect("mongodb+srv://singhnikhil0528:EQ6xDeceWzLhjC3t@coursecluster.vtcfwro.mongodb.net/")

const User = mongoose.model("Users", {
    name: String,
    email: String,
    password: String
})


const app = express()
// app.use(cros())
app.use(express.json())

// const userExist = (username, password) => {
//     const isUserExist = users.some(user => {
//         return user.username.toLowerCase() === username.toLowerCase() && user.password === password;
//     });
//     return isUserExist;
// };

// app.post('/signin', (req, res) => {
//     const username = req.body.username
//     const password = req.body.password
//     if (!userExist(username, password)) {
//         return res.status(403).json({
//             msg: "User doesn't exist in memory DB."
//         })
//     }
//     let token = jwt.sign({
//         username: username
//     }, jwtPassword);
//     return res.json({
//         token,
//     })
// })

// app.get("/users", (req, res) => {
//     const token = req.headers.authorization
//     try {
//         const decode = jwt.verify(token, jwtPassword);
//         const username = decode.username
//         let userList = users.filter((user) => {
//             return user.username !== username
//         })
//         return res.status(200).json({
//             userList
//         })
//     }
//     catch (err) {
//         return res.status(403).json({
//             msg: "Invalid Token"
//         })
//     }
// })

app.post("/signup", async (req, res) => {
    const username = req.body.username
    const password = req.body.password
    const name = req.body.name

    const existingUser = await User.findOne({ email: username })
    if (existingUser) {
        res.status(403).json({
            msg: "User is already present"
        })
    }
    const user = new User({
        name: name,
        email: username.toLowerCase(),
        password: password,
    })
    user.save()
    res.status(200).json({
        "msg": "User is created in DB"
    })
})

app.listen(3030, () => {
    console.log("Server is working on PORT 3030")
})