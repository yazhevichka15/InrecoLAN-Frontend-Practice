import { SearchBar } from '../../shared/components/SearchBar'
import { ShoppingCart, User, Heart } from 'lucide-react'
import { HeaderMenu } from '../../shared/components/HeaderMenu'
import { HeaderRightMenuItem } from '../../shared/components/HeaderRightMenuItem'
import { Badge } from '../../shared/components/Badge'
import { useState } from 'react'
import { cn } from '../../shared/utils/cn'

const menuItems = ['Главная', 'Каталог', 'Контакты']

export function Header() {
  const [isAuth, setIsAuth] = useState(false)
  const toggleAuth = () => {
    setIsAuth(!isAuth)
  }
  return (
    <header className='m-[var(--basic-container-x)]'>
      <div className='grid grid-cols-12 gap-[var(--gap-base)] my-[var(--spacing-20px)]'>
        <HeaderMenu items={menuItems} />

        <div className='col-span-5 grid grid-cols-subgrid gap-[var(--gap-base)]'>
          <div className='col-span-2 col-start-3 flex items-center'>
            <h3 className='tracking-[0.25em] uppercase'>Империя люстр</h3>
          </div>
        </div>
        <ul
          className={cn(
            'col-span-4 flex items-center',
            isAuth ? 'justify-between' : 'justify-end gap-[var(--gap-base)]'
          )}
        >
          <li>
            <SearchBar />
          </li>
          {isAuth && (
            <>
              <li className='relative'>
                <HeaderRightMenuItem Icon={Heart} title='Избранное' />
                <Badge count={0} />
              </li>
              <li className='relative'>
                <HeaderRightMenuItem Icon={ShoppingCart} title='Корзина' />
                <Badge count={0} />
              </li>
            </>
          )}
          <li>
            <HeaderRightMenuItem
              Icon={User}
              title={isAuth ? 'Михалыч' : 'Войти'}
              func={toggleAuth}
            />
          </li>
        </ul>
      </div>
      <hr className='mb-[var(--spacing-50px)]' />
    </header>
  )
}
