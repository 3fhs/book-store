import React, { useContext } from "react";
import "./cart.css";
import CartSummary from "./CartSummary";
import CartItems from "./CartItems";
import StoreContext from "../../context/StoreContext";

function Cart() {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  const totalPrice = cartItems
    .reduce((acc, cur) => acc + cur.price * cur.quantity, 0)
    .toFixed(2);

  return (
    <div className="cart">
      <h1 className="cart-title">Your Shopping Cart</h1>
      <div className="cart-wrapper">
        <div className="cart-items">
          {cartItems.map((item) => (
            <CartItems
              key={item.id}
              item={item}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
            />
          ))}
        </div>
        <CartSummary totalPrice={totalPrice} />
      </div>
    </div>
  );
}

export default Cart;
