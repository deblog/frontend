import express from 'express';
import { query } from '~/database/query';
import _ from 'lodash';
import { database } from '~/database/mysql';
import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';
import { api, errorState, convertObjectToCommaString } from '~/lib/utils';
const router = express.Router();

// NOTE: main
router.get(api.index.get, async (req, res, next) => {
  const rows = await database.query(query.languaugeList);
  const body = {
    result: 1,
    languages: rows,
  };
  res.json(body);
});
// NOTE: signup
router.post(api.signup.post, async (req, res, next) => {
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
router.post(api.login.post, async (req, res, next) => {
  const { email, password } = req.body;

  const rows = await database.query(query.login({ email, password }));

  if (rows.length === 1) {
    res.json({ result: 1, ..._.omit(rows[0], ['id', 'password']) });
  } else {
    res.json({ result: 2 });
  }
});

module.exports = router;
