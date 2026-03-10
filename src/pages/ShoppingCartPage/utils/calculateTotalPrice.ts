// Надо типизировать - CartProduct
// Надо будет кэшировать результат?
export function calculateTotalPrice(products: any[]) {
  return products.reduce((total, product) => {
    return total + product.price * product.quantity
  }, 0)
}
