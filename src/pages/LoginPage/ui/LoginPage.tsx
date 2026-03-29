import { SubHeader } from '@widgets/SubHeader'
import { LoginForm } from './LoginForm'

export const LoginPage = () => {
  return (
    <>
      <SubHeader
        mainTitle='Войти'
        subTitle='В аккаунт'
        description='Поможем подобрать люстру под ваш интерьер, чтобы в доме было светло, уютно и комфортно каждый день.'
      />
      <div className='w-full h-full p-(--basic-container) grid grid-cols-2 gap-base items-center'>
        <img src='/img/auth/test-image.png' alt='Test auth image' />
        <LoginForm />
      </div>
    </>
  )
}
