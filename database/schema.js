const mongoose = require('mongoose');
const { Schema } = mongoose;

const ListingSchema = new Schema({
  id: Number,
  Name: String,
  Address: String,
  Host: String,
  Booking: [{ id: Number, date: Date }],
})

const Listings = mongoose.model('listings',ListingSchema),

module.exports({
  Listings
})