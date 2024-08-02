const express = require('express');
const { getAllEvents, createEvent, updateEvent, deleteEvent } = require('../controllers/event');
const { verifyToken } = require('../middlewares/auth');

const router = express.Router();

router.get('/', getAllEvents);
router.post('/', verifyToken, createEvent);
router.put('/:id', verifyToken, updateEvent);
router.delete('/:id', verifyToken, deleteEvent);

module.exports = router;
