import React from "react";
import { CiSearch } from "react-icons/ci";
import { NavLink } from "react-router-dom";
import HamburgerMenu from "../hamburger/index";

const Header = () => {
  return (
    <header id="header">
      <div className="container">
        <div className="header">
          <div className="header--logo">
            <NavLink to={"/"}>Restaurant</NavLink>
          </div>
          <nav className="header--nav">
            <NavLink to={"/interior"}>Interior</NavLink>
            <NavLink to={"/about"}>About</NavLink>
            <NavLink to={"/menu"}>Menu</NavLink>
            <NavLink to={"/contacts"}>Contacts</NavLink>
            <div className="header--nav__search">
              <input type="text" placeholder="Search" />
              <h2 className="header--nav__search--icon">
                <CiSearch />
              </h2>
            </div>
            <select>
              <option value="en">EN</option>x<option value="ru">RU</option>
            </select>
          </nav>
          <HamburgerMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;
