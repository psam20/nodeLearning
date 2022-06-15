// Here We write all the Product Controller Logic
const Product = require('../models/product');

exports.getProducts =  (req, res, next) => {
// Here the FetchAll fuction will not Return Anything , It Will Just Call The Callback Function once its Reads all the File From Product.json
     Product.fetchAll(products =>{
        res.render('shop/product-list' , {prods : products , docTitle : 'Products Page'})
    })
    // __dirname will give path to the Folder Name in which file we are using the Dirname .
    // res.sendFile(path.join(__dirname, '../', 'views','shop.html')) //Path Join Automatically Builds the Paths For us . We use Absolute Paths Here
   
}

exports.getIndex = (req,res,next) =>{
    Product.fetchAll(products =>{
        res.render('shop/index' , {prods : products , docTitle : 'Shopping Page'})
    })
    // __dirname will give path to the Folder Name in which file we are using the Dirname .
    // res.sendFile(path.join(__dirname, '../', 'views','shop.html')) //Path Join Automatically Builds the Paths For us . We use Absolute Paths Here
   
}

exports.getCart = (req,res,next)=>{
res.render('shop/cart',{
docTitle:'Your Cart'
})
}

exports.getCheckout = (req,res,next)=>{
    res.render('shop/checkout',{
        
            docTitle:'Checkout Page'
    })
}