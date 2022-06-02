const http = require('http');
const express = require('express')

const app = express();
app.use((req,res,next)=>{
    console.log("In the Middleware")
    next() // Allows the Request to Continue to the Next Middleware in the Code.
});
app.use((req,res,next)=>{
    console.log("In the Another Middleware")
    res.send('<h1>Hellow From Express</h1>')
});

const server = http.createServer(app)

server.listen(3000);
