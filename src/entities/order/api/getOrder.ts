import { client } from '@shared/api'

export async function getOrder(id: string) {
  return client.get(`/Order/${id}`)
}
