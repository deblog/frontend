import express from 'express';
import { query } from '~/database/query';
import _ from 'lodash';
import { database } from '~/database/mysql';
import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';
import { local } from '~/lib/local';
import { api, errorState, convertObjectToCommaString } from '~/lib/utils';
const router = express.Router();

// NOTE: signup
router.post(api.auth.postSignUp, async (req, res, next) => {
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
router.post(api.auth.postLogin, async (req, res, next) => {
  const { email, password } = req.body;
  const rows = await database.query(query.login({ email, password }));

  if (rows.length === 1) {
    res.json({ result: 1, ..._.omit(rows[0], ['id', 'password']) });
  } else {
    res.json({ result: 2 });
  }
});

// NOTE: jwt create
router.get(api.token.getTokenCreate, async (req, res, next) => {
  const { token, uuid, nowDate } = local.token.create();
  local.token.set(token);
  const localToken = local.token.get();
  console.log(localToken);

  const body = {
    token: localToken,
    uuid,
    nowDate,
  };
  res.json(body);
});

// NOTE: token verify
router.post(api.token.getTokenAuth, async (req, res, next) => {
  const token = req.body.token;

  const tokenVerifyResult = local.token.verify(token);

  const body = {
    jwt: tokenVerifyResult,
  };
  res.json(body);
});
module.exports = router;
