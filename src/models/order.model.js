const mongoose = require('mongoose');
const { toJSON } = require('./plugins');

const orderSchema = mongoose.Schema({
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
    },
    order : [
        {
            product : {
                type : mongoose.Schema.Types.ObjectId,
                ref : "Product"
            },
            quantity : {
                type : Number
            }
        }
    ],
    orderTotal :{
        type : Number
    }
})

orderSchema.plugin(toJSON);

const Order = mongoose.model('Order' , orderSchema);

module.exports = Order;