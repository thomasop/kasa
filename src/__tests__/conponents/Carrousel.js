import { fireEvent, render, screen } from "@testing-library/react";
import Carrousel from "../../components/Carrousel";

describe("Given I am on kasa", () => {
  describe("When I am on carrousel", () => {
    it("Then first test", () => {
      expect(1).toBe(1);
    });
    it("Then img is present", () => {
      var data = ["test.png"];
      render(<Carrousel images={data} />);
      const img = screen.getByTestId("carrousel");
      expect(img).toBeInTheDocument();
    });
    it("Then img one is present", () => {
      var data = ["test.png", "test1.png"];
      render(<Carrousel images={data} />);
      const img = screen.getByTestId("carrousel");
      expect(img).toBeInTheDocument();
      expect(img.getAttribute("src")).toBe("test.png");
      const icone = screen.getByTestId("carrouselN");
      expect(icone).toBeInTheDocument();
      const p = screen.getByTestId("carrouselT");
      expect(p.textContent).toBe("1/2");
    });
    describe("When i click on next img", () => {
      it("Then img two is present", () => {
        var data = ["test.png", "test1.png"];
        render(<Carrousel images={data} />);
        const img = screen.getByTestId("carrousel");
        expect(img).toBeInTheDocument();
        const icone = screen.getByTestId("carrouselN");
        fireEvent.click(icone);
        expect(img.getAttribute("src")).toBe("test1.png");
        expect(icone).toBeInTheDocument();
        const p = screen.getByTestId("carrouselT");
        expect(p.textContent).toBe("2/2");
      });
    });
    describe("When i click on previous img", () => {
      it("Then img two is present", () => {
        var data = ["test.png", "test1.png"];
        render(<Carrousel images={data} />);
        const img = screen.getByTestId("carrousel");
        expect(img).toBeInTheDocument();
        const icone = screen.getByTestId("carrouselP");
        fireEvent.click(icone);
        expect(img.getAttribute("src")).toBe("test1.png");
        expect(icone).toBeInTheDocument();
        const p = screen.getByTestId("carrouselT");
        expect(p.textContent).toBe("2/2");
      });
    });
  });
});
