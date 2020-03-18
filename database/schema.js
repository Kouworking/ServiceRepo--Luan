const mongoose = require('mongoose');
const { Schema } = mongoose;

const HostSchema = new Schema({
  First: String,
  Last: String,
  Title: String,
  Avatar: Buffer,
  SuperHost: Boolean,
  // Listing: Schema.ObjectId
})

const ListingSchema = new Schema({
  Name: String,
  Address: String,
  Booking: [{
    id: Number,
    date: Date,
    price: Number
  }],
});

module.exports = mongoose.model('host', HostSchema)
