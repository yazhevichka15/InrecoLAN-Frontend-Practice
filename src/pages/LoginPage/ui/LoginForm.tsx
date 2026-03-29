import { useForm } from 'react-hook-form'
import { Button } from '@shared/ui/Button'

// Точно ли интерфейс?
interface ILoginFormValues {
  email: string
  password: string
}

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ILoginFormValues>({
    mode: 'onSubmit',
  })

  const onSubmit = (data: ILoginFormValues) => {
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

      <div className='flex flex-col gap-15px'>
        <input
          type='password'
          placeholder='Пароль'
          className='outline-0'
          {...register('password', {
            required: 'Введите пароль',
            minLength: {
              value: 6,
              message: 'Пароль должен содержать минимум 6 символов',
            },
            maxLength: {
              value: 100,
              message: 'Пароль не должен превышать 100 символов',
            },
          })}
        />
        {errors.password && <p className='text-red'>{errors.password.message}</p>}
      </div>

      <Button type='submit' title='Авторизоваться' theme='dark' className='h-80px' />
    </form>
  )
}
