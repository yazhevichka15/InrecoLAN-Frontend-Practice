import { useSelector } from 'react-redux'

import { selectIsAllSelected, selectAllProducts, clearSelection } from '@features/cart'
import { Button } from '@shared/ui/Button'
import { useAppDispatch } from '@shared/lib/hooks/useAppDispatch'

export const ShoppingCartButtonsSection = () => {
  const dispatch = useAppDispatch()

  const allSelected = useSelector(selectIsAllSelected)

  const handleToggleAll = () => {
    if (allSelected) {
      dispatch(clearSelection())
    } else {
      dispatch(selectAllProducts())
    }
  }

  return (
    <div className='flex gap-base'>
      <Button
        type='button'
        title={allSelected ? 'Очистить выбор' : 'Выбрать все'}
        theme='dark'
        className='w-400px h-40px'
        onClick={handleToggleAll}
      />

      <Button
        type='button'
        title='Очистить корзину'
        theme='light'
        className='w-400px h-40px'
        onClick={() => {
          dispatch({ type: 'cart/clearCart' })
          dispatch(clearSelection())
        }}
      />
    </div>
  )
}
