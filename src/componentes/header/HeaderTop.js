import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function HeaderTop({ toggle, setToggle }) {
  return (
    <div className="header-top">
      <div
        className="header-top-menu"
        onClick={() => setToggle((prev) => !prev)}
      >
        {toggle ? (
          <i className="bi bi-x-lg"></i>
        ) : (
          <i className="bi bi-list"></i>
        )}
      </div>
      <div className="header-top-phone">
        <i className="bi bi-telephone-fill"></i>
        123-456-789
      </div>
      <div className="header-top-text">welcome to online book store</div>
      <Link to="/login" className="header-top-link">
        <i className="bi bi-person-fill"></i>
        login
      </Link>
    </div>
  );
}

export default HeaderTop;
