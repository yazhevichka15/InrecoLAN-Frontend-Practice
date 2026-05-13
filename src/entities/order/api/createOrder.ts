import { client } from '@shared/api'

export interface ICreateOrderData {
  userId: string
  statusId: number
  deliveryTypeId: number
}

export async function createOrder(data: ICreateOrderData) {
  return client.post('/Order', data)
}
