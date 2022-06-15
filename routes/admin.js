const express = require('express')
const adminController = require('../controllers/admin')
const router = express.Router() //Here this Router Function is a Mini Express.js which handles all the Routes


//  /admin/add-product ==> GET
router.get('/add-product', adminController.getAddProducts);

router.get('/products',adminController.getProducts)
//  /admin/product ==> POST
router.post('/add-product', adminController.postAddProduct);

module.exports =router