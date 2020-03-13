const express = require("express");
const router = express.Router();
const results = require("../personalities/personality");
const db = require("../models");
const bcrypt = require("bcrypt");

router.get("/", (req, res) => res.render("home"));

router.get("/questions", function (req, res) {
    db.Question.findAll({})
    .then(function (data) {
        const questionObj = { values: [] };
        data.map(value => questionObj.values.push(value.dataValues))
        res.render("questions", questionObj);
    });
});

//router post
router.post("/questions", (req, res) => {
    console.log(req.body);
    db.User.create({
        firstName: req.body.newfirstname,
        username: req.body.newusername,
        password: req.body.newpassword,
        result: req.body.result
    })
        .then(userInfo => res.json(userInfo));
});

router.get("/results/:result", (req, res) => {
    const personality = results.filter(item => item.type === req.params.result.toUpperCase())
    console.log(personality);
    res.render("results", personality[0]);
});

module.exports = router;