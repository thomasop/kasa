import React from "react";
import { Link } from "react-router-dom";
import Footer from "../conponents/Footer";
import Header from "../conponents/Header";

const Error404: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <section className="error">
          <h1 className="error__h1">404</h1>
          <p className="error__p">
            Oups ! La page que vous demandez n'existe pas.
          </p>
          <Link className="error__a" to="/">
            Retourner sur la page d’accueil
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Error404;
