/**
 * Created by Mor on 24-Jan-17.
 */
//dsadasdasdas
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const favicon = require('serve-favicon');

const app = express();

const index = require('./routes/index');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', index);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(favicon(path.join(__dirname, 'public', '/images/favicon.ico')));
app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;
