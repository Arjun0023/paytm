// backend/db.js
const mongoose = require('mongoose');

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
