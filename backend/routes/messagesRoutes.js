var express = require('express');
var app = express();
var router = express.Router();

//Schema
const messageCtrl = require('./messageCtrl')

// Get Specific
  

// Get All Items
router.get('/messages', messageCtrl.getMessages)

module.exports = router;