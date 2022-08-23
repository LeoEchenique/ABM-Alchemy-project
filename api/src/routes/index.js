const { Router } = require('express');
const { Wallet, Operation } = require("../db.js");
// Import all Controllers;
// Like const authRouter = require('./auth.js');
const router = Router();





/* router.use("/wallet",) */




router.post('/', async (req, res) => {

    const { Balance } = req.body;
    console.log("gola", Balance)
    try {
        const wallet = await Wallet.create({ Balance })
        res.status(201).send(wallet);

    } catch (error) {
        res.status(404).send(error.message)
    }

});


/*         Reason: {
Mount
        },
Type */
router.post("/Operations", async (req, res) => {

    const { Reason, Mount, Type, Fk_wallet } = req.body;

    try {

        const operation = await Operation.create({
            Reason,
            Mount,
            Type,
        })


        /* console.log(operation.dataValues.Id) */

        /*  const wallet = await Wallet.findByPk(Fk_wallet, {
             include: Operation
         }); */

        const relation = await operation.setWallet(Fk_wallet)

        if (Type === "Income") {

            const wal = await Wallet.findByPk(Fk_wallet)
            wal.Balance = parseInt(wal.Balance) + parseInt(Mount)
            await wal.save();
            return res.status(201).send(wal);
        }
        /*      const resa = await Operation.findAll({
                 include: Wallet
     
             }) */
        /* console.log(resa, "resa") */
        res.status(201).send(operation);
    } catch (error) {
        res.status(402).send(error.message)
    }

})

module.exports = router;
