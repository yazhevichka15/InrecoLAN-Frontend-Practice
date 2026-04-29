import { useNavigate } from 'react-router-dom'
import { ArrowButton } from '@shared/ui/ArrowButton'

export const EmptyShoppingCartSection = () => {
  const navigate = useNavigate()

  return (
    <div className='p-(--basic-container-x) flex-1 flex flex-col justify-center items-center gap-base'>
      <h2>В корзине пока пусто</h2>
      <div className='w-280px'>
        <ArrowButton
          title='В каталог'
          theme='lightbrown-big'
          onClick={() => navigate('/catalog')}
        />
      </div>
    </div>
  )
}
