const express = require("express");
const connectDb = require("./config/connectDb");
const ProductRoute = require("./Routs/products");
const app = express()
require('dotenv').config()





app.use(express.json())
app.use('/api/products', ProductRoute)
connectDb()
app.listen(process.env.port, ()=> console.log(`Port is running on port ${process.env.port}`))