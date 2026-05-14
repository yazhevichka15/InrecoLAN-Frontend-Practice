import { useForm, FormProvider } from 'react-hook-form'
import { useNavigate } from 'react-router'
import { useSelector } from 'react-redux'

import { paymentMethods } from '../model/paymentMethodsData'

import { PaymentMethodItem } from './PaymentMethodItem'
import { OrderSecurityAgreement } from './OrderSecurityAgreement'

import { Button } from '@shared/ui/Button'
import { Input } from '@shared/ui/Input'

import { deliveryAddress, requredFieldValidation } from '@shared/lib/utils/inputValidations'

import { selectSelectedCartItems } from '@features/cart'

interface ICreateOrderFormValues {
  paymentMethod: string
  hasDelivery: 'yes' | 'no'
  deliveryMethod: string
  deliveryAddress: string
  securityAgreement: boolean
}

export const CreateOrderForm = () => {
  const navigate = useNavigate()

  const orderProducts = useSelector(selectSelectedCartItems)

  const totalPrice = orderProducts.reduce((sum, product) => {
    return sum + product.price * product.quantity
  }, 0)

  const methods = useForm<ICreateOrderFormValues>({
    mode: 'onSubmit',
    defaultValues: {
      hasDelivery: 'no',
      paymentMethod: 'onDelivery',
      securityAgreement: true,
    },
  })

  const onSubmit = (data: ICreateOrderFormValues) => {
    console.log({
      formData: data,
      products: orderProducts,
      totalPrice,
    })

    methods.reset()

    navigate('/account')
  }

  const hasDelivery = methods.watch('hasDelivery')

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className='flex flex-col gap-50px text-[20px]'
      >
        <fieldset className='flex flex-col gap-30px'>
          <legend className='mb-30px'>
            <h2>Способ оплаты</h2>
          </legend>

          <div className='flex gap-base'>
            {paymentMethods.map((method) => (
              <PaymentMethodItem key={method.value} title={method.title} value={method.value} />
            ))}
          </div>
        </fieldset>

        <fieldset className='flex flex-col gap-30px'>
          <h2>Доставка</h2>

          <div className='flex gap-base'>
            <span>Получить в магазине</span>

            <label className='flex items-center gap-5px'>
              <input type='radio' {...methods.register('hasDelivery')} value='no' />
              Да
            </label>

            <label className='flex items-center gap-5px'>
              <input type='radio' {...methods.register('hasDelivery')} value='yes' />
              Нет
            </label>
          </div>
        </fieldset>

        {hasDelivery === 'yes' && (
          <>
            <fieldset className='flex flex-col gap-30px'>
              <legend className='mb-30px'>
                <h2>Способ доставки</h2>
              </legend>

              <select
                {...methods.register('deliveryMethod')}
                className='px-50px py-10px w-full text-light-brown outline-0 border border-light-brown rounded-xs'
              >
                <option value='courier'>Курьер</option>

                <option value='post'>Почта России</option>

                <option value='sdek'>СДЭК</option>
              </select>
            </fieldset>

            <fieldset className='flex flex-col gap-30px'>
              <legend className='mb-30px'>
                <h2>Адрес доставки</h2>
              </legend>

              <Input {...deliveryAddress} />
            </fieldset>
          </>
        )}

        <div className='flex flex-col gap-30px'>
          <h2>
            Итого: <span className='text-light-brown'>{totalPrice}₽</span>
          </h2>
        </div>

        <Button type='submit' title='Оформить заказ' theme='dark' className='h-80px' />

        <OrderSecurityAgreement name='securityAgreement' validation={requredFieldValidation} />
      </form>
    </FormProvider>
  )
}
