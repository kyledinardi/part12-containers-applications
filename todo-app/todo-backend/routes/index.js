const express = require('express');
const redis = require('../redis');
const configs = require('../util/config');

const router = express.Router();
let visits = 0;
const initialTodos = redis.getAsync('added_todos');

if (!initialTodos) {
  redis.setAsync('added_todos', 0);
}

/* GET index data. */
router.get('/', async (req, res) => {
  visits++;
  res.send({ ...configs, visits });
});

router.get('/statistics', async (req, res) => {
  const added_todos = await redis.getAsync('added_todos');
  res.send({ added_todos });
});

module.exports = router;
