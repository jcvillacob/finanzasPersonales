const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movementSchema = new Schema({
  type: { type: String, required: true },
  category: { type: String, required: true },
  description: { type: String},
  account: { type: String, required: true },
  amount: { type: Number, required: true },
  date: { type: Date, default: Date.now },
  userId: { type: String, required: true },
});

module.exports = mongoose.model('Movement', movementSchema);