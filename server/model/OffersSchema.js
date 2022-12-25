const mongoose = require('mongoose');

const offerSchema = {
  title: { type: String, require: true },
  original_price: { type: Number, require: true },
  discounted_price: { type: Number, require: true },
  img: { type: String, require: true },
  description: { type: String },
  type: { type: String, require: true },
};

const OfferModel = mongoose.model('offer', offerSchema);

module.exports = OfferModel;
