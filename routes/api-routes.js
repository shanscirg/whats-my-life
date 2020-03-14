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

//router post to database
router.post("/api/users", (req, res) => {
    console.log('req.body', req.body);
    db.User.create({
        firstName: req.body.firstName,
        username: req.body.username,
        password: req.body.password,
        result: req.body.result
    })
        .then(userInfo => {
            console.log(userInfo);
            res.json(userInfo);
        });
});

// router.get("/results", (req, res) => res.sendFile(path.join(__dirname, "../public/views/results.handlebars")));


//router post to 
router.post("/api/sign-in", (req, res) => {
    db.User.findOne({
        where: {
            username: req.body.username,
            password: req.body.password
        }
    })
        .then(data => {
            // console.log('data', data)
            if (!data) {
                return res.json(data);
            }
            res.json(data);
        });
})

router.get("/results/:result/:id", (req, res) => {
    const [personality] = results.filter(item => item.type === req.params.result.toUpperCase())
    // console.log("parseInt(req.params.id)", typeof parseInt(req.params.id));
    // if (typeof parseInt(req.params.id) === Number) {
        return db.User.findOne({
            where: {
                id: req.params.id,
            }
        })
            .then(data => {
                console.log('find one where id is req.params.id', data);
                return res.render("results", {
                    data,
                    personality
                }
                );
            });
    // }
    // console.log(personality);
    // res.render("results", { personality, data: {dataValues: {firstName: req.params.id}} });
});

module.exports = router;