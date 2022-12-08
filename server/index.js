const { urlencoded } = require('express');
const express = require('express'); //Library
const fs = require('fs');
const { parse } = require('querystring');
const cors = require('cors');

const app = express(); //Server

app.use(express.json()); //middlewares
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.get('/', (req, res) => {
  res.send('Homepage Pizzacity');
});
//Read Data or Get Data
app.get('/dishes', (req, res) => {
  fs.readFile('./db.json', { encoding: 'utf-8' }, (err, data) => {
    //res.setHeader('Content-type', 'application/json');
    //if we wanna send json data then just res.json(JSON.parse(data))
    res.json(JSON.parse(data));
  });
});

app.all('*', (req, res) => {
  res.status(404).send('Not Found');
});
app.listen(8080, () => {
  console.log('server started on http://localhost:8080');
});
