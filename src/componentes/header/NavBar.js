import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function NavBar({ toggle, setToggle }) {
  return (
    <nav className="navbar" style={{ left: toggle ? "0" : "-300px" }}>
      <ul className="nav-links">
        <Link to="/" className="nav-link" onClick={() => setToggle(false)}>
          Home
        </Link>
        <Link
          to="/author"
          className="nav-link"
          onClick={() => setToggle(false)}
        >
          Author
        </Link>
        <Link to="/about" className="nav-link" onClick={() => setToggle(false)}>
          About
        </Link>
        <Link
          to="/contact"
          className="nav-link"
          onClick={() => setToggle(false)}
        >
          Contact
        </Link>
        <Link
          to="register"
          className="nav-link"
          onClick={() => setToggle(false)}
        >
          Register
        </Link>
      </ul>
    </nav>
  );
}

export default NavBar;
