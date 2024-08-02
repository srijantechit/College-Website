const express = require('express');
const { getAllEvents, createEvent, updateEvent, deleteEvent } = require('../components/controllers/event');
const { verifyToken } = require('../components/middlewares/auth');

const router = express.Router();

router.get('/', getAllEvents);
router.post('/', verifyToken, createEvent);
router.put('/:id', verifyToken, updateEvent);
router.delete('/:id', verifyToken, deleteEvent);

module.exports = router;
