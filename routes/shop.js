const path = require('path')
const express = require('express');
const adminData = require('./admin')
const router = express.Router();



router.get('/', (req, res, next) => {
    const products = adminData.products
    // __dirname will give path to the Folder Name in which file we are using the Dirname .
    // res.sendFile(path.join(__dirname, '../', 'views','shop.html')) //Path Join Automatically Builds the Paths For us . We use Absolute Paths Here
    res.render('shop' , {prods : products , docTitle : 'Shoppin Page'})
});

module.exports =router