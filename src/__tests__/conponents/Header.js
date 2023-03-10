import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter, MemoryRouter, Route, Routes } from "react-router-dom";
import Header from "../../components/Header";
import Home from "../../pages/Home";
import About from "../../pages/About";

describe("Given I am on kasa", () => {
  describe("When I am on header", () => {
    it("Then first test", () => {
      expect(1).toBe(1);
    });
    it("Then div is present", () => {
      render(
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      );
      const header = screen.getByTestId("header");
      expect(header).toBeInTheDocument();
    });
    describe("When I click on home page link", () => {
      it("Then user is redirect to home page", () => {
        render(
          <BrowserRouter>
            <Header />
          </BrowserRouter>
        );
        const homelink = screen.getByTestId("homelink");
        expect(homelink).toBeInTheDocument();
        fireEvent.click(homelink);
        render(
          <MemoryRouter>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </MemoryRouter>
        );
        const h1 = screen.getByText("Chez vous, partout et ailleurs");
        expect(h1).toBeInTheDocument();
      });
    });
    describe("When I click on about link link", () => {
      it("Then user is redirect to about page", () => {
        render(
          <BrowserRouter>
            <Header />
          </BrowserRouter>
        );
        const homelink = screen.getByTestId("aboutlink");
        expect(homelink).toBeInTheDocument();
        fireEvent.click(homelink);
        render(
          <MemoryRouter>
            <Routes>
              <Route path="/" element={<About />} />
            </Routes>
          </MemoryRouter>
        );
        const about = screen.getByTestId("about");
        expect(about).toBeInTheDocument();
      });
    });
  });
});
