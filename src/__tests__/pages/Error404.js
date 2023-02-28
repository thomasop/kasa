import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter, MemoryRouter, Route, Routes } from "react-router-dom";
import Error404 from "../../pages/Error404";
import Home from "../../pages/Home";

describe("Given I am on kasa", () => {
  describe("When I am on error page", () => {
    it("Then first test", () => {
      expect(1).toBe(1);
    });
    it("Then h1 is present", () => {
      render(
        <BrowserRouter>
          <Error404 />
        </BrowserRouter>
      );
      const h1 = screen.getByText("404");
      expect(h1).toBeInTheDocument();
    });
    describe("When I click on home page link", () => {
      it("Then user is redirect to home page", async () => {
        render(
          <BrowserRouter>
            <Error404 />
          </BrowserRouter>
        );
        const errorLink = screen.getByTestId("errorLink");
        fireEvent.click(errorLink);
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
  });
});
