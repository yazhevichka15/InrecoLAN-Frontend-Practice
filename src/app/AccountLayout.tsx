import { Outlet } from 'react-router-dom'

import { SubHeader } from '@widgets/SubHeader'
// import { AccountMenu } from '@widgets/AccountMenu'

export const AccountLayout = () => {
  return (
    <>
      {/* Нужно подставить данные пользователя */}
      <SubHeader
        mainTitle='Имя Пользователя'
        subTitle='Роль Пользователя'
        description='Поможем подобрать люстру под ваш интерьер, чтобы в доме было светло, уютно и комфортно каждый день.'
      />

      <div className='p-(--basic-container-x) flex-1 flex'>
        {/* <AccountMenu /> - компонент бокового меню */}
        <Outlet />
      </div>
    </>
  )
}
