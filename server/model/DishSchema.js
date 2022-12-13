const mongoose = require('mongoose');

const dishSchema = mongoose.Schema({
  title: { type: String, require: true },
  price: { type: Number, require: true },
  tags: { type: String },
  description: { type: String },
  img: { type: String, require: true },
  type: { type: String, require: true },
  id: { type: Number },
});

const DishModel = mongoose.model('dish', dishSchema);

module.exports = DishModel;
