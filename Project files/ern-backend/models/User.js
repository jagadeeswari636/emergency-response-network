const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    role: { type: String, enum: ['admin', 'responder', 'volunteer', 'user'], default: 'user' }
});

module.exports = mongoose.model('User', UserSchema);
