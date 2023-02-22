import React from "react";
import Fetchall from "../conponents/Fetchall";
import Footer from "../conponents/Footer";
import Header from "../conponents/Header";

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <Fetchall />
      </main>

      <Footer />
    </>
  );
};

export default Home;
