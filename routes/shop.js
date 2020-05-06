const express = require('express');
const path = require('path')

const router = express.Router();

router.get('/', (req, res, next) => {
  res.sendfile(path.join(__dirname, '../', 'views', 'shop.html'))
});

module.exports = router;