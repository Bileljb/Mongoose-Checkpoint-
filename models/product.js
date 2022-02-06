const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
    name: String,
    brand: String,
    rate: Number,
    price: Number,

})
module.exports= mongoose.model('Product', ProductSchema)