const express = require('express');

const Classes = require('./classes-model')

const router = express.Router();

router.get('/', (req, res) => {
    Classes.find()
    .then(classes => {
        res.json(classes);
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to get classes', err})
    })
});

module.exports = router;
