import { Request, Response } from 'express'
import { Product } from '../models/product.model'
import * as productService from '../services/products.service'
import * as shippingService from '../services/shippings.service'
import { ShippingInfo } from '../models/shippingInfo.model'

export const buyProduct = (req: Request, res: Response): any => {
  const productId: number = Number(req.params.productId)
  const product: Product = productService.getProduct(productId) as Product
  const quantity: number = req.body.quantity

  // Calcular el total de la compra
  const totalBuy: number = product.price * quantity

  // Envía el producto al usuario
  const shippingInfo: ShippingInfo = shippingService.sendProduct(
    product,
    quantity,
    req.body.userId
  )

  // Envía una respuesta al cliente
  res.status(200).send({
    message: 'Compra realizada con éxito',
    total: totalBuy,
    shippingInfo
  })
}
