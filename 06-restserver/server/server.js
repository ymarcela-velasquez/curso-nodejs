const config = require('./config/config')
const express = require('express')
const mongoose = require('mongoose')
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(require('./routes/user'))

mongoose.connect('mongodb://localhost:27017/cursonodeDB', { useNewUrlParser: true },  (err, res) =>{
  if (err) throw err
  console.log("Database ONLINE")
  
})

app.listen(config.port, ()=>{
  console.log(`Listening port ${ config.port }`)
})