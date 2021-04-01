//const Post = require('./model/post');  //post update
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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


//Gabe updates
/*const mongoose = require('mongoose');
const url = 'mongodb://localhost/blogDb';
 
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended : false}))
 
app.post('/api/user/login', (req, res) => {
    mongoose.connect(url, function(err){
        if(err) throw err;
        console.log('connected successfully, username is ',req.body.username,' password is ',req.body.password);
    });
})
 
app.listen(3000, () => console.log('blog server running on port 3000!'))


app.post('/api/post/getAllPost', (req, res) => {
  mongoose.connect(url, { useMongoClient: true } , function(err){
      if(err) throw err;
      console.log('connection established successfully');
  });
})

Post.find({},[],{},(err, doc) => {
    if(err) throw err;
    console.log('result is ',doc);
})

*/
