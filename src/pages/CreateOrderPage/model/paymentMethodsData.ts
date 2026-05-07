import type { IPaymentMethod } from './IPaymentMethod'

export const paymentMethods: IPaymentMethod[] = [
  {
    title: 'При получении',
    value: 'onDelivery',
  },
  {
    title: 'Банковская карта',
    value: 'card',
  },
  {
    title: 'СПБ',
    value: 'spb',
  },
  {
    title: 'ЯндексПэй',
    value: 'yandexPay',
  },
  {
    title: 'СберПэй',
    value: 'sberPay',
  },
]
