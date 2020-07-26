import createError from 'http-errors';
import express from 'express';
import session from 'express-session';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import cors from 'cors';
import redis from 'redis';
import { connectConfig as dbConfig } from '~/database/mysql';

import indexRouter from '~/routes/api/index';
import usersRouter from '~/routes/api/users';
import authRouter from '~/routes/api/auth';
import { mapper } from '~/lib/utils';

const app = express();

// const redisClient = redis.createClient();
// console.log(dbConfig, 'dbConfig');

// {
//   host: dbConfig.host,
//   port: dbConfig.port,
//   db: db.database,
//   password: dbConfig.password,
// }
// const client = redis.createClient({
//   host: '127.0.0.1',
//   port: '6379',
// });
// client.on('connect', () => {
//   console.log('connected to redis');
// });
// client.on('error', function (err) {
//   console.log('Error ' + err);
// });

// var redisClient = redis.createClient(6379, '123.45.678.901');
// var RedisStore = require('connect-redis')(session);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// app.use(
//   session({
//     store: new RedisStore({ client: redisClient }),
//     secret: 'gBpwmwE0PmyDKPuLhhmY8CONJQW3TnCujQuoE8nVao',
//     resave: false,
//     saveUninitialized: true,
//     cookie: { secure: true },
//   }),
// );

app.use(cors());
app.use(logger('dev'));
app.use(express.json());

app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(mapper.router.index, indexRouter);
app.use(mapper.router.users, usersRouter);
app.use(mapper.router.auth, authRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
