import { render, screen } from "@testing-library/react";
import Rating from "../../components/Rating";

describe("Given I am on kasa", () => {
  describe("When I am on rating", () => {
    it("Then first test", () => {
      expect(1).toBe(1);
    });
    it("Then div is present", () => {
      render(<Rating nbRating="3" />);
      const div = screen.getByTestId("rating");
      expect(div).toBeInTheDocument();
    });
    it("Then 3 img is present", () => {
      render(<Rating nbRating="3" />);
      const div = screen.getByTestId("rating");
      expect(div).toBeInTheDocument();
      const img = screen.getAllByTestId("ratingImgFull");
      expect(img.length).toBe(3);
    });
    it("Then 5 img is present", () => {
      render(<Rating nbRating="5" />);
      const div = screen.getByTestId("rating");
      expect(div).toBeInTheDocument();
      const img = screen.getAllByTestId("ratingImgFull");
      expect(img.length).toBe(5);
    });
  });
});
