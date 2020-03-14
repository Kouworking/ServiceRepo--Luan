let faker = require('faker');
let fs = require('fs')
let listing = require('./schema.js')
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fakeListing');

for (let i = 0; i < 100; i++) {
  listing.create({
    Name: faker.random.words(),
    Address: faker.address.streetAddress(),
    Host: faker.name.firstName() + ' ' + faker.name.lastName(),
    Booking: [{
      id: faker.random.number(),
      date: faker.date.future(),
      price: faker.commerce.price()
    }]
  }, (err,res) => {
    console.log('listing added')
  })
  // fakeData.push(entry);
}
