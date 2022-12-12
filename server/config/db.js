const { connect, default: mongoose } = require('mongoose');
require('dotenv').config();

const MongoDB_URL = process.env.MONGODB_URL;
const connection = mongoose.connect(MongoDB_URL);

module.exports = { connection };
