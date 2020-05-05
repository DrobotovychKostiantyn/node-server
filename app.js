const express = require('express');
const bodyParser = require('body-parser');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const port = 3000;
const notFoundStatus = 404;
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use((req,res,next) => {
  res.status(notFoundStatus).send('<h1>Page not found</h1>');
});

app.listen(port)