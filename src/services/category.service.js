const httpStatus = require('http-status');
const  Category  = require('../models').Category;
const  Product  = require('../models').Product;

const ApiError = require('../utils/ApiError');


const createCategory = async(name , avatar) => {
    const category = await Category.create({
        name : name,
        Avatar : `category/${avatar}`
    })
    return category
}

const getAllCategory = async()=>{
    const categoryData = await Category.find()
    return categoryData;
}


module.exports = {
    createCategory,
    getAllCategory
}