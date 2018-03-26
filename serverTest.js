const express = require('express');
const next = require('next');


const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare()
  .then(() => {
    const server = express()
    //This is done to support reload of the page and still be able to display the same page
    server.get('/p/:id', (req, res) => {
      const actualPage = '/post'
      const queryParams = { id: req.params.id }
      app.render(req, res, actualPage, queryParams)
    })

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(process.env.PORT || 3000, err => {
      if (err) throw err
      console.log(`Ready on http://localhost:${process.env.PORT}`);
    })
  })
  .catch(error => {
    console.error(error.stack)
    process.exit(1)
  });
