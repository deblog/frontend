import express from 'express';
import { indexUsers } from '~/lib/utils';
const router = express.Router();

router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/users', function (req, res, next) {
  const data = indexUsers();
  res.json({ data: data });
});
module.exports = router;
