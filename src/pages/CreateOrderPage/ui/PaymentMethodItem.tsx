import { type FC } from 'react'
import { useFormContext } from 'react-hook-form'
import type { IPaymentMethod } from '../model/IPaymentMethod'

export const PaymentMethodItem: FC<IPaymentMethod> = ({ title, value }) => {
  const { register, watch } = useFormContext()
  const selectedPaymentMethod = watch('paymentMethod')

  return (
    <label className='cursor-pointer'>
      <input type='radio' value={value} {...register('paymentMethod')} className='hidden' />
      <div
        className={`
        h-120px w-280px border-2 flex flex-col items-center justify-center gap-10px transition-colors duration-200
        ${
          selectedPaymentMethod === value
            ? 'bg-light-brown border-light-brown text-white'
            : 'border-light-brown bg-white hover:border-dark-brown text-dark-brown'
        }
      `}
      >
        <span className={selectedPaymentMethod === value ? 'text-white' : 'text-dark-brown'}>
          {title}
        </span>
      </div>
    </label>
  )
}
