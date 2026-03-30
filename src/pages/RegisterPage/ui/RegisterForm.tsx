import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

import { Button } from '@shared/ui/Button'

interface IRegisterFormValues {
  firstName: string
  secondName: string
  email: string
  phone: string
  password: string
  confirmPassword: string
  newsLetter: 'yes' | 'no'
  securityAgreement: boolean
}

export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    reset,
  } = useForm<IRegisterFormValues>({
    mode: 'onSubmit',
    defaultValues: {
      newsLetter: 'no',
      securityAgreement: false,
    },
  })

  const onSubmit = (data: IRegisterFormValues) => {
    console.log(data)
    reset()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-50px text-[20px]'>
      <div className='grid grid-cols-2 gap-base'>
        <fieldset className='flex flex-col gap-30px border-0'>
          <legend className='mb-30px'>
            <h2>Контактные данные</h2>
          </legend>

          <div className='flex flex-col gap-15px'>
            <input
              type='text'
              placeholder='Имя'
              className='outline-0'
              {...register('firstName', {
                required: 'Введите имя',
                maxLength: {
                  value: 150,
                  message: 'Имя не должно превышать 150 символов',
                },
              })}
            />
            {errors.firstName && <p className='text-red'>{errors.firstName.message}</p>}
          </div>

          <div className='flex flex-col gap-15px'>
            <input
              type='text'
              placeholder='Фамилия'
              className='outline-0'
              {...register('secondName', {
                required: 'Введите фамилию',
                maxLength: {
                  value: 150,
                  message: 'Фамилия не должна превышать 150 символов',
                },
              })}
            />
            {errors.secondName && <p className='text-red'>{errors.secondName.message}</p>}
          </div>

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
              type='tel'
              placeholder='Телефон'
              className='outline-0'
              {...register('phone', {
                minLength: {
                  value: 11,
                  message: 'Номер телефона должен содержать не менее 11 символов',
                },
                maxLength: {
                  value: 16,
                  message: 'Номер телефона не должен превышать 16 символов',
                },
              })}
            />
            {errors.phone && <p className='text-red'>{errors.phone.message}</p>}
          </div>
        </fieldset>

        <fieldset className='flex flex-col gap-30px border-0'>
          <legend className='mb-30px'>
            <h2>Пароль</h2>
          </legend>

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

          <input
            type='password'
            placeholder='Подтвердите пароль'
            className='outline-0'
            {...register('confirmPassword', {
              required: 'Повторите пароль',
              validate: (value) => value === getValues('password') || 'Пароли не совпадают',
            })}
          />
          {errors.confirmPassword && <p className='text-red'>{errors.confirmPassword.message}</p>}
        </fieldset>
      </div>

      <fieldset>
        <legend className='mb-30px'>
          <h2>Рассылка</h2>
        </legend>

        <div className='flex gap-base'>
          <span>Получать новости на Email</span>
          <label>
            <input type='radio' value='yes' {...register('newsLetter')} /> Да
          </label>
          <label>
            <input type='radio' value='no' {...register('newsLetter')} /> Нет
          </label>
        </div>
      </fieldset>

      <Button type='submit' title='Зарегистрироваться' theme='dark' className='h-80px'></Button>

      <label className='-m-30px flex gap-20px self-center text-[14px] '>
        <input
          type='checkbox'
          {...register('securityAgreement', {
            required: 'Поле обязательно для выбора',
          })}
        />

        <span>
          Я прочитал и согласен с условиями{' '}
          <Link to='/test-security' className='text-light-brown'>
            Политики безопасности на сайте «Империя люстр»
          </Link>
        </span>
      </label>

      {errors.securityAgreement && (
        <p className='text-red text-[14px] self-center'>{errors.securityAgreement.message}</p>
      )}
    </form>
  )
}
