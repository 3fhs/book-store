import { useState } from "react";
import StoreContext from "./StoreContext";

const ContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  //add to cart
  const addToCart = (item) => {
    const cartFind = cartItems.find((cart) => cart.id === item.id);

    if (cartFind) {
      setCartItems(
        cartItems.map((cartItem) => (cartItem.id === item.id ? item : cartItem))
      );
    } else {
      setCartItems((prev) => [...prev, item]);
    }
  };

  //remove cart
  const removeFromCart = (id) => {
    const cart = cartItems.filter((remove) => remove.id !== id);
    setCartItems(cart);
  };

  return (
    <StoreContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        cartLength: cartItems.length,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export default ContextProvider;
