const { Router } = require('express');
const { Wallet, Operation } = require("../db.js");
const { Calculator } = require("../Calculate_Balance/Calculator.js")
// Import all Controllers;
// Like const authRouter = require('./auth.js');
const router = Router();





router.post("/Operations", async (req, res) => {

    const { Reason, Mount, Type, Fk_wallet } = req.body;

    try {
        const wallet = await Wallet.findByPk(Fk_wallet);
        const balance = wallet.dataValues.Funds;
        const newBalance = Calculator(Type, Mount, balance);
        if (newBalance === "Denied") throw new Error("Not enough funds to realize the operation.");
        const date = new Date();

        const operation = await Operation.create({
            Reason,
            Mount,
            Type,
            Balance: newBalance,
            Date: date
        });
        await operation.setWallet(Fk_wallet);
        wallet.Funds = newBalance;
        await wallet.save();
        res.status(202).send({
            operation,
        });
    } catch (error) {
        res.status(402).send(error.message);
    }

})


router.get("/Operations", async (req, res) => {

    let operations = await Operation.findAll()
    res.status(200).send(operations)
    /* this will send All the operations to the front and from there will sort for the first ten 
        so that in case we wanna see all the operations can be possible by just taking the sort ecuation out.    
    */
})



module.exports = router;
