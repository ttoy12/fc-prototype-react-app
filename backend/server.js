const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const port = process.env.PORT || 8080



const MongoClient = require('mongodb').MongoClient

MongoClient.connect('mongodb+srv://ialsanto:pZA9lGjyKDkqqgvy@customers.q2nfot5.mongodb.net/?retryWrites=true&w=majority', (err, client) => {
  if (err) throw err

  const db = client.db('Animals')

  db.collection('Sets').find().toArray((err, result) => {
    if (err) throw err

    console.log(result)
  })
});

app.prepare().then(() => {
  const server = express();
  // server.get('/favicon.ico', (req, res) => res.status(204));

  // server.get('*', (req, res) => {
  //   return handle(req, res);
  // });

  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
