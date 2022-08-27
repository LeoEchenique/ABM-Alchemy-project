const { Router } = require('express');
const Wallet = require("./controllers/Wallet")
const Operations = require("./controllers/Operations")
// Import all Controllers;
// Like const authRouter = require('./auth.js');
const router = Router();


router.use("/Operations", Operations)
router.use("/Wallet", Wallet)





module.exports = router;
