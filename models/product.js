// Here This is The Basic Example of Models
const path = require('path')
const fs = require('fs');
const { json } = require('express/lib/response');

module.exports = class Product {
    constructor(title){
        this.title = title;
    }
    save(){
        const p = path.join(path.dirname(process.mainModule.filename), 'data' , 'products.json')

        fs.readFile(p,(err ,fileContent) => {
            let products = [];
            if(!err){
                products = JSON.parse(fileContent)
            }
            products.push(this);
            fs.writeFile(p , JSON.stringify(products),err =>{
                console.log(err)
            })
        })
    }
// Here Since the fetchAll Function is the Async Code ,thats why we need to Pass the inner Callback to fetch the Product Data
    static fetchAll(cb){
        const p = path.join(path.dirname(process.mainModule.filename), 'data' , 'products.json')
        fs.readFile(p , (err , fileContent)=>{
            if(err){
                cb( []);
            }
            cb(JSON.parse(fileContent));
        })
    }

}