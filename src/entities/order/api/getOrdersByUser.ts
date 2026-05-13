import { client } from '@shared/api'

export async function getOrdersByUser(userId: string) {
  return client.get(`/Order/By-user/${userId}`)
}
