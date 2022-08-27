
const { Router } = require('express');
const { Wallet } = require("../../db");
const router = Router();

router.get("/", async (req, res) => {

    // with user registred this will recive an Id to match the correspondent wallet.
    // const {id}= req.boy or whatever..
    try {

        const wallet = await Wallet.findAll();
        return res.status(200).send(wallet)

    } catch (error) {
        res.status(400).send(error.message)
    }
})

module.exports = router;