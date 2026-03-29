import { Link } from 'react-router-dom'
import { LoginForm } from './LoginForm'

export const LoginFormSection = () => {
  return (
    <div className='flex flex-col gap-30px items-center'>
      <h2>Вход в аккаунт</h2>

      <LoginForm />

      <div className='flex flex-col gap-20px items-center'>
        <span>
          Нет аккаунта? —{' '}
          <Link to='/auth/register' className='text-light-brown'>
            Зарегистрируйтесь
          </Link>
        </span>

        <Link to='/auth/forgot-password' className='text-light-brown'>
          Забыли пароль?
        </Link>
      </div>
    </div>
  )
}
