const ProductSchema = require('../models/product')

exports.AddProducts =  async (req,res)=>{

    const {name, brand, rate, price}= req.body
    try {
        const product = new ProductSchema(req.body)
        await product.save()
        res.status(200).send({msg: 'new product is added', product})
    } catch (error) {
        res.status(500).send({msg: 'could not add product', error})
    }
}

exports.GetProducts = async (req, res)=>{
    try {
       const Products = await ProductSchema.find()
       res.status(200).send({msg:'Those are your products', Products})
    } catch (error) {
        
    }
}

exports.DeleteProducts = async(req, res)=>{
    try {
        const del = await ProductSchema.findByIdAndDelete(req.params.id)
        res.status(200).send({msg:"Product deleted", del})
    } catch (error) {
        res.status(200).send({msg:"Cannot delete the product", error})
    }
}

exports.UpdateProducts = async(req, res)=>{
    try {
        const upd = await ProductSchema.findByIdAndUpdate(req.params.id, {$set: req.body})
        
        res.status(200).send({msg: "product updated", upd})
    } catch (error) {
        res.status(500).send({msg: "could not update product", error})
    }
}

exports.GetOneProduct = async (req, res)=>{
    try {
        // const FoundProduct= ProductSchema.findOne({_id}) or :
        const FoundProduct= await ProductSchema.findById(req.params.id)
        res.status(200).send({msg: "your product",FoundProduct })
    } catch (error) {
        res.status(500).send({msg: "Could not find a product", error})
    }
}