const express = require('express');
const Emergency = require('../models/Emergency');
const router = express.Router();

router.post('/report', async (req, res) => {
    try {
        const { type, location } = req.body;
        const emergency = new Emergency({ type, location });
        await emergency.save();
        res.status(201).json({ message: 'Emergency reported successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.get('/status/:id', async (req, res) => {
    try {
        const emergency = await Emergency.findById(req.params.id).populate('assignedResponder');
        res.json(emergency);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
