var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

// rota para mysql
const db = require('./config/database')
// rota para cidade 
const cidade = require('./routes/cidade')
// rota para cliente
const cliente = require('./routes/cliente')

db('prova_douglas','root','123456',{
    host: 'localhost',
    dialect: 'mysql'
})
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/cidade',cidade);
app.use('/cliente', cliente);

module.exports = app;
