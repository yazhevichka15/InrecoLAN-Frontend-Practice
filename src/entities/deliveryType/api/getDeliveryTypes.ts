import { client } from '@shared/api'

export async function getDeliveryTypes() {
  return client.get('/Order/DeliveryType')
}
