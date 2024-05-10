const express = require('express');
const router = express.Router();
const notesCtrl = require('../../controllers/api/notes');

// POST /api/notes/add (Create a note)
router.post('/add', notesCtrl.create);

module.exports = router;