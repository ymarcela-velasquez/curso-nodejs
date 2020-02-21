const { io } = require('../server')


//Usuario se conecta al servidor
//on --> escuchar sucesos
// emit--> enviar información
io.on("connection", client => {
  console.log("User connected")
  client.on("disconnect", () => {
    console.log("User disconnected")
  })

  client.on("sendMessage", (message, callback) => {
    if (message.user) {
      callback({
        response: "Everything went well"
      })
    } else {
      callback({
        response: "Everything went wrong"
      })
    }
  })

  client.emit("sendMessage", {
    user: "Admin",
    message: "Welcome to this app"
  })
})
