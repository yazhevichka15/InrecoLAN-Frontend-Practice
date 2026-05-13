import { client } from '@shared/api'

export interface ICreateOrderStatusData {
  title: string
}

export async function createOrderStatus(data: ICreateOrderStatusData) {
  return client.post('/Order/Status', data)
}
