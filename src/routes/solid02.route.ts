import express from 'express'
import { validatorProduct } from '../validators/products.validator'
import { buyProduct } from '../controllers/products.controller'

const router = express.Router()

router.post('/products/buy/:productId', validatorProduct, buyProduct)
export default router
