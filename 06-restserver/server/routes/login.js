const express = require("express")
const bcrypt = require("bcrypt")

const app = express();
const User = require("../models/user")

app.post('/login', (req, res) =>{
  let body = req.body

  User.findOne({email: body.email}, (err, userDB) =>{
    if (err) {
      return res.status(500).json({
        ok: false,
        err
      })
    }
    if(!userDB){
      return res.status(500).json({
        ok: false,
        err: {
          message: "Usuario o contraseña incorrectos"
        }
      })
    }

    if ( !bcrypt.compareSync( body.password, userDB.password )) {
      return res.status(500).json({
        ok: false,
        err: {
          message: "Usuario o contraseña incorrectos"
        }
      })
    }
    res.json({
      ok: true,
      user: userDB,
      token: '123'
    })
  })
})



module.exports = app