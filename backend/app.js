var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
const app = express();

var http = require('http').createServer(app);
var io = require('socket.io')(http);
const Pusher = require('pusher');

const pusher = new Pusher({
  appId      : '888334',
  key        : '21fcddbf691f11275f03',
  secret     : 'fe94be9809a2d14eedd4',
  cluster    : 'us3',
  encrypted  : true,
});

var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

var indexRouter = require('./routes/index');
var testRouter = require('./routes/testAPI');
var messageRouter = require('./routes/messagesRoutes');
var usersRouter = require('./routes/users');

const port = process.env.PORT || 4000;
var mongoose = require("mongoose")
const MONGOURL = "mongodb+srv://brilam8:KEgj1NNeaSkRiwd2@database-bycsc.mongodb.net/test?retryWrites=true&w=majority"

mongoose.connect(MONGOURL, {useNewUrlParser: true})
.then(()=>console.log("DB CONNECTED"))
.catch(error => console.log(error))
const db = mongoose.connection;

db.once('open', () => {

  const messageCollection = db.collection('messages');
  const changeStream = messageCollection.watch();

  changeStream.on('change', (change) => {
    console.log(change);    
    if(change.operationType === 'insert') {
      const message = change.fullDocument;
      console.log(JSON.stringify(message));
    }
  });
});

 const { Message } = require('./models/Messages')
const {User} = require('./models/User')

 app.use(bodyParser.json());  
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
/*app.use(function(req, res, next) {
  next(createError(404));
});*/

app.post('/addmessage', (req, res) => {
  var myData = new Message({
    desc: req.body.message,
    name: req.body.name
  }).save((err,response)=>{
    if(err) res.status(400).send(err)
    res.status(200).send(response)
  })
 });


 app.post('/api/user/signup', (req, res) => {
  const user = new User({

    email: req.body.email,
    password: req.body.password

  }).save((err,response)=>{
    if(err) res.status(400).send(err)
    res.status(200).send(response)
  })
 });

 app.route('/messages').get(function(req, res){
    Message.find(function(err, messages){
      if (err){
        console.log('error ', err.res);
      }
      else {
        console.log(messages);
        res.json(messages);
      }
    })
 })
/*app.post('/addmessage', (req, res) => {
  var myData = new message(req.body);
  myData.save()
  .then(item => {
  res.send("item saved to database");
  })
  .catch(err => {
  res.status(400).send("unable to save to database");
  });
 });*/
 

// error handler
app.post('/', function(req, res) {
  // do something w/ req.body or req.files 
  console.log(req.body)
});
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


module.exports = app;
