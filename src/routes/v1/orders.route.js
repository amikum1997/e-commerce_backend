const express = require('express');
const auth = require('../../middlewares/auth');
const fileUpload = require('../../utils/FileUpload');
const router = express.Router();
const categoryController = require('../../controllers/category.controller');


module.exports  = router