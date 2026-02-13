import styles from './SearchBar.module.css'
import { Search } from 'lucide-react'

function SearchBar() {
  return (
    <div className={styles.SearchBarContainer}>
      <Search size={16} color='#2B0C1A' strokeWidth={1} />
      <input type='text' placeholder='Поиск' />
    </div>
  )
}
export default SearchBar
