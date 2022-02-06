const express = require("express");
const { AddProducts, GetProducts, DeleteProducts, UpdateProducts, GetOneProduct } = require("../controllers/product");
const ProductRoute = express.Router()

ProductRoute.post('/addProduct',AddProducts)

ProductRoute.get('/',GetProducts)

ProductRoute.delete("/:id", DeleteProducts)

ProductRoute.put("/:id", UpdateProducts)

ProductRoute.get("/:id",GetOneProduct)

module.exports= ProductRoute

