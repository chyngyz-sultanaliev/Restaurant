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
    <>
      <Hamburger toggled={open} toggle={setOpen} />
      {open && (
        <div id="hamburger">
          <div className="hamburger">
            <div className="hamburger--nav">
              <NavLink to={"/interior"} onClick={() => setOpen(false)}>
                Interior
              </NavLink>
              <NavLink to={"/about"} onClick={() => setOpen(false)}>
                About
              </NavLink>
              <NavLink to={"/menu"} onClick={() => setOpen(false)}>
                Menu
              </NavLink>
              <NavLink to={"/contacts"} onClick={() => setOpen(false)}>
                Contacts
              </NavLink>
              <div className="languages">
                {["en", "ru", "ky"].map((lang) => (
                  <span
                    key={lang}
                    className={language === lang ? "active" : ""}
                    onClick={() => {
                      setLanguage(lang), setOpen(false);
                    }}
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HamburgerMenu;
