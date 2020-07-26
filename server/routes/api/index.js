import _ from 'lodash';
import { db, sql } from '~/database/mysql';
import { local } from '~/lib/local';
import { api, token, Router } from '~/lib/utils';
import { vaildToken } from '~/routes/middleware/auth';

Router.wrap('get', '/test', async (req, res, next, { query }) => {
  const r1 = await query(sql.getTestUser(5));
  const body = {
    r1,
  };
  res.json(body);
});

// NOTE: main
Router.wrap('get', api.index.getHome, vaildToken, async (req, res, next) => {
  token.renewal();
  const rows = await db.singleQuery(sql.languaugeList);
  const body = {
    result: 1,
    languages: rows,
  };
  res.json(body);
});

// NOTE: error
Router.wrap('get', api.error.get, async (req, res, next) => {
  console.log('error');
});

// NOTE: check local data
Router.wrap('get', api.index.getLocalData, async (req, res, next) => {
  const lodalData = local.get();
  const body = {
    ...lodalData,
  };
  res.json(body);
});

// DEBUG: Sql Test
Router.wrap('get', api.common.getLanguages, async (req, res, next, { query, all, singleQuery }) => {
  const [r1, r2] = await all([sql.getTestUser(5), sql.getTestUser(2)]);
  const r5 = await query(sql.getTestUser(5));
  const r6 = await singleQuery(sql.getTestUser(6));

  const body = {
    r1,
    r2,
    r5,
    r6,
  };
  res.json(body);
});

module.exports = Router;
