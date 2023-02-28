import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Home from "../../pages/Home";

describe('Given I am on kasa', () => {
    describe('When I am on home page', () => {
        it("Then first test", () => {
            expect(1).toBe(1)
        })
        it("Then h1 is present", () => {
            render(<BrowserRouter><Home /></BrowserRouter>)
            const h1 = screen.getByText("Chez vous, partout et ailleurs")
            expect(h1).toBeInTheDocument()
        })
    })
})