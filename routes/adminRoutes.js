const express = require('express');
const path=require('path')
const router= express();

router.get('/',(req,res,next)=>{
res.status(200).sendFile(path.join(__dirname, "..", "views" , "admin.html"))
})
module.exports = router