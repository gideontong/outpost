//TodoList.js

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//schema
var messageSchema = Schema({
  desc: {
    type: String
  },
  name:{
    type:String,
    required: false
  }


});
const Message = mongoose.model('Message', messageSchema)
module.exports = {Message};