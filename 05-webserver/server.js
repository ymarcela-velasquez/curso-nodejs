const express = require('express')
const app = express()

//Web page
app.use( express.static( __dirname + '/public'))

//Create server
// app.get('/', function(req, res){
//   let output = {
//     name: "Yuly",
//     url: req.url
//   }
//   res.send(output)

//   // res.send("Hello")
// })



app.listen(8080, ()=>{
  console.log("Listening port 8080")
})

