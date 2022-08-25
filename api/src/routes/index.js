const { Router } = require('express');
const Operations = require("./controllers/Operations")
// Import all Controllers;
// Like const authRouter = require('./auth.js');
const router = Router();


router.use("/Operations", Operations)






module.exports = router;
