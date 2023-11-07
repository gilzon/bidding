const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
  lotNumber: Number,
  description: String,
  lotType: String,
  subType: String,
  literWeight: Number,
  netWeight: Number,
  sampleWeight: Number,
  color: String,
  moistureContent: Number,
  cleanLot: Boolean, // Change the data type to Boolean
  quotePrice: Number,
  seller: String,
});

module.exports = mongoose.model('Product', productSchema);
