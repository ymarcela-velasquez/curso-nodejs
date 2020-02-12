const mongoose = require('mongoose')

const Schema = mongoose.Schema

let userSchema = new Schema({
  name: { type: String, required: [true, "The name is required"]},
  email: { type: String, required: [true, "The email is required"]},
  password: { type: String, required: true },
  img: { type: String, required: false },
  role: { type: String, default: "USER_ROLE"},
  state: { type: Boolean, default: true },
  google: { type: Boolean,  default: false }

})

module.exports = mongoose.model('User', userSchema)