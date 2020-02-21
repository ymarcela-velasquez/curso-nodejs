const express = require("express")
const bcrypt = require("bcrypt")
const _ = require('underscore')

const app = express();
const User = require("../models/user");

//skip: salta registros, le determino el # de registros que quiero que salte
//exec: ejecuta el query
//GET
app.get("/user", (req, res) => {
  console.log("req.query: ", req.query);
  
  let pag = Number(req.query.pag) || 0
  let lim = Number(req.query.lim) || 5

  User.find({state: true}, 'name email role state googles -_id ')
    .skip(pag)
    .limit(lim)
    .exec((err, users) => {
      if (err) {
        return res.status(400).json({
          ok: false,
          err
        })
      }

      User.countDocuments({state: true},(err, accountant) =>{
        res.json({
          ok: true,
          users,
          accountant
        })

      })

    })
})





//POST
app.post("/user", (req, res) => {
  let body = req.body;

  let user = new User({
    name: body.name,
    email: body.email,
    password: bcrypt.hashSync(body.password, 10),
    role: body.role
  });

  user.save((err, userDB) => {
    if (err) {
      return res.status(400).json({
        ok: false,
        err
      })
    }

    res.json({
      ok: true,
      user: userDB
    })
  })
})

//PUT
app.put("/user/:id", (req, res) => {
  let id = req.params.id
  //pick devuelve un objeto con los campos que me interesan, es este caso los que se pueden actualizar con el put
  let body = _.pick(req.body, ['name', 'email', 'img', 'role', 'state'])

  // delete body.password --> una alternativa para que no se actualice ese campo con el put
  // delete body.google

  User.findByIdAndUpdate(id, body, {new: true, runValidators: true},  (err, userDB) => {
    if (err) {
      return res.status(400).json({
        ok: false,
        err
      })
    }
    res.json({
      ok: true,
      user: userDB
    })
  })
})

//DELETE
/*
Elimina completamente el registro --> no recomendado, es mejor cambiar el estado a false
app.delete("/user/:id", (req, res) => {
  let id = req.params.id
  User.findByIdAndRemove(id, (err, userDeleted) =>{
    if (err) {
      return res.status(400).json({
        ok: false,
        err
      })
    }
    if(!userDeleted){
      res.json({
        ok: false,
        error: { message: 'User not found'}
      })
    }
     res.json({
      ok: true,
      user: userDeleted
    })
  })
})
*/

app.delete("/user/:id", (req, res) => {
  let id = req.params.id
  let stateDeleted = {
    state: false
  }
  User.findByIdAndUpdate(id, stateDeleted, {new: true}, (err, userDeleted) =>{
    if (err) {
      return res.status(400).json({
        ok: false,
        err
      })
    }
    if(!userDeleted){
      return res.json({
        ok: false,
        err: { message: 'User not found'}
      })
    }
    res.json({
      ok: true,
      user: userDeleted
    })
  })
})

module.exports = app