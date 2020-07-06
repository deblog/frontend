import express from 'express';
import { getUsers, getPost, getPosts, api } from '~/lib/utils';
import { database } from '~/database/mysql';
const router = express.Router();

router.get(api.index.get, async (req, res, next) => {
  const rows = await database.query(`SELECT * FROM deblog.users`);
  console.log(rows, 'rows');
  res.render('index', { title: 'Express' });
});

router.get('/insert', async (req, res, next) => {
  const rows = await database.query(`SELECT * FROM deblog.users`);
  console.log(rows, 'rows');
  res.render('index', { title: 'Express' });
});

router.get(api.user.get, (req, res, next) => {
  const data = getUsers();
  res.json({ users: data });
});

router.get(api.post.get, (req, res, next) => {
  const data = getPosts(15);
  res.json({ posts: data });
});
module.exports = router;
