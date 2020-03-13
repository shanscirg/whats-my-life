// Require NPM packages
const express = require('express');
const router = express.Router();
const results = require('../personalities/personality');
const db = require('../models');
const bcrypt = require('bcryptjs');

// Render 'Home' handlebars template at root
router.get('/', (req, res) => res.render('home'));

// Render 'Questions' handlebars template and insert all questions from db
router.get('/questions', (req, res) => {
    db.Question.findAll({})
        .then(data => {
            const questionObj = { values: [] };
            data.map(value => questionObj.values.push(value.dataValues))
            res.render('questions', questionObj);
        });
});

// Create new user in db and send to front end
router.post('/api/users', (req, res) => {
    db.User.create({
        firstName: req.body.firstName,
        username: req.body.username,
        password: req.body.password,
        result: req.body.result
    })
        .then(userInfo => {
            res.json(userInfo);
        });
});

// When user signs in, find their info in the db and send to front end
router.post('/api/sign-in', (req, res) => {
    db.User.findOne({
        where: {
            username: req.body.username,
            password: req.body.password
        }
    })
        .then(data => {
            if (!data) {
                return res.json(data);
            }
            res.json(data);
        });
})


// PASSWORD HASH BCRYPT
// const saltRounds = 10;
// router.post('/api/users', (req, res) => {
//     console.log('req.body', req.body);
//     bcrypt.genSalt(saltRounds, (err, salt) => {
//         if (err) {
//             throw err
//         } else {
//             bcrypt.hash(req.body.password, salt, (err, hash) => {
//                 if (err) {
//                     throw err
//                 } else {
//                     db.User.create({
//                         firstName: req.body.firstName,
//                         username: req.body.username,
//                         password: hash,
//                         result: req.body.result
//                     })
//                 }
//             });
//         }
//     })
//         .then(userInfo => {
//             console.log(userInfo);
//             res.json(userInfo);
//         })
// });

// router.post('/api/sign-in', (req, res) => {
//     db.User.findOne({
//         where: {
//             username: req.body.username,
//         }
//     })
//         .then(user => {
//             // console.log('data', data)
//             if (!user) {
//                 return res.json(user);
//             } else {
//                 bcrypt.compare(req.body.password, hash, (err, result) => {
//                     if (result) {
//                         console.log('Password matches!')
//                         res.json(user);
//                     } else {
//                         console.log('Incorrect password. Try again!')
//                     }
//                 })
//             }
//         });
// })


// Render 'Results' handlebars template based on user id from db and insert personality info from personality.js based on user result
router.get('/results/:result/:id', (req, res) => {
    const [personality] = results.filter(item => item.type === req.params.result.toUpperCase())
    return db.User.findOne({
        where: {
            id: req.params.id,
        }
    })
        .then(data => {
            return res.render('results', {
                data,
                personality
            }
            );
        });
});

module.exports = router;