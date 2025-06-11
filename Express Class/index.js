import express from 'express'
import bodyParser from 'body-parser';
const app = express();

app.use(express.json())

let users = [{
    name: 'Nikhil Singh',
    kidneys: [{
        healthy: false
    }]
}];

app.get('/', (req, res) => {
    let userKindeys = users[0].kidneys
    let numberOfKidneys = userKindeys.length
    let healthyKidneys = 0;
    for (let i = 0; i < numberOfKidneys; i++) {
        console.log(typeof (userKindeys[i].healthy))
        if (userKindeys[i].healthy) {
            console.log("a")
            healthyKidneys += 1;
        }
    }
    let unhealthyKidneys = numberOfKidneys - healthyKidneys;

    res.json({
        numberOfKidneys,
        healthyKidneys,
        unhealthyKidneys,
        users
    })
})

app.post('/', (req, res) => {
    let isHealthy = req.body
    users[0].kidneys.push(isHealthy)

    res.json({
        users,
        msg: "Done"
    })
})

app.put('/', (req, res) => {
    for (let i = 0; i < users[0].kidneys.length; i++) {
        users[0].kidneys[i].healthy = true
    }
    res.json({
        msg: "Kidney repaired"
    })
})

// Delete all unhealthy kidneys
app.delete('/', (req, res) => {
    let atleastOneUnhealthyKidney = false
    for (let i = 0; i < users[0].kidneys.length; i++) {
        if (!users[0].kidneys[i].healthy) {
            atleastOneUnhealthyKidney = true
        }
    }
    if (!atleastOneUnhealthyKidney) {
        res.status(411).json({
            message: "You have no unhealthy kidneys"
        })
    }

    let healthyKidneysOnly = []
    for (let i = 0; i < users[0].kidneys.length; i++) {
        if (users[0].kidneys[i].healthy) {
            healthyKidneysOnly.push(users[0].kidneys[i])
        }
    }
    users[0].kidneys = healthyKidneysOnly
    res.json({
        msg: "Removed unhealthy kidneys",
        users
    })
})

app.listen(3000)