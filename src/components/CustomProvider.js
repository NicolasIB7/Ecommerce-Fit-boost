import { createContext, useState } from "react";

export const contexto = createContext();

const { Provider } = contexto;

const CustomProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product, count) => {
    if (isInCart(product.id)) {
      const newCart = cart.map((element) => {
        if (element.product.id === product.id) {
          return { ...element, count: element.count + count };
        }
        return element;
      });
      setCart(newCart);
    } else {
      const item = { product, count };
      setCart([...cart, item]);
    }
  };

  console.log(cart);

  const clearCart = () => {
    setCart([]);
  };

  const isInCart = (id) => {
    return cart.find((element) => element.product.id === id);
  };

  const removeProduct = (productId) => {
    const newCart= cart.filter((element) => element.product.id !== productId);
    setCart(newCart)
  };

  const contextValue = {
    clearCart,
    addToCart,
    cart,
    removeProduct
  };

  return <Provider value={contextValue}>{children}</Provider>;
};

export default CustomProvider;
