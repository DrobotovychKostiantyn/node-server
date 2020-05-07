const express = require('express');
const path = require('path')
const rootDir = require('../util/path');

const router = express.Router();
const { productList } = require('./admin')

router.get('/', (req, res, next) => {
  console.log(productList);
  res.sendfile(path.join(rootDir, 'views', 'shop.html'))
});

module.exports = router;