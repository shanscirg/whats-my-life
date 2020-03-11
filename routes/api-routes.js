const express = require("express");
const router = express.Router();
const results = require("../personalities/personality");
const db = require("../models");

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
router.post("/api/users/?", (req, res) => {
    db.User.create({
        firstName: req.params.firstName,
        username: req.params.username,
        password: req.params.password,
        result: joinedResult
    })
        .then(function (userInfo) {
            res.json(userInfo)
        });
});

router.get("/results/:result", (req, res) => {
    const personality = results.filter(item => item.type === req.params.result.toUpperCase())
    console.log(personality);
    res.render("results", personality[0]);
});

module.exports = router;