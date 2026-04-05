import { AccountMenuSection } from './AccountMenuSection'
import { AccountMenuData } from '../model/AccountMenuData'
import type { TUserRole } from '../model/TUserRole'

import { Button } from '@shared/ui/Button'

interface IAccountMenuProps {
  role: TUserRole
}

export const AccountMenu = ({ role }: IAccountMenuProps) => {
  return (
    <div className='w-300px py-50px pr-40px flex flex-col gap-50px border-r border-r-light-brown'>
      {AccountMenuData.map((section) => ({
        ...section,
        items: section.items.filter((item) => item.roles.includes(role)),
      })).map((section) => (
        <AccountMenuSection key={section.title} section={section} />
      ))}

      <Button
        title='Выйти из аккаунта'
        type='button'
        // onClick={() => logout}
        theme='light'
        className='mt-auto w-full h-40px'
      />
    </div>
  )
}
