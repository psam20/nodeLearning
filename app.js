const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')
const errorController = require('./controllers/errorPage')

const app = express();
// Here If We Want To change the View Engine to ejs , replace pug to ejs and vice versa
app.set('view engine', 'ejs')
app.set('views','views')
app.use(bodyParser.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname , 'public'))) //here Static function of Express Serves Static Files
 
app.use('/admin',adminRoutes) // Here adminRoutes Function only runs for route which starts with /admin
app.use(shopRoutes)

app.use(errorController.getErrorPage)

app.listen(3000)
