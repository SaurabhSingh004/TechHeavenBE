const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: Array,
        required: true
    },
    categories: {
        type: Array,
    },
    size: {
        type: String
    },
    color: {
        type: String
    },
    price: {
        type: Number,
        required: true
    },
    rating:{
        type:Number,
        default:3,
        required:false
    }
},
    { timestamps: true }
);

module.exports = mongoose.model('Product', ProductSchema);