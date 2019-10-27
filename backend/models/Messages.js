//TodoList.js

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//schema
var Messages = new Schema({
  desc: {
    type: String
  },

},{
    collection: 'Tasks'
});

module.exports = mongoose.model('Messages', Messages);