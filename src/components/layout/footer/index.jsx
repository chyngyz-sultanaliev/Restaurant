import React from "react";
import { BsInstagram, BsTelegram } from "react-icons/bs";
import { RiInstagramFill, RiTelegram2Fill } from "react-icons/ri";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="container">
        <div className="footer">
          <div className="footer--top">
            <div className="footer--top__logo">
              <NavLink to={"/"}>Restaurant</NavLink>
            </div>
            <nav className="footer--top__nav">
              <NavLink to={"/interior"}>Interior</NavLink>
              <NavLink to={"/about"}>About</NavLink>
              <NavLink to={"/menu"}>Menu</NavLink>
              <NavLink to={"/contacts"}>Contacts</NavLink>
            </nav>
            <div className="footer--top__icons">
              <a href="#">
                <RiTelegram2Fill />
              </a>
              <a href="#">
                <RiInstagramFill />
              </a>
            </div>
          </div>
          <hr />
          <div className="footer--bottom">
            <h4>c 2023 Motion Study LLC</h4>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
