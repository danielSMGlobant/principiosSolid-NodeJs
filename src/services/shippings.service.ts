import { Product } from '../models/product.model'
import { ShippingInfo } from '../models/shippingInfo.model'
export const sendProduct = (productData: Product, quantityData: number, userData: string): ShippingInfo => {
  const shippingData: ShippingInfo = {
    userId: userData,
    productId: productData.id,
    productName: productData.name,
    quantity: quantityData
  }
  return shippingData
}
