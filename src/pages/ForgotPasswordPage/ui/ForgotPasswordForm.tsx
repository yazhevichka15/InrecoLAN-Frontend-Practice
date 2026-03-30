import { useForm } from 'react-hook-form'
import { Button } from '@shared/ui/Button'

interface IForgotPasswordFormValues {
  email: string
}

export const ForgotPasswordForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IForgotPasswordFormValues>({
    mode: 'onSubmit',
  })

  const onSubmit = (data: IForgotPasswordFormValues) => {
    console.log(data)
    reset()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='w-full flex flex-col gap-30px text-[20px]'>
      <div className='flex flex-col gap-15px'>
        <input
          type='email'
          placeholder='Почта'
          className='outline-0'
          {...register('email', {
            required: 'Введите почту',
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: 'Введите корректный email',
            },
            maxLength: {
              value: 100,
              message: 'Email не должен превышать 100 символов',
            },
          })}
        />
        {errors.email && <p className='text-red'>{errors.email.message}</p>}
      </div>

      <Button type='submit' title='Отправить' theme='dark' className='h-80px' />
    </form>
  )
}
