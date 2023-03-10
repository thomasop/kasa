import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <section>
        <p className="footer__p">
          <Link to="/">
            <img
              className="footer__img"
              src="../assets/LOGOfooter.svg"
              alt=""
            />
          </Link>
        </p>
        <p className="footer__p footer__p--font">
          © 2020 Kasa. All rights reserved
        </p>
      </section>
    </footer>
  );
};

export default Footer;
