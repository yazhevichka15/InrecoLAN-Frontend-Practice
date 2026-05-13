import { client } from '@shared/api'

export async function getDeliveryType(id: number) {
  return client.get(`/Order/DeliveryType/${id}`)
}
