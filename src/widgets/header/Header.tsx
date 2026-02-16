import SearchBar from './SearchBar'
import { ShoppingCart, User, Heart } from 'lucide-react'
import HeaderMenu from './HeaderMenu'
import HeaderRightMenuItem from './HeaderRightMenuItem'
import Badge from '../../shared/components/Badge'
import { useState } from 'react'

function Header() {
  const menuItems = ['Главная', 'Каталог', 'Контакты']

  const [isAuth, setIsAuth] = useState(false)
  const [buttonTitle, setButtonTitle] = useState('Войти')

  const toggleAuth = () => {
    setIsAuth(!isAuth)
    setButtonTitle(isAuth ? 'Михалыч' : 'Войти')
  }

  return (
    <header className='grid grid-cols-12 gap-[40px]'>
      <HeaderMenu items={menuItems} />

      <div className='col-span-5 grid grid-cols-subgrid gap-[40px]'>
        <div className='col-span-2 col-start-3 text-[400] text-[20px] tracking-[0.25em] uppercase text-[#2b0c1a] flex items-center'>
          Империя люстр
        </div>
      </div>
      <ul
        className={`col-span-4 flex justify-between items-center ${isAuth ? 'justify-end gap-[40px]' : ''}`}
      >
        <li>
          <SearchBar />
        </li>
        {!isAuth && (
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
          <button onClick={toggleAuth}>
            <HeaderRightMenuItem Icon={User} title={buttonTitle} />
          </button>
        </li>
      </ul>
    </header>
  )
}
export default Header
