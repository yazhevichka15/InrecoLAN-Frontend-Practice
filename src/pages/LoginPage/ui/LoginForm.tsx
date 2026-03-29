import { Button } from '@shared/ui/Button'
import { Link } from 'react-router-dom'

export const LoginForm = () => {
  return (
    <div className='flex flex-col gap-30px items-center'>
      <h1>Вход в аккаунт</h1>
      <form className='w-full flex flex-col gap-base text-[20px]'>
        <input type='text' placeholder='Почта' className='outline-0' />
        <input type='text' placeholder='Пароль' className='outline-0' />
        <Button type='submit' title='Авторизоваться' theme='dark' className='h-80px' />
      </form>

      <div className='flex flex-col gap-20px items-center'>
        <p>
          Нет аккаунта? —{' '}
          <Link to='/auth/register' className='text-light-brown'>
            Зарегистрируйтесь
          </Link>
        </p>

        <Link to='/auth/forgot-password' className='text-light-brown'>
          Забыли пароль?
        </Link>
      </div>
    </div>
  )
}
