import SearchBar from '../../shared/components/SearchBar/SearchBar'
import { ShoppingCart, User, Heart } from 'lucide-react'
import HeaderMenu from '../../shared/components/HeaderMenu/HeaderMenu'
import HeaderRightMenuItem from '../../shared/components/HeaderRightMenuItem/HeaderRightMenuItem'
import Badge from '../../shared/components/Badge/Badge'
import { useState } from 'react'
import { cn } from '../../shared/utils/cn'

const menuItems = ['Главная', 'Каталог', 'Контакты']

function Header() {
  const [isAuth, setIsAuth] = useState(false)
  const toggleAuth = () => {
    setIsAuth(!isAuth)
  }
  return (
    <header className='grid grid-cols-12 gap-[40px] mx-4 my-2'>
      <HeaderMenu items={menuItems} />

      <div className='col-span-5 grid grid-cols-subgrid gap-[40px]'>
        <div className='col-span-2 col-start-3 text-[400] text-[20px] tracking-[0.25em] uppercase text-[#2b0c1a] flex items-center'>
          Империя люстр
        </div>
      </div>
      <ul
        className={cn(
          'col-span-4 flex items-center',
          isAuth ? 'justify-between' : 'justify-end gap-[40px]'
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
          <HeaderRightMenuItem Icon={User} title={isAuth ? 'Михалыч' : 'Войти'} func={toggleAuth} />
        </li>
      </ul>
    </header>
  )
}
export default Header
