const winston = require('winston');
const mongoose = require('mongoose');

module.exports = function() {
  mongoose.connect('mongodb:')
    .then(() => console.log('Connected to MongoDB...'));
}