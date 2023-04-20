import { Product } from '../models/product.model'
import productData from '../data/produtsData.json'

const productsTec: Product[] = productData as Product[]

export const getProduct = (idRequest: number): Product | undefined => {
  const product = productsTec.find((d) => d.id === idRequest)
  return product
}
