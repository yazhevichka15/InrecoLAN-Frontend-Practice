import { client } from '@shared/api'

export async function deleteProductFromOrder(orderId: string, productId: string) {
  return client.delete(`/Order/${orderId}/Product/${productId}`)
}
