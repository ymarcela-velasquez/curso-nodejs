const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const Schema = mongoose.Schema
const validRoles = {
  values: ['ADMIN_ROLE', 'USER_ROLE'],
  message: '{VALUE} is not a valid role'
}

let userSchema = new Schema({
  name: { type: String, required: [true, "The name is required"]},
  email: { type: String, unique: [true, "This email already exists"],  required: [true, "The email is required"]},
  password: { type: String, required: true },
  img: { type: String, required: false },
  role: { type: String, enum: validRoles,  default: "USER_ROLE"},
  state: { type: Boolean, default: true },
  google: { type: Boolean,  default: false }

})

userSchema.methods.toJSON = function(){
  let user = this
  let userObject = user.toObject()
  delete userObject.password
  return userObject
}

userSchema.plugin(uniqueValidator, { message: '{PATH} must be unique'})

module.exports = mongoose.model('User', userSchema)