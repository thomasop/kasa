import React from "react";
import Fetchabout from "../components/Fetchabout";
import Footer from "../components/Footer";
import Header from "../components/Header";

const About: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <div data-testid="about" className="about"></div>
        <Fetchabout />
      </main>
      <Footer />
    </>
  );
};

export default About;
