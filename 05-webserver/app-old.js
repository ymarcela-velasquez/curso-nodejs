const http = require('http')

http.createServer((req, res) =>{
  res.writeHead(200, {'Content-type': 'application/json'})
  let output = {
    name: "Yuly",
    url: req.url
  }
  res.write(JSON.stringify(output))
  // res.write('Hello')
  res.end()
})
.listen(8080)

console.log("Listening in port 8080");
