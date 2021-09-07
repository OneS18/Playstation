import React, { useState, useEffect } from "react";
import logo from "../../images/logo.png";
import menu from "../../images/menu.png";
import "./header.css";
import Main from "../main/Main";
import Bottom from "../botton/Bottom";

const Header = () => {
  const [isToggle, setIsToggle] = useState(true);

  const handleMenuClick = () => {
    console.log("hide the button");
    setIsToggle(!isToggle);
  };

  return (
    <div className="container">
      <div className="navbar">
        <img src={logo} alt="logo" className="logo" />
        <nav>
          <ul className={isToggle ? "hidemenu" : "showmenu"}>
            <li>
              <a className={isToggle ? "hide" : "show"} href="">
                Game Controllers
              </a>
            </li>
            <li>
              <a className={isToggle ? "hide" : "show"} href="">
                VR Accesories
              </a>
            </li>
            <li>
              <a className={isToggle ? "hide" : "show"} href="">
                Media Remotes
              </a>
            </li>
            <li>
              <a className={isToggle ? "hide" : "show"} href="">
                Others
              </a>
            </li>
          </ul>
        </nav>
        <img
          src={menu}
          alt="menu"
          className="menu-icon"
          onClick={handleMenuClick}
        />
      </div>
      <Main />
      <Bottom />
    </div>
  );
};

export default Header;
