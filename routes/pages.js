const user = require('./users');
const express = require('express');
const saved = require('./saved');
const visController = require('../controller/vis');

const router = express.Router();
// console.log("This is the username in pages");
// console.log(user.email);
// console.log("username ends");
router.get('/', (req,res) => {
    res.render('index.hbs')
} );

router.get('/login', (req,res) => {
    res.render('login.hbs')
} );
router.get('/register', (req,res) => {
    res.render('register.hbs')
} );

router.post('/submitregister', user.register);
router.post('/save', saved.save);
router.post('/open/:data', saved.open);
router.post('/delete/:data', saved.delete);
router.post('/update/:data', saved.update);
router.post('/submitlogin', user.login);

module.exports = router;