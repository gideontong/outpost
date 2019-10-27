var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var app = express();

var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

var indexRouter = require('./routes/index');
var testRouter = require('./routes/testAPI');
var usersRouter = require('./routes/users');

var mongoose = require("mongoose")
const MONGOURL = "mongodb+srv://brilam8:<password>@database-bycsc.mongodb.net/test?retryWrites=true&w=majority"
mongoose.connect(MONGOURL)
.then(()=>console.log("DB CONNECTED"))
.catch(error => console.log(error))

app.use(bodyParser.json());



var nameSchema = new mongoose.Schema({
  firstName: String,
  lastNameName: String
 });
 var message = mongoose.model("Message", nameSchema);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/testAPI', testRouter)
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

app.post("/addmessage", (req, res) => {
  var myData = new message(req.body);
  myData.save()
  .then(item => {
  res.send("item saved to database");
  })
  .catch(err => {
  res.status(400).send("unable to save to database");
  });
 });
 
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
