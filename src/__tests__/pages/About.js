import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import About from "../../pages/About";

describe('Given I am on kasa', () => {
    describe('When I am on about page', () => {
        it("Then first test", () => {
            expect(1).toBe(1)
        })
        it("Then div is present", () => {
            render(<BrowserRouter><About /></BrowserRouter>)
            const about = screen.getByTestId("about")
            expect(about).toBeInTheDocument()
        })
    })
})