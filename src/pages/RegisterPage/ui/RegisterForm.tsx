import { Button } from '@shared/ui/Button'
import { Link } from 'react-router-dom'

export const RegisterForm = () => {
  return (
    <form className='flex flex-col gap-50px text-[20px]'>
      <div className='grid grid-cols-2 gap-base'>
        <fieldset className='flex flex-col gap-30px border-0'>
          <legend className='mb-30px'>
            <h2>Контактные данные</h2>
          </legend>
          <input
            type='text'
            name='firstName'
            placeholder='Имя'
            className='outline-0'
            aria-required='true'
          />
          <input
            type='text'
            name='secondName'
            placeholder='Фамилия'
            className='outline-0'
            aria-required='true'
          />
          <input
            type='email'
            name='email'
            placeholder='Email'
            className='outline-0'
            aria-required='true'
          />
          <input type='tel' name='phone' placeholder='Телефон' className='outline-0' />
        </fieldset>

        <fieldset className='flex flex-col gap-30px border-0'>
          <legend className='mb-30px'>
            <h2>Пароль</h2>
          </legend>
          <input
            type='password'
            name='password'
            placeholder='Пароль'
            className='outline-0'
            aria-required='true'
          />
          <input
            type='password'
            name='confirmPassword'
            placeholder='Подтвердите пароль'
            className='outline-0'
            aria-required='true'
          />
        </fieldset>
      </div>

      <fieldset>
        <legend className='mb-30px'>
          <h2>Рассылка</h2>
        </legend>

        <div className='flex gap-base'>
          <p>Получать новости на Email</p>
          <label>
            <input type='radio' name='newsletter' value='yes' /> Да
          </label>
          <label>
            <input type='radio' name='newsletter' value='no' defaultChecked /> Нет
          </label>
        </div>
      </fieldset>

      <Button type='submit' title='Зарегистрироваться' theme='dark' className='h-80px'></Button>

      <label className='-m-30px flex gap-20px self-center text-[14px] '>
        <input type='checkbox' name='securityAgreement' />
        <span>
          Я прочитал и согласен с условиями{' '}
          <Link to='/test-security' className='text-light-brown'>
            Политики безопасности на сайте «Империя люстр»
          </Link>
        </span>
      </label>
    </form>
  )
}
