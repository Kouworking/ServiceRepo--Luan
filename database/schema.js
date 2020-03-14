const mongoose = require('mongoose');
const { Schema } = mongoose;

const ListingSchema = new Schema({
  Name: String,
  Address: String,
  Host: String,
  Booking: [{
    id: Number,
    date: Date,
    price: Number
  }],
});

module.exports = mongoose.model('listings', ListingSchema);