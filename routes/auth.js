const express = require("express");
const passport = require("passport");
const router = express.Router();
router.get("/", passport.authenticate("discord"));
router.get("/redirect", passport.authenticate("discord", {
    failureRedirect: "/forbidden",
    successRedirect: "/create"
}));
module.exports = router;