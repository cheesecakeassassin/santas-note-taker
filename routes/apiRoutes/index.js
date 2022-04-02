const router = require('express').Router();
const noteRoutes = require('../apiRoutes/noteRoutes');

// Tells express to use noteRoutes when referring to apiRoutes
router.use(noteRoutes);

module.exports = router;
