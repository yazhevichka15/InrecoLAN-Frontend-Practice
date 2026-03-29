import { Link } from 'react-router-dom'
import { ForgotPasswordForm } from './ForgotPasswordForm'

export const ForgotPasswordFormSection = () => {
  return (
    <div className='flex flex-col gap-30px items-center'>
      <h2>Забыли пароль?</h2>
      <p className='w-135 text-center text-pretty'>
        Укажите свой email, под которым вы зарегистрированы на сайте, на него будет отправлена
        информация о восстановлении пароля.
      </p>

      <ForgotPasswordForm />

      <p>
        Нет аккаунта? —{' '}
        <Link to='/auth/register' className='text-light-brown'>
          Зарегистрируйтесь
        </Link>
      </p>
    </div>
  )
}
