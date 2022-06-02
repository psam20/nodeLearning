// const http = require('http');
const express = require('express')

const app = express();

app.use('/',(req,res,next)=>{
console.log("This always Runs in all the Routes");
next()
})
app.use('/add-product',(req,res,next)=>{
    console.log("In the Middleware")
    res.send('<h1>Add Product Page</h1>')
    // next() // Allows the Request to Continue to the Next Middleware in the Code.
});
app.use('/',(req,res,next)=>{
    console.log("In the Another Middleware")
    res.send('<h1>Hellow From Express</h1>')
});

// const server = http.createServer(app)

// server.listen(3000);

app.listen(3000)
