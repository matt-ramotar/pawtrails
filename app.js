const cors = require('cors');
const createError = require('http-errors');
const express = require('express');
const helmet = require('helmet');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const { ValidationError } = require('sequelize');

const routes = require('./backend/routes');

const app = express();

app.use(cors({ origin: true }));
app.use(helmet({ hsts: false }));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get(/\/(?!api)*/, (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.use(function (_req, _res, next) {
  next(createError(404));
});

app.use((err, req, res, next) => {
  // check if error is a Sequelize error:
  if (err instanceof ValidationError) {
    err.errors = err.errors.map(e => e.message);
    err.title = 'Sequelize Error';
  }
  err.status = 422;
  next(err);
});

app.use(function (err, _req, res, _next) {
  res.status(err.status || 500);
  if (err.status === 401) {
    res.clearCookie('token');
  }

  if (process.env.NODE_ENV !== 'production') {
    res.json({
      message: err.message,
      stack: err.stack,
      errors: err.errors,
    });
  }
});

module.exports = app;
