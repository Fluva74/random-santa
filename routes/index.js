const express = require("express");
const router = express.Router();
const { ensureAuthenticated, forwardAuthenticated } = require("../config/auth");

// Welcome Page
router.get("/", forwardAuthenticated, (req, res) => res.render("welcome"));

//Exchange Page
router.get("/exchange", ensureAuthenticated, (req, res) =>
    res.render("exchange", {
        user: req.user,
    })
);

//Event Page
router.get("/event", ensureAuthenticated, (req, res) =>
    res.render("event", {
        user: req.user,
    })
);

//Groupname Page
router.get("/groupname", ensureAuthenticated, (req, res) =>
    res.render("groupname", {
        user: req.user,
    })
);

module.exports = router;