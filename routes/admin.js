const express = require('express')
const path = require('path')

const rootDir = require('../util/path');

const router = express.Router();

const productList = []

router.get('/add-product', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'add-product.html'))
});

router.post('/add-product', (req, res, next) => {
  const { title } = req.body
  productList.push({ title })
  res.redirect('/')
});

module.exports = {
  router, productList
};