import { NextFunction, Request, Response } from 'express'
import { Product } from '../models/product.model'
import * as productService from '../services/products.service'

export const validatorProduct = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const productId: number = Number(req.params.productId)
  const product: Product | undefined = productService.getProduct(productId)

  if (typeof product === 'undefined') {
    res.status(404).send({ message: 'Producto no disponible' })
  } else {
    next()
  }
}
