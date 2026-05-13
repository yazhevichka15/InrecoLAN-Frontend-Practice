import { client } from '@shared/api'

export async function getOrderStatus(id: number) {
  return client.get(`/Order/Status/${id}`)
}
