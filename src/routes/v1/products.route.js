const express = require('express');
const auth = require('../../middlewares/auth');
const productController = require('../../controllers/product.controller')
const fileUpload = require('../../utils/FileUpload');
const router = express.Router();


router.post('/createNewProduct' , fileUpload.productImage.fields([{name : 'productImages' , maxCount : 5},{name : 'ProductMainImage', maxCount : 1}]),productController.AddNewProduct)
router.get('/getAllProducts' , productController.GetAllProducts)
router.post('/getProductsByCategory', productController.GetProductByCategory)

module.exports  = router