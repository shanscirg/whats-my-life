const express = require("express");
const router = express.Router();
// const fs = require("fs");
const results = require("../personalities/personality")

router.get("/", (req, res) => res.send("TESTING"));

router.get("/results/:result", (req, res) => {
    const personality = results.filter(item => item.type === req.params.result.toUpperCase())
    console.log(personality);
    res.render("personality", personality[0])
});

module.exports = router;