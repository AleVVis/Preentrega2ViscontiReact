import { createContext, useState, useContext } from 'react';

// Crear el contexto
export const CartContext = createContext();

// Crear un custom hook para acceder al contexto más fácilmente
export const useCartContext = () => {
  return useContext(CartContext);
};

// Crear el CartProvider que envuelve la aplicación
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  const removeFromCart = (itemId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
  };

  const clearCart = () => {
    setCart([]);
  };

  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + item.precio * item.cantidad, 0);
  };

  const cartTotalQuantity = cart.reduce((total, item) => total + item.cantidad, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        calculateTotalPrice,
        cartTotalQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};



