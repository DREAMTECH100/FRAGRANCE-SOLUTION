import { createContext, useState, useContext } from "react"

export const CartContext = createContext()

export const CartProvider = ({ children }) => {

  const [cart, setCart] = useState([])

  const addToCart = (product) => {

    const existing = cart.find(item => item.id === product.id)

    if (existing) {
      setCart(
        cart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      )
    } else {
      setCart([...cart, { ...product, quantity: 1 }])
    }
  }

  const clearCart = () => {
  setCart([])
}
  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id))
  }

  const increaseQty = (id) => {
    setCart(
      cart.map(item =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    )
  }

  const decreaseQty = (id) => {
    setCart(
      cart.map(item =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    )
  }

  const getCartTotal = () => {
    return cart.reduce((total, item) => {
      return total + item.price * item.quantity
    }, 0)
  }

  return (
   <CartContext.Provider value={{
  cart,
  addToCart,
  removeFromCart,
  increaseQty,
  decreaseQty,
  getCartTotal,
  clearCart
}}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  return useContext(CartContext)
}