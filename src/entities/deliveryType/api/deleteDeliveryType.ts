import { client } from '@shared/api'

export async function deleteDeliveryType(id: number) {
  return client.delete(`/Order/DeliveryType/${id}`)
}
