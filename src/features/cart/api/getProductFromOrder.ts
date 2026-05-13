import { client } from '@shared/api'

export async function getProductFromOrder(orderId: string, productId: string) {
  return client.get(`/Order/${orderId}/Product/${productId}`)
}
