import { client } from '@shared/api'

export interface IUpdateOrderStatusData {
  title: string
}

export async function updateOrderStatus(id: number, data: IUpdateOrderStatusData) {
  return client.put(`/Order/Status/${id}`, data)
}
