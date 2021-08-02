const express = require('express');
const auth = require('../../middlewares/auth');
const fileUpload = require('../../utils/FileUpload');
const router = express.Router();
const categoryController = require('../../controllers/category.controller');

router.post('/createNewCategory', fileUpload.categoryStorage.single('categoryImage'), categoryController.AddNewCategory)
router.get('/getAllCategory' , categoryController.GetAllCategory);


module.exports  = router