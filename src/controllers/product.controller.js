const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const  productService = require('../services').productService;

const AddNewProduct = async(req , res) => {
    const product = await productService.createProduct(req.body , req.files);
    res.status(httpStatus.CREATED).send({data : product})
}

const GetAllProducts = async(req , res) => {

    const getAllProducts = await productService.getAllProducts(req.query.pageNumber);
    res.status(httpStatus.FOUND).send({data : getAllProducts})
}

const GetProductByCategory = async(req, res) =>{
    // console.log(req.body.catID)
    const products = await productService.getProductByCategory(req.body.catID);
    res.status(httpStatus.FOUND).send({data : products})
}
module.exports = {
    AddNewProduct,
    GetAllProducts,
    GetProductByCategory
}