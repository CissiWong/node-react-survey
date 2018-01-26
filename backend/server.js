import express from "express"
import mongoose from "mongoose"
import bodyParser from "body-parser"
import cors from "cors"
import uuid from "uuid/v4"
import bcrypt from "bcrypt-nodejs"

const app = express()
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
  totalScore: Number
})

//model for Login and admin page //

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

app.get("/answer", (req, res) => {
  Answer.find().then( answer => res.json(answer))
})

app.post("/answer", (req, res) => {
  const answer = new Answer(req.body)

  answer.save().then(() => {
  res.status(201).json({ message: "Added information" })
  }).catch(err => {
  res.status(400).json({ message: "No!", errors: err.errors })
  })
})

app.listen(8080, () =>
  console.log("Example app listening on port 8080!")
)
