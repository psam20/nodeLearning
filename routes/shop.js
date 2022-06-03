const path = require('path')
const express = require('express');

const router = express.Router();


router.get('/', (req, res, next) => {
    // __dirname will give path to the Folder Name in which file we are using the Dirname .
    res.sendFile(path.join(__dirname, '../', 'views','shop.html')) //Path Join Automatically Builds the Paths For us . We use Absolute Paths Here
});

module.exports =router