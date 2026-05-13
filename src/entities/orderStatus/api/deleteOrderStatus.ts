import { client } from '@shared/api'

export async function deleteOrderStatus(id: number) {
  return client.delete(`/Order/Status/${id}`)
}
