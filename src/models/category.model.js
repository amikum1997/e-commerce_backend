const mongoose = require('mongoose');
const { toJSON } = require('./plugins');
const { tokenTypes } = require('../config/tokens');

const categorySchema = mongoose.Schema({
    name : {
        type : String
    },
    Avatar : {
        type : String
    },
})

categorySchema.plugin(toJSON);

const Category = mongoose.model('Category' , categorySchema);

module.exports = Category;