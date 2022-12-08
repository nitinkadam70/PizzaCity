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


app.all('*', (req, res) => {
  res.status(404).send('Not Found');
});
app.listen(8080, () => {
  console.log('server started on http://localhost:8080');
});
