const express = require('express');
const path = require('path')

const router = express();

router.get('/users',(req,res,next)=>{
    console.log(req.body)
    res.status(200).sendFile(path.join(__dirname ,"..", "views", "user.html"))
})
router.post('/add-users',(req,res,next)=>{
    console.log(req.body)
    res.status(200).sendFile(path.join(__dirname ,"..", "views", "user.html"))
    res.redirect('/')
})

module.exports = router