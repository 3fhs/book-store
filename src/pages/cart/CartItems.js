import React from "react";

function CartItems({ item, addToCart, removeFromCart }) {
  const { image, title, quantity, author, id } = item;

  return (
    <div key={id} className="cart-item">
      <img src={`/books/${image}`} alt={title} className="cart-item-img" />
      <div className="cart-item-info">
        <div>
          <div className="cart-item-book-title">
            <b>Title: </b>
            {title}
          </div>
          <div className="cart-item-author">
            <b>Author: </b>
            {author}
          </div>
        </div>
        <div>
          <div className="cart-item-quantity">
            <button
              disabled={quantity >= 100}
              className="bi bi-plus-lg"
              onClick={() =>
                addToCart({ ...item, quantity: item.quantity + 1 })
              }
            ></button>
            <b>{quantity}</b>
            <button
              disabled={quantity <= 1}
              className="bi bi-dash-lg"
              onClick={() =>
                addToCart({ ...item, quantity: item.quantity - 1 })
              }
            ></button>
          </div>
          <div className="cart-item-price"></div>
          <i
            className="bi bi-trash-fill"
            onClick={() => removeFromCart(id)}
          ></i>
        </div>
      </div>
    </div>
  );
}

export default CartItems;
