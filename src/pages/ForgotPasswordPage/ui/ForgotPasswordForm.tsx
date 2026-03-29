import { Button } from '@shared/ui/Button'
import { Link } from 'react-router-dom'

export const ForgotPasswordForm = () => {
  return (
    <div className='flex flex-col gap-30px items-center'>
      <h2>Забыли пароль?</h2>
      <p className='w-135 text-center text-pretty'>
        Укажите свой email, под которым вы зарегистрированы на сайте, на него будет отправлена
        информация о восстановлении пароля.
      </p>

      <form className='w-full flex flex-col gap-30px text-[20px]'>
        <input type='text' placeholder='Почта' className='outline-0' />
        <Button type='submit' title='Отправить' theme='dark' className='h-80px' />
      </form>

      <p>
        Нет аккаунта? —{' '}
        <Link to='/auth/register' className='text-light-brown'>
          Зарегистрируйтесь
        </Link>
      </p>
    </div>
  )
}
