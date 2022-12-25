const express = require('express'); //Library
const cors = require('cors');
const connection = require('./config/db');
const dishRouter = require('./routes/dish.routes');
const offersRouter = require('./routes/offers.routes');
require('dotenv').config();

const app = express(); //Server

app.use(cors());
app.use(express.json()); //middlewares
app.use(express.urlencoded({ extended: true }));

app.use('/dish', dishRouter);
app.use('/offers', offersRouter);

//Read Data or Get Data
app.get('/', (req, res) => {
  res.send({ status: 'success', msg: 'Welcome to Homepage' });
});

app.all('*', (req, res) => {
  res.status(404).send('Not Found');
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, async () => {
  try {
    await connection;
    console.log('Connected to MongoDB');
  } catch (e) {
    console.log('ERROR: ' + e);
  }
  console.log(`server started on http://localhost:${PORT}`);
});
