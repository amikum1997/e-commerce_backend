const mongoose = require('mongoose');
const { toJSON } = require('./plugins');
const { tokenTypes } = require('../config/tokens');

const productSchema = mongoose.Schema({
    name : {
        type : String
    },
    primaryImage : {
        type : String
    },
    multipleImage : [{type : String}],
    description : {
        type : String
    },
    longDescription : {
        type : String
    },
    price : {
        type  :String
    },
    isInSale : {
        type : Boolean
    },
    salePrice : {
        type : String,
        default : null
    },
    totalStock : {
        type  : String
    },
    totalStockLeft : {
        type : String
    },
    skuNumber : {
        type : String
    },
    category : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Category"
    }
})

productSchema.plugin(toJSON);

const Product = mongoose.model('Product' , productSchema);

module.exports = Product;