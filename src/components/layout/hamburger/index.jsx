import React from "react";
import { useState } from "react";
import "./index.scss";
import Hamburger from "hamburger-react";
import { NavLink } from "react-router-dom";
import { LuSearch } from "react-icons/lu";
const HamburgerMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <div id="hamburger">
      <Hamburger toggled={open} toggle={setOpen} />
      {open && (
        <div className="hamburger">
          <div className="hamburger--nav">
            <NavLink to={"/interior"}>Interior</NavLink>
            <NavLink to={"/about"}>About</NavLink>
            <NavLink to={"/menu"}>Menu</NavLink>
            <NavLink to={"/contacts"}>Contacts</NavLink>
            <div className="hamburger--nav__link">
              <span>
                <LuSearch />
              </span>
              <a href="#">Search</a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
