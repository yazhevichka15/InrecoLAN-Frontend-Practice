import { OrderItem } from './OrderItem'
import { getCartProducts } from '../api/getCartProducts'

export const OrdersItemsSection = () => {
  const orderProducts = getCartProducts()

  return (
    <div className='flex flex-col gap-base'>
      {orderProducts.map((product) => (
        <OrderItem key={product.id} {...product} />
      ))}
    </div>
  )
}
