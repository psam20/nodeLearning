const express = require('express')

const router = express.Router() //Here this Router Function is a Mini Express.js which handles all the Routes

router.get('/add-product', (req, res, next) => {
    res.send('<form action="/product" method="POST"><input type="text" name="title" /> <button type="submit">Add Product</button></form>')
    // next() // Allows the Request to Continue to the Next Middleware in the Code.
});

router.post('/product', (req, res, next) => {
    console.log(req.body)
    res.redirect('/')
})

module.exports = router