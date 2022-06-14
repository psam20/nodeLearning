const express = require('express')
const productController = require('../controllers/product')
const router = express.Router() //Here this Router Function is a Mini Express.js which handles all the Routes


//  /admin/add-product ==> GET
router.get('/add-product', productController.getAddProducts);
//  /admin/product ==> POST
router.post('/add-product', productController.postAddProduct);

module.exports =router