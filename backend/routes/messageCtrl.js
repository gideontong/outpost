var express = require('express');
var app = express();
var router = express.Router();

//Schema
var Messages = require('../models/Messages');

// Get Specific
  

getMessages = async (req, res) => {
  await Messages.find({}, (err, messages) => {
      if (err) {
          return res.status(400).json({ success: false, error: err })
      }
      if (!messages.length) {
          return res
              .status(404)
              .json({ success: false, error: `Message not found` })
      }
      return res.status(200).json({ success: true, data: messages })
  }).catch(err => console.log(err))
}

module.exports = {getMessages};