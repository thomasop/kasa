import React from "react";
import Fetchall from "../conponents/Fetchall";
import Footer from "../conponents/Footer";
import Header from "../conponents/Header";

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <div className="banner">
          <h1 className="banner__h1">Chez vous, partout et ailleurs</h1>
        </div>
        <Fetchall />
      </main>
      <Footer />
    </>
  );
};

export default Home;
