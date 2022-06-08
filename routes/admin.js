const express = require('express')
const path = require('path');

const router = express.Router() //Here this Router Function is a Mini Express.js which handles all the Routes

const rootDir = require('../utill/path')

const products = []
//  /admin/add-product ==> GET
router.get('/add-product', (req, res, next) => {
    res.render('add-product',{docTitle: 'Add Product Page'})
});
//  /admin/product ==> POST
router.post('/add-product', (req, res, next) => {
    products.push({title : req.body.title})
    res.redirect('/')
})

exports.routes = router;
exports.products = products