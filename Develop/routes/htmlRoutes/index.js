// Import path to map routes to a direct path
const path = require('path');
const router = require('express').Router();

// Renders notes.html when /notes is reached
router.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/notes.html'));
});

// Renders index.html when any argument after / is typed that isn't /notes
router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/index.html'));
});

module.exports = router;