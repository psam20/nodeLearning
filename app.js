const express = require('express');

const app = express();
// app.use('/',(req,res,next)=>{
// console.log("this is Middleware 1")
// next()
// })
// app.use((req,res,next)=>{
//     console.log("this is Middleware 2")
//     res.send("Hello World")
//     next()
// })
app.use('/u',(req,res,next)=>{
    console.log("this is middleware user")
   return res.send('<h2>Users Response Page</h2>')
})
app.use('/',(req,res,next)=>{
    console.log("this is base Middleware")
   return res.send('<h1>THis is Assignment 1 User Page</h1>')
})


app.listen(4200);