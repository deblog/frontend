import _ from 'lodash';
import moment from 'moment';
import { query } from '~/database/query';
import { local } from '~/lib/local';
import { database } from '~/database/mysql';
import { v4 as uuidv4 } from 'uuid';
import { api, errorState, convertObjectToCommaString, token, Router } from '~/lib/utils';

// NOTE: signup
Router.wrap('post', api.auth.postSignUp, async (req, res, next) => {
  const userCode = uuidv4().replace(/\-/g, '');
  const { email, password } = req.body;
  const insertFormat = {
    email,
    password,
    userCode,
    createAt: moment().unix(),
  };
  const { keys, values } = convertObjectToCommaString(insertFormat);
  const rows = await database.query(query.signin({ keys, values }));

  if (rows.affectedRows && !rows.error) {
    res.json({ result: 1 });
  } else {
    if (rows.error) res.json(errorState(rows));
  }
});

// NOTE: login
Router.wrap('post', api.auth.postLogin, async (req, res, next) => {
  const { email, password } = req.body;
  const rows = await database.query(query.login({ email, password }));

  if (rows.length === 1) {
    res.json({ result: 1, ..._.omit(rows[0], ['id', 'password']) });
  } else {
    res.json({ result: 2 });
  }
});

// NOTE: jwt create
Router.wrap('get', api.token.getTokenCreate, async (req, res, next) => {
  const payload = token.renewal();
  const body = {
    ...payload,
  };
  res.json(body);
});

// NOTE: token verify
Router.wrap('post', api.token.getTokenAuth, async (req, res, next) => {
  const { token: bodyToken } = req.body;
  const tokenVerifyResult = token.verify(bodyToken);
  const body = {
    jwt: tokenVerifyResult,
  };
  res.json(body);
});
module.exports = Router;
