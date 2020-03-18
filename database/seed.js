let faker = require('faker');
let fs = require('fs')
let listing = require('./schema.js')
let host = require('./schema.js')

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fakeListing');

for (let i = 0; i < 100; i++) {
 host.create({
    First: faker.name.firstName(),
    Last: faker.name.firstName(),
    Title: faker.company.companyName(),
    Avatar: faker.image.avatar(),
    SuperHost: faker.random.boolean(),
    // Listing: Schema.ObjectId
  }, (err, res) => {
    console.log('host added')
  })

  // listing.create({
  //   Name: faker.random.words(),
  //   Address: faker.address.streetAddress(),
  //   Host: faker.name.firstName() + ' ' + faker.name.lastName(),
  //   Booking: [{
  //     id: faker.random.number(),
  //     date: faker.date.future(),
  //     price: faker.commerce.price()
  //   }]
  // }, (err,res) => {
  //   console.log('listing added')
  // })
  // fakeData.push(entry);
}
