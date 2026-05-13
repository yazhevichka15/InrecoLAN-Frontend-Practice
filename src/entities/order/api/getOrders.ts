import { client } from '@shared/api'

export async function getOrders() {
  return client.get('/Order')
}
