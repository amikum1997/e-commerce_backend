const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const  categoryService = require('../services').categoryService;


const AddNewCategory = async(req , res) => {
    const category = await categoryService.createCategory(req.body.name , req.file.originalname);
    res.status(httpStatus.CREATED).send({data : category});
}

const GetAllCategory = async(req ,res) => {
    const getAllCategory = await categoryService.getAllCategory();
    res.status(httpStatus.CREATED).send({data : getAllCategory})
}


module.exports = {
    AddNewCategory,
    GetAllCategory
}