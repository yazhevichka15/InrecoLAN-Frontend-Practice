import { createContext, useContext, useState, type ReactNode } from 'react'

import { clearCart as clearCartApi } from '../api/clearCart'
import { deleteProductFromCart as deleteProductFromCartApi } from '../api/deleteProductFromCart'

interface ICartProduct {
  id: string
  imgSrc: string
  name: string
  price: number
  quantity: number
}

interface IShoppingCartContextType {
  cartProducts: ICartProduct[]
  selectedProducts: string[]
  cartIsEmpty: boolean
  allProductsSelected: boolean

  toggleSelectProduct: (id: string) => void
  toggleSelectAllProducts: () => void
  deleteProductFromCart: (id: string) => void
  clearCart: () => void
}

interface IShoppingCartProviderProps {
  cartProducts: ICartProduct[]
  children: ReactNode
}

const ShoppingCartContext = createContext<IShoppingCartContextType>({} as IShoppingCartContextType)

export function useShoppingCart() {
  return useContext(ShoppingCartContext)
}

// Тут тоже использовать FC при типизации?
export const ShoppingCartProvider = ({ cartProducts, children }: IShoppingCartProviderProps) => {
  const cartIsEmpty = cartProducts.length === 0

  const [selectedProducts, setSelectedProducts] = useState<string[]>(
    cartProducts.map((product) => product.id)
  )

  const allProductsSelected = selectedProducts.length === cartProducts.length

  function toggleSelectProduct(id: string) {
    setSelectedProducts((prev) =>
      prev.includes(id) ? prev.filter((product) => product !== id) : [...prev, id]
    )
  }

  function toggleSelectAllProducts() {
    setSelectedProducts((prev) =>
      prev.length === cartProducts.length ? [] : cartProducts.map((product) => product.id)
    )
  }

  function deleteProductFromCart(id: string) {
    deleteProductFromCartApi(id)
  }

  function clearCart() {
    clearCartApi()
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        cartProducts,
        selectedProducts,
        cartIsEmpty,
        allProductsSelected,
        toggleSelectProduct,
        toggleSelectAllProducts,
        deleteProductFromCart,
        clearCart,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  )
}
