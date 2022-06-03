const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')

const app = express();
app.use(bodyParser.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname , 'public'))) //here Static function of Express Serves Static Files
 
app.use('/admin',adminRoutes) // Here adminRoutes Function only runs for route which starts with /admin
app.use(shopRoutes)

app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'views','errorPage.html'));

})

app.listen(3000)
