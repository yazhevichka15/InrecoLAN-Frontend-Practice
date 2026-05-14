import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

import { SubHeader } from '@widgets/SubHeader'

import { OrdersItemsSection } from './OrdersItemsSection'
import { CreateOrderForm } from './CreateOrderForm'

import { selectSelectedCartItems } from '@features/cart'

export const CreateOrderPage = () => {
  const orderProducts = useSelector(selectSelectedCartItems)

  const orderIsEmpty = orderProducts.length === 0

  if (orderIsEmpty) {
    return <Navigate to='/cart' replace />
  }

  return (
    <>
      <SubHeader
        mainTitle='Оформить заказ'
        subTitle=''
        description='Поможем подобрать люстру под ваш интерьер, чтобы в доме было светло, уютно и комфортно каждый день.'
      />

      <div className='p-(--basic-container) flex flex-col gap-50px'>
        <OrdersItemsSection />
        <CreateOrderForm />
      </div>
    </>
  )
}
