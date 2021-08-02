const httpStatus = require('http-status');
const  Category  = require('../models').Category;
const  Product  = require('../models').Product;

const ApiError = require('../utils/ApiError');



const createProduct = async(data , files) => {
    // PRODUCT SINGLE IMAGE
    const ProductmainImage = files.ProductMainImage[0].filename;
    // PRODUCT MULTIPLE IMAGE
    const MultipleImage = [];

    // MAP MULTIPLE IMAGE AND SAVE TO SINGLE ARRAY
    if(files.productImages != undefined){
        files.productImages.map((image , index) => {
            MultipleImage.push(`products/${image.filename}`)
        })
    }

    const product = await Product.create({
        name : data.name,
        description : data.description,
        primaryImage : `products/${ProductmainImage}`,
        multipleImage : MultipleImage,
        longDescription : data.longDescription,
        price : data.price,
        isInSale : data.isInSale,
        salePrice : data.salePrice,
        totalStock : data.totalStock,
        skuNumber : data.skuNumber,
        category : data.category
    }) 
    return product;
}


const getAllProducts = async(pageNumber = 0)=>{
    const allProducts = await Product.find().skip(10 * pageNumber).limit(10).populate('category')
    return allProducts;
}

const getProductByCategory = async(catID)=>{
    const productByCategory = await Product.find({category : catID})
    return productByCategory;
}

module.exports = {
    createProduct,
    getAllProducts,
    getProductByCategory
}