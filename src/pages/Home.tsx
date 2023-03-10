import React from "react";
import Fetchall from "../components/Fetchall";
import Footer from "../components/Footer";
import Header from "../components/Header";

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
