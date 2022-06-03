const express = require('express')
const path = require('path');

const router = express.Router() //Here this Router Function is a Mini Express.js which handles all the Routes

router.get('/add-product', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../' ,'views','add-product.html'))
});

router.post('/product', (req, res, next) => {
    console.log(req.body)
    res.redirect('/')
})

module.exports = router