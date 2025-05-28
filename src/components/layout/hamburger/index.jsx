import React from "react";
import { useState } from "react";
import "./index.scss";
import Hamburger from "hamburger-react";
import { NavLink } from "react-router-dom";
import { LuSearch } from "react-icons/lu";
import { useContext } from "react";
import { Restaurat } from "../../../context";
const HamburgerMenu = () => {
  const [open, setOpen] = useState(false);
  const { language, setLanguage } = useContext(Restaurat);

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
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
            >
              <option value="en">EN</option>
              <option value="ru">RU</option>
              <option value="ky">KY</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
