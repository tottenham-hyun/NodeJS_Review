const express = require('express')
const productController = require('../controller/products.controller')
const productRouter = express.Router()

productRouter.post('/',productController.createProduct)
productRouter.get('/',productController.getProducts)
productRouter.get('/:productId',productController.getProductById)
productRouter.put('/:productId',productController.updateProdcut)
productRouter.delete('/:productId',productController.deleteProduct)

module.exports = productRouter