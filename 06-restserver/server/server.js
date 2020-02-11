const config = require('./config/config')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get('/', (req, res) =>{
  res.json('get User!')
})

app.post('/', (req, res) =>{
  let body = req.body
  if (body.name === undefined ) {
    res.status(400).json({
      ok: false,
      msg: "The name is required"
    })
    
  }
  res.json({ persona: body })
})

app.put('/', (req, res) =>{
  res.json('put User!')
})

app.delete('/', (req, res) =>{
  res.json('delete User!')
})


app.listen(config.port, ()=>{
  console.log(`Listening port ${ config.port }`)
})