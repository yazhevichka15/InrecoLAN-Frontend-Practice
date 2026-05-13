import { client } from '@shared/api'

export async function deleteOrder(id: string) {
  return client.delete(`/Order/${id}`)
}
