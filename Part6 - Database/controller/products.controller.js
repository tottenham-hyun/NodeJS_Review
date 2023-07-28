const productModel = require('../model/products.model')

async function createProduct(req,res,next){
    try{
        const createdProduct = await productModel.create(req.body)
        res.status(201).json(createdProduct)
    }
    catch(err){
        next(err)
    }
}

async function getProducts(req,res,next){
    try{
        const allProducts = await productModel.find({})
        res.status(200).json(allProducts)
    }
    catch(err){
        next(err)
    }
}

async function getProductById(req,res,next){
    try{
        const product = await productModel.findById(req.params.productId)
        if(product){
            res.status(200).json(product)
        }
        else{
            res.status(404).send()
        }
    }
    catch(err){
        next(err)
    }
}

async function updateProdcut(req,res,next){
    try{
        let updatedProduct = await productModel.findByIdAndUpdate(
            req.params.productId,
            req.body,
            {new:true}
        )
        if(updatedProduct){
            res.status(200).json(updatedProduct)
        }
    }catch(err){
        res.status(404).end()
    }
}

async function deleteProduct(req,res,next){
    try{
        let deletedProduct = await productModel.findByIdAndDelete(req.params.productId)
        if(deletedProduct){
            res.status(200).json(deleteProduct)
        }else{
            res.status(404).send()
        }
    }
    catch(err){
        next(err)
    }
}

module.exports = {
    createProduct,
    getProducts,
    getProductById,
    updateProdcut,
    deleteProduct
}