// Надо типизировать - CartProduct
export function calculateTotalPrice(products: any[]) {
  return products.reduce((total, product) => {
    return total + product.price * product.quantity
  }, 0)
}
