const express = require('express')
const path = require('path')
const app = express();
// const Listings = require('../database/schema.js')

const mongoose = require('mongoose');
const { Schema } = mongoose;

const ListingSchema = new Schema({
  id: Number,
  Name: String,
  Address: String,
  Host: String,
  Booking: [{ id: Number, date: Date }],
})

const Listings = mongoose.model('listings', ListingSchema)