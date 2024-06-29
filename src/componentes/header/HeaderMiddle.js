import React, { useContext } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import StoreContext from "../../context/StoreContext";

function HeaderMiddle() {
  const { cartLength } = useContext(StoreContext);

  return (
    <div className="header-middle">
      <Link to="/" className="logo">
        <b>BOOK</b>
        <i className="bi bi-book"></i>
        <b>STORE</b>
      </Link>
      <div className="search-header">
        <input className="search" type="search" placeholder="search" />
        <i className="bi bi-search"></i>
      </div>
      <Link to="/" className="logo-menu">
        <b>BOOK</b>
        <i className="bi bi-book"></i>
        <b>STORE</b>
      </Link>
      <Link to="/cart" className="header-cart">
        {cartLength > 0 && <b className="cart-shop">{cartLength}</b>}
        <i className="bi bi-cart2"></i>
      </Link>
    </div>
  );
}

export default HeaderMiddle;
