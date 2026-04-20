import { AccountMenuSection } from './AccountMenuSection'
import { AccountMenuData } from '../model/AccountMenuData'
import type { EUserRole } from '@entities/EUserRole'
import type { IAccountMenuSection } from '../model/IAccountMenuSection'
import { Button } from '@shared/ui/Button'

interface IAccountMenuProps {
  role: EUserRole
}

export const AccountMenu = ({ role }: IAccountMenuProps) => {
  const accountSections = getMenuByRole(role)

  return (
    <div className='w-300px py-50px pr-40px flex flex-col gap-50px border-r border-r-light-brown'>
      {accountSections.map((section) => (
        <AccountMenuSection key={section.title} section={section} />
      ))}

      <Button
        title='Выйти из аккаунта'
        type='button'
        // onClick={logout}
        theme='light'
        className='mt-auto w-full h-40px'
      />
    </div>
  )
}

function getMenuByRole(role: EUserRole) {
  return AccountMenuData.reduce<IAccountMenuSection[]>((acc, section) => {
    const items = section.items.filter((item) => item.roles.includes(role))

    if (items.length) {
      acc.push({ ...section, items })
    }

    return acc
  }, [])
}
