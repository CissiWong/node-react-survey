import express from "express"
import mongoose from "mongoose"
import bodyParser from "body-parser"
import cors from "cors"
import uuid from "uuid/v4"
import bcrypt from "bcrypt-nodejs"

const app = express()
const getRealIp = require('express-real-ip')()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())



// Tells express to add the "Access-Control-Allow-Origin" header to allow requests from anywhere.
app.use(cors())


// Connect to MongoDB, on the "products-api" database. If the db doesn't
// exist, mongo will create it.
mongoose.connect("mongodb://localhost/fodelsebyran-api", { useMongoClient: true })

// This makes mongo use ES6 promises, instead of its own implementation
mongoose.Promise = Promise

// Log when mongo connects, or encounters errors when trying to connect.
mongoose.connection.on("error", err => console.error("Connection error:", err))
mongoose.connection.once("open", () => console.log("Connected to mongodb"))


//Model for form //

const Answer = mongoose.model("Answer", {
  id: Number,
  score: [Number],
  totalScore: Number,
  ip: String
})

app.use(getRealIp)

app.get('/', (req, res, next) => {
  res.send(req.ip)
  next()
})

app.get("/answer", (req, res) => {
  Answer.find().then(answer => res.json(answer))
})

app.post("/answer", (req, res) => {
  console.log(req.body, req.ip)
  const answer = new Answer({
    id: req.body.id,
    score: req.body.score,
    totalScore: req.body.totalScore,
    ip: req.ip
  })

  answer.save().then(() => {
  res.status(201).json({ message: "added answers" })
  }).catch(err => {
  res.status(400).json({ message: "answers not added", errors: err.errors })
  })
})

app.listen(8080, () =>
  console.log("Example app listening on port 8080!")
)

// model for Login and admin page //

const Login = mongoose.model("Login", {
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  accessToken: {
    type: String,
    default: () => uuid()
  }
})

app.get("/", (req, res) => {
  const password = "adminpassword"
  const hash = bcrypt.hashSync(password)
  res.send("password")
})

app.get("/users", (req, res) => {
  Login.find().then(allUsers => {
    res.json(allUsers)
  })
})

app.post("/users", (req, res) => {
  const { username } = req.body
  const hash  = bcrypt.hashSync(password)
  const user = new Login({
    username: req.body.username,
    email: req.body.email,
    password: hash,
    accessToken: req.body.accessToken
  })

  user.save()
    .then(() => { res.status(201).json(user)
  }).catch(err => {
    res.status(400).json({ message: "user not added", errors: err.errors })
  })
})

app.post("/login", (req, res) => {
  Login.findOne({ username: req.body.username })
  .then(user => {
    console.log(user)
    if(user && bcrypt.compareSync(req.body.password, user.password)) {
      res.json(user)
    } else {
      res.status(401).json({
        errors: {
          username: "Username is invalid"
        }
      })
    }
  })
})
