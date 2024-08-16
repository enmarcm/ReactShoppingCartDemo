import { createContext } from "react";
import { useCartReducer } from "../hooks/useCartReducer";

export const CartContext = createContext();

export const initialState = [];

export default function CartProvider({ children }) {
  const { addToCart, removeFromCart, clearCart, state } = useCartReducer();

  return (
    <CartContext.Provider
      value={{
        cart: state,
        addToCart,
        clearCart,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
