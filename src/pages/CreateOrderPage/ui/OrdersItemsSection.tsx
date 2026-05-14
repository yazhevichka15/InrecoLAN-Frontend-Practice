import { useSelector } from 'react-redux'

import { selectSelectedCartItems } from '@features/cart'

import { OrderItem } from './OrderItem'

export const OrdersItemsSection = () => {
  const orderProducts = useSelector(selectSelectedCartItems)

  return (
    <div className='flex flex-col gap-base'>
      {orderProducts.map((product) => (
        <OrderItem
          key={product.productId}
          imgSrc={product.imageUrl}
          name={product.title}
          price={product.price}
          quantity={product.quantity}
        />
      ))}
    </div>
  )
}
