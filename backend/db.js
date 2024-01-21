// backend/db.js
const mongoose = require('mongoose');

mongoose.connect('mongodb://username:password@localhost:27017/mydatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


// Create a Schema for Users
const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    firstName: String,
    lastName: String
});

// Create a model from the schema
const User = mongoose.model('User', userSchema);

module.exports = {
	User
};
