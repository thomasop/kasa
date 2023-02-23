import React from "react";
import { NavLink } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <>
      <header className="header">
        <div className="header__figure">
          <p className="header__img"></p>
        </div>
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
