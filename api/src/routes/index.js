const { Router } = require('express');
const { Wallet, Operation } = require("../db.js");
const { Calculator } = require("../Calculate_Balance/Calculator.js")
// Import all Controllers;
// Like const authRouter = require('./auth.js');
const router = Router();





/* router.use("/wallet",) */



/* 
router.post('/', async (req, res) => {

    const { Balance } = req.body;
    try {
        const wallet = await Wallet.create({ Balance })
        res.status(201).send(wallet);

    } catch (error) {
        res.status(404).send(error.message)
    }

}); */


router.post("/Operations", async (req, res) => {

    const { Reason, Mount, Type, Fk_wallet } = req.body;

    try {

        const operation = await Operation.create({
            Reason,
            Mount,
            Type
        });
        await operation.setWallet(Fk_wallet);
        const wallet = await Wallet.findByPk(Fk_wallet);
        const balance = wallet.dataValues.Balance;
        const newBalance = Calculator(Type, Mount, balance);
        if (newBalance === "Denied") throw new Error("Not enough funds to realize the operation.");
        wallet.Balance = newBalance;
        await wallet.save();
        res.status(202).send({
            operation,
            newBalance
        });
    } catch (error) {
        res.status(402).send(error.message);
    }

})

module.exports = router;
