const express = require('express');
const bodyParser = require('body-parser')
const path = require('path')


const adminRoutes = require('./routes/adminRoutes')
const userRoutes = require('./routes/userRoutes')

const app = express();

app.use(bodyParser.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname , "public")))
app.use(adminRoutes)
app.use(userRoutes)

app.use((req,res,next)=>{
    res.status(404).send('<h1>404 Error Page Not Found</h1>')
})




app.listen(4200);