import express from 'express'
import {z} from 'zod'
const app = express()
const schema = z.array(z.number())
app.use(express.json())

app.post('/kidney-checkup', (req, res) => {
    const kidneys = req.body.kidneys
    const response = schema.safeParse(kidneys)
    console.log(response)
    const kidneyLength = kidneys.length

    res.status(200)
        .send(`You have ${kidneyLength} healthy Kidneys`)
})
// global caches
// It is used to in the last as a middleware, if there any exception at any endpoint it will execute and return the json.

app.use((err, req, res, next) => {
    res.json({
        msg: "Sorry something is up with our server"
    })
})

app.listen(3030, () => {
    console.log("Server is running on port 3030")
})