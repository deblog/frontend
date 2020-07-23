import express from 'express';
import _ from 'lodash';
import { query } from '~/database/query';
import { database } from '~/database/mysql';
import { local } from '~/lib/local';
import { mapper, config, api } from '~/lib/utils';
import { vaildToken } from '~/routes/middleware/auth';

const router = express.Router();

// NOTE: main
router.get(api.index.getHome, vaildToken, async (req, res, next) => {
  local.token.renewal();
  console.log(local.token.get());
  const rows = await database.query(query.languaugeList);
  const body = {
    result: 1,
    languages: rows,
  };
  res.json(body);
});

// NOTE: error
router.get(api.error.get, async (req, res, next) => {
  console.log('error');
});

// NOTE: check local data
router.get(api.index.getLocalData, async (req, res, next) => {
  local.boot();
  const body = {
    ...local.data,
  };
  res.json(body);
});

module.exports = router;
