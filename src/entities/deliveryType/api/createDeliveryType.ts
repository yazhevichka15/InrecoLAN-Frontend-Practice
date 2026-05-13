import { client } from '@shared/api'

export interface ICreateDeliveryTypeData {
  title: string
}

export async function createDeliveryType(data: ICreateDeliveryTypeData) {
  return client.post('/Order/DeliveryType', data)
}
