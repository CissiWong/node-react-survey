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
const mongoUrl = process.env.MONGO_URL || "mongodb://localhost/fodelsebyran-api"
mongoose.connect(mongoUrl)

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

const port = process.env.PORT || 8080
app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
