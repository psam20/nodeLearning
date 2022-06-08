const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

const adminData = require('./routes/admin')
const shopRoutes = require('./routes/shop')

const app = express();
app.set('view engine', 'pug')
app.set('views','views')
app.use(bodyParser.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname , 'public'))) //here Static function of Express Serves Static Files
 
app.use('/admin',adminData.routes) // Here adminRoutes Function only runs for route which starts with /admin
app.use(shopRoutes)

app.use((req,res,next)=>{
    res.render('404' , {docTitle :"Page Not Found "});

})

app.listen(3000)
