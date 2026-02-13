import SearchBar from '../../shared/components/SearchBar/SearchBar'
import styles from './Header.module.css'
import { ShoppingCart, User, Heart } from 'lucide-react'

function Header() {
  return (
    <header>
      <nav className={styles.ColumnFirst}>
        <ul className={styles.HeaderMenu}>
          <li className={styles.HeaderMenuItem}>Главная</li>
          <li className={styles.HeaderMenuItem}>Каталог</li>
          <li className={styles.HeaderMenuItem}>Контакты</li>
        </ul>
      </nav>
      <div className={styles.ColumnSecond}>
        <div className={styles.TitleBlock}>Империя люстр</div>
      </div>
      <nav className={styles.ColumnThird}>
        <ul className={styles.HeaderRightMenu}>
          <li>
            <SearchBar />
          </li>
          <li className={styles.HeaderRightMenuItem}>
            <Heart size={16} color='#2B0C1A' strokeWidth={1} />
            Избранное
          </li>
          <li className={styles.HeaderRightMenuItem}>
            <ShoppingCart size={16} color='#2B0C1A' strokeWidth={1} />
            Корзина
          </li>
          <li className={styles.HeaderRightMenuItem}>
            <User size={16} color='#2B0C1A' strokeWidth={1} />
            Михалыч
          </li>
        </ul>
      </nav>
    </header>
  )
}
export default Header
