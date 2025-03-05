const mongoose = require('mongoose');

const EmergencySchema = new mongoose.Schema({
    type: String,
    location: String,
    status: { type: String, enum: ['pending', 'assigned', 'resolved'], default: 'pending' },
    assignedResponder: { type: mongoose.Schema.Types.ObjectId, ref: 'User', default: null }
});

module.exports = mongoose.model('Emergency', EmergencySchema);
