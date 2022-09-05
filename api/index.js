const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const { Wallet } = require("./src/db.js")
const PORT = process.env.PORT || 3001;


conn.sync({ force: true }).then(async () => {
    /*     try {
            await Wallet.create({ Funds: 500 })
        } catch (error) {
            console.log(error.message)
        } */

    server.listen(PORT, () => console.log(`server listening on ${PORT}`))
})
