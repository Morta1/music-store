const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const favicon = require('serve-favicon');
const setupMongoose = require('./db/mongo-setup');
const app = express();

//start mongoose
setupMongoose(mongoose);

//routes
const index = require('./routes/index');
const api = require('./routes/api');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', index);
app.use('/api', api)

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');


app.use(favicon(path.join(__dirname, 'public', '/images/favicon.ico')));
app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;
