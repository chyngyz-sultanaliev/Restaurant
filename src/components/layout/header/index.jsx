import React, { useContext } from "react";
import { CiSearch } from "react-icons/ci";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import HamburgerMenu from "../hamburger/index";
import { Restaurat } from "../../../context";
import Contacts from "../../pages/contacts";

const Header = () => {
  const { language, setLanguage } = useContext(Restaurat);
  const nav = useNavigate();
  const location = useLocation();
  console.log(location.pathname);
  
  return (
    <>
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
              {location.pathname === "/search" ? null : (
                <div className="header--nav__search">
                  <input
                    onClick={() => nav("/search")}
                    type="text"
                    placeholder="Search"
                  />
                  <h2 className="header--nav__search--icon">
                    <CiSearch />
                  </h2>
                </div>
              )}

              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
              >
                <option value="en">EN</option>
                <option value="ru">RU</option>
                <option value="ky">KY</option>
              </select>
            </nav>
            <HamburgerMenu />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
