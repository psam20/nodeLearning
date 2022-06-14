// Here We write all the Product Controller Logic
const Product = require('../models/product');

exports.getAddProducts = (req,res,next)=>{
    res.render('add-product',{docTitle: 'Add Product Page'})
}
exports.postAddProduct = (req,res,next)=>{
    const product = new Product(req.body.title);
    product.save()
    res.redirect('/')
}
exports.getProducts =  (req, res, next) => {
// Here the FetchAll fuction will not Return Anything , It Will Just Call The Callback Function once its Reads all the File From Product.json
     Product.fetchAll(products =>{
        res.render('shop' , {prods : products , docTitle : 'Shoppin Page'})
    })
    // __dirname will give path to the Folder Name in which file we are using the Dirname .
    // res.sendFile(path.join(__dirname, '../', 'views','shop.html')) //Path Join Automatically Builds the Paths For us . We use Absolute Paths Here
   
}