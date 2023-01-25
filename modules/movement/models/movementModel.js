const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movementSchema = new Schema({
  type: { type: String, required: true },
  category: { type: String, required: true },
  description: { type: String, required: true },
  account: { type: String, required: true },
  amount: { type: Number, required: true },
  date: { type: Date, required: true },
});

module.exports = mongoose.model('Movement', movementSchema);