import { render, screen } from "@testing-library/react";
import Footer from "../../conponents/Footer";

describe('Given I am on kasa', () => {
    describe('When I am on footer', () => {
        it("Then first test", () => {
            expect(1).toBe(1)
        })
        it("Then text is present", () => {
            render(<Footer />)
            const footer = screen.getByText("© 2020 Kasa. All rights reserved")
            expect(footer).toBeInTheDocument()
        })
    })
})