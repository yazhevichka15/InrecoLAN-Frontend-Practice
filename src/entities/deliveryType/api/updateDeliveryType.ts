import { client } from '@shared/api'

export interface IUpdateDeliveryTypeData {
  title: string
}

export async function updateDeliveryType(id: number, data: IUpdateDeliveryTypeData) {
  return client.put(`/Order/DeliveryType/${id}`, data)
}
