const db = require('../config/db');

const getAllEvents = (req, res) => {
    db.query('SELECT * FROM events', (err, results) => {
        if (err) throw err;
        res.json(results);
    });
};

const createEvent = (req, res) => {
    const { title, description, date } = req.body;
    db.query('INSERT INTO events (title, description, date) VALUES (?, ?, ?)', [title, description, date], (err, results) => {
        if (err) throw err;
        res.json({ message: 'Event created', eventId: results.insertId });
    });
};

const updateEvent = (req, res) => {
    const { id } = req.params;
    const { title, description, date } = req.body;
    db.query('UPDATE events SET title = ?, description = ?, date = ? WHERE id = ?', [title, description, date, id], (err, results) => {
        if (err) throw err;
        res.json({ message: 'Event updated' });
    });
};

const deleteEvent = (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM events WHERE id = ?', [id], (err, results) => {
        if (err) throw err;
        res.json({ message: 'Event deleted' });
    });
};

module.exports = { getAllEvents, createEvent, updateEvent, deleteEvent };
