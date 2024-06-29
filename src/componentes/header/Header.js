import React, { useState } from "react";
import "./Header.css";
import HeaderTop from "./HeaderTop";
import HeaderMiddle from "./HeaderMiddle";
import NavBar from "./NavBar";

function Header() {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="header">
      <HeaderTop toggle={toggle} setToggle={setToggle} />
      <HeaderMiddle />
      <NavBar toggle={toggle} setToggle={setToggle} />
    </div>
  );
}

export default Header;
