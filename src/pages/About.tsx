import React from "react";
import Fetchabout from "../conponents/Fetchabout";
import Footer from "../conponents/Footer";
import Header from "../conponents/Header";

const About: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <div className="about"></div>
        <Fetchabout />
      </main>
      <Footer />
    </>
  );
};

export default About;
