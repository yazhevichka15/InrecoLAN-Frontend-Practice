import { client } from '@shared/api'

export interface IAddProductToOrderData {
  orderId: string
  productId: string
  quantity: number
}

export async function addProductToOrder(data: IAddProductToOrderData) {
  return client.post('/Order/Product', data)
}
