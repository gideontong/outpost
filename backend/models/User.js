//TodoList.js

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//schema
var userSchema = Schema({
  email:{
    type:String,
    required: true,
    unique: 1,
    trim:true
  },
  password:{
    type: String,
    required:true,
    minlength:6
  },
  name:{
    type:String
  }


});
const User = mongoose.model('User', userSchema)
module.exports = {User};