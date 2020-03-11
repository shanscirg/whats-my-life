const express = require("express");
const router = express.Router();
const results = require("../personalities/personality");
const db = require("../models");

router.get("/", (req, res) => {
    res.render("home");
});

router.get("/test", function (req, res) {
    db.Question.findAll({})
        .then(function (data) {
            // const question = data[0].Question.dataValues;
            // console.log(data[0.Question);
            // console.log(data[0]);
            const questionObj = {values: []}; 
            data.map(value => questionObj.values.push(value.dataValues))
            // console.log(questionObj);
            // console.log(hbsObject.questions[0].dataValues);
            res.render("test", questionObj);
        });
});

router.get("/results/:result", (req, res) => {
    const personality = results.filter(item => item.type === req.params.result.toUpperCase())
    console.log(personality);
    res.render("results", personality[0]);
});

module.exports = router;