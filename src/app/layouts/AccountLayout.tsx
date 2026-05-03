import { Outlet } from 'react-router-dom'

import { SubHeader } from '@widgets/SubHeader'
import { AccountMenu } from '@widgets/AccountMenu'
import { selectAuthUser } from '@features/auth'
import type { EUserRole } from '@entities/user'
import { useAppSelector } from '@shared/lib/hooks/useAppSelector'

const getRoleName = (role?: EUserRole) => {
  switch (role) {
    case 1:
      return 'Клиент'
    case 2:
      return 'Сотрудник'
    case 3:
      return 'Администратор'
    default:
      return 'Пользователь'
  }
}

export const AccountLayout = () => {
  const user = useAppSelector(selectAuthUser)
  const role = user?.userRole

  return (
    <>
      <SubHeader
        mainTitle={user?.email || 'Пользователь'}
        subTitle={getRoleName(user?.userRole)}
        description='Поможем подобрать люстру под ваш интерьер, чтобы в доме было светло, уютно и комфортно каждый день.'
      />

      <div className='p-(--basic-container-x) flex-1 flex'>
        <AccountMenu role={role ?? 1} />
        <Outlet />
      </div>
    </>
  )
}
