import express from 'express';
import _ from 'lodash';
import { sql } from '~/database/query';
import { database, db } from '~/database/mysql';
import { local } from '~/lib/local';
import { mapper, config, api, token } from '~/lib/utils';
import { vaildToken } from '~/routes/middleware/auth';
import { connectConfig as dbConfig } from '~/database/mysql';

// import redis from 'redis';

const router = express.Router();
// const client = redis.createClient({
//   host: config.host,
//   port: config.port,
//   db: 0,
//   password: config.password,
// });

// NOTE: main
router.get(api.index.getHome, vaildToken, async (req, res, next) => {
  token.renewal();
  const rows = await db.query(sql.languaugeList);
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
  const lodalData = local.get();
  const body = {
    ...lodalData,
  };
  res.json(body);
});

// DEBUG: Sql Test
router.get(
  api.common.getLanguages,
  db.wrap(async (req, res, next, { query }) => {
    // const rows = await query(sql.languaugeList);
    // const rows1 = await db.singleQuery(sql.languaugeList);
    const [r1, r2] = await db.all([sql.languaugeList, sql.languaugeList]);
    console.log('1');
    const [rows, rows1] = await Promise.all([query(sql.languaugeList), query(sql.languaugeList)]);
    console.log('2');

    const body = {
      r1,
      r2,
      // rows1: rows1,
      // rows: rows,
    };
    res.json(body);
  }),
);

module.exports = router;
