import { Link } from 'react-router-dom'

import { SubHeader } from '@widgets/SubHeader'
import { RegisterForm } from './RegisterForm'

export const RegisterPage = () => {
  return (
    <>
      <SubHeader
        mainTitle='Зарегистрироваться'
        subTitle=''
        description='Поможем подобрать люстру под ваш интерьер, чтобы в доме было светло, уютно и комфортно каждый день.'
      />
      <div className='w-full h-full p-(--basic-container) flex flex-col gap-50px'>
        <p>
          Если вы уже зарегистрированы, перейдите на{' '}
          <Link to='/auth/login' className='text-light-brown'>
            страницу входа в систему
          </Link>
        </p>

        <RegisterForm />
      </div>
    </>
  )
}
