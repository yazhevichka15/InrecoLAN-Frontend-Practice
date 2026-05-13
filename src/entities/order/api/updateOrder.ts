import { client } from '@shared/api'

export interface IUpdateOrderData {
  statusId: number
  deliveryTypeId: number
}

export async function updateOrder(id: string, data: IUpdateOrderData) {
  return client.put(`/Order/${id}`, data)
}
