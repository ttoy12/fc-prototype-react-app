const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const port = process.env.PORT || 9000

const MongoClient = require('mongodb').MongoClient

MongoClient.connect('mongodb+srv://ialsanto:pZA9lGjyKDkqqgvy@customers.q2nfot5.mongodb.net/?retryWrites=true&w=majority', (err, client) => 
{
  
  if (err){ console.log("we looked for it but found"), err}

  const db = client.db('Animals')

  db.collection('Sets').find().toArray((err, result) => 
  {
    if (err) throw err

    console.log(result)
  })
});

app.prepare().then(() => {
  const server = express();

  server.get('/',(req,res)=>{
    res.send('hello World!');
  });
  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
  server.get('/get-data', (req, res) => {
    console.log("im in server looking for data");
    MongoClient.collection('Sets').find().toArray((err, result) => {
      if (err) throw err
      console.log(result)
      res.json(result) // Send the result as a response to the client
    })
  })
});
