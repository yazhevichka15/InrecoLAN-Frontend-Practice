import { client } from '@shared/api'

export async function getOrderProducts(orderId: string) {
  return client.get(`/Order/${orderId}/Product`)
}
