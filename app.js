// const http = require('http');
const express = require('express')
const bodyParser = require('body-parser')
const app = express();
app.use(bodyParser.urlencoded({extended:false})) //It will Parse the Body before the app , that's why its in the start and it also calls next() function
app.use('/add-product', (req, res, next) => {
    res.send('<form action="/product" method="POST"><input type="text" name="title" /> <button type="submit">Add Product</button></form>')
    // next() // Allows the Request to Continue to the Next Middleware in the Code.
});

app.use('/product', (req, res, next) => {
    console.log(req.body)
    res.redirect('/')
})
app.use('/', (req, res, next) => {
    res.send('<h1>Hellow From Express</h1>')
});

// const server = http.createServer(app)

// server.listen(3000);

app.listen(3000)
