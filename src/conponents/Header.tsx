import React from "react";
import { NavLink } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <>
      <header className="header">
        <figure className="header__figure">
          <img className="header__img" src="./LOGO.svg" alt="" />
        </figure>
        <nav className="header__nav">
          <ul className="header__ul">
            <li className="header__li">
              <NavLink className="header__a" to="/">Accueil</NavLink>
            </li>
            <li className="header__li header__li--padding">
              <NavLink className="header__a" to="/about">A Propos</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
