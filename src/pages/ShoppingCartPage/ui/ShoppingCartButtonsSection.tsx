import { useShoppingCart } from '../context/ShoppingCartContext'
import { Button } from '@shared/ui/Button'

export const ShoppingCartButtonsSection = () => {
  const { allProductsSelected, toggleSelectAllProducts, clearCart } = useShoppingCart()

  return (
    <div className='flex gap-base'>
      <Button
        title={allProductsSelected ? 'Очистить выбор' : 'Выбрать все'}
        theme='dark'
        className='w-400px h-40px'
        onClick={toggleSelectAllProducts}
      />

      <Button
        title='Очистить корзину'
        theme='light'
        className='w-400px h-40px'
        onClick={clearCart}
      />
    </div>
  )
}
