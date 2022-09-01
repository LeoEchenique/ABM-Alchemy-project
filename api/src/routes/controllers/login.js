const { Router } = require("express");
const router = Router();
const { OAuth2Client } = require("google-auth-library");

const oAuth2Client = new OAuth2Client(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    "postmessage"
);

router.get("/", (req, res) => {
    let { hola } = req.body;
    res.send(hola);
});

router.post("/token", async (req, res) => {
    const { token } = req.body;
    console.log("entre");
    try {
        const ticket = await oAuth2Client.verifyIdToken({
            // this is useless.
            idToken: token,
            audience: process.env.CLIENT_ID,
        });

        //   with this information i'm suppose to findOrCreate an instance of user (also create and inyect the modal "users" to the DB)
        const { name, email, picture } = ticket.getPayload();
        console.log(name, email, picture);
        res.status(200).send({ name, email, picture });
        res.send(token);
    } catch (error) {
        res.status(404).send(error.message);
    }
});

router.post("/google", async (req, res) => {
    // when decode with jwt gives the profile information.
    const { tokens } = await oAuth2Client.getToken(req.body.code); // exchange code for tokens
    console.log(tokens);

    res.json(tokens);
});

module.exports = router;
