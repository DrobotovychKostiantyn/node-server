const express = require('express')

const router = express.Router();

router.get('/add-product', (req, res, next) => {
  res.send(`
  <html>
    <head>
      <title>Hello!</title>
    </head>
    <body>
      <p>Message Form</p>

      <form action="/admin/add-product" method="POST">
        <input type="text" name="title"/>
        <button type="submit">
          submit
        </button>
      </form>
    </body>
  </html>
`)
});

router.post('/add-product', (req, res, next) => {
  console.log(req.body)
  res.redirect('/')
})

module.exports = router;