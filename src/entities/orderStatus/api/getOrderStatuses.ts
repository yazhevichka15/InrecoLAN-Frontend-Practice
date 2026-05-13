import { client } from '@shared/api'

export async function getOrderStatuses() {
  return client.get('/Order/Status')
}
