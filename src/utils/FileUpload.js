var multer  = require('multer')
const path = require('path')
const fs = require('fs')

var productImageUpload = multer.diskStorage(
    { 
        destination: (req , file , cb)=>{
            const dir = `./src/uploads/products`;
            if(!fs.existsSync(dir)) {
                fs.mkdirSync(dir, {
                    recursive : true
                })
            }
            cb(null , dir)
        },
        filename : (req , file , cb)=>{cb(null , file.originalname + '-' + Date.now()+'.'+file.mimetype.split("/")[1])}
    }
)

var categoryImage = multer.diskStorage(
    { 
        destination: (req , file , cb)=>{
            const dir = `./src/uploads/category`
            if(!fs.existsSync(dir)) {
                fs.mkdirSync(dir, {
                    recursive : true
                })
            }
            cb(null , dir)},
        filename : (req , file , cb)=>{cb(null , file.originalname + '-' + Date.now()+'.'+file.mimetype.split("/")[1] )}
    }
)

var productImage = multer({storage : productImageUpload })
var categoryStorage = multer({storage : categoryImage});

module.exports = {
    productImage,
    categoryStorage
}