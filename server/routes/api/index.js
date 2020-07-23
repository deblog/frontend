import express from 'express';
import _ from 'lodash';
import { query } from '~/database/query';
import { database } from '~/database/mysql';
import { mapper, config, local } from '~/lib/utils';
// DEBUG: test
import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';
import jwt from 'jsonwebtoken';
// const expired = 60 * 60 * 12; //24시간 1일
const expired = 5; //24시간 1일
const checkDelay = 60 * 60 * 1;

const router = express.Router();

const mapApi = mapper.api;
// NOTE: main
router.get(mapApi.index.get, async (req, res, next) => {
  const rows = await database.query(query.languaugeList);
  const body = {
    result: 1,
    languages: rows,
  };
  res.json(body);
});

// NOTE: error
router.get(mapApi.error.get, async (req, res, next) => {
  console.log('error');
});

// NOTE: jwt test
router.get(mapApi.test.get, async (req, res, next) => {
  const uuid = uuidv4();
  const nowDate = moment().unix();

  let expiredTime = false;
  // jwt create
  var payload = {
    iat: nowDate,
    exp: nowDate + (expiredTime || expired), // 24시간, 1일
    data: {
      uuid: uuid,
      userCode: '',
      state: 'local',
    },
  };

  const jwtToken = jwt.sign(payload, config.jwt.secret);
  const body = {
    jwtToken,
    uuid,
    nowDate,
  };
  res.json(body);
});

router.get('/test/check', async (req, res, next) => {
  const token = req.query.token;
  const tokenVerifyResult = jwt.verify(token, config.jwt.secret, function (err, payload) {
    console.log(local);
    if (err) {
      local.deleteToken();
      console.log(local, 'local');
      return {
        authCheck: false,
        error: err,
      };
    } else {
      // success
      return {
        authCheck: true,
        payload,
      };
    }
  });

  const body = {
    jwt: tokenVerifyResult,
  };
  res.json(body);
});
module.exports = router;
