const { Router } = require('express');

// Import all Controllers;
// Like const authRouter = require('./auth.js');
const router = Router();



router.get('/', (req, res) => {
    res.send('Done  ');
});

module.exports = router;
