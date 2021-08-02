const mongoose = require('mongoose');
const { toJSON } = require('./plugins');
const { tokenTypes } = require('../config/tokens');

const cartSchema = mongoose.Schema({
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
    },
    products : [
        {
            product : {
                type : mongoose.Schema.Types.ObjectId,
                ref : "Product"
            },
            quantity : {
                type : Number
            }
        }
    ]
})

cartSchema.plugin(toJSON);

const Cart = mongoose.model('Cart' , cartSchema);

module.exports = Cart;