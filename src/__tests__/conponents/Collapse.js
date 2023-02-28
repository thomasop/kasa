import { fireEvent, render, screen } from "@testing-library/react";
import Collapse from "../../conponents/Collapse";

describe("Given I am on kasa", () => {
    describe("When I am on collapse", () => {
        it("Then first test", () => {
            expect(1).toBe(1)
        })
        it("Then div is present", () => {
            render(<Collapse name='test' data='test' />)
            const div = screen.getByTestId("collapse")
            expect(div).toBeInTheDocument()
        })
        it("Then p is empty", () => {
            render(<Collapse name='test' data='test' />)
            const div = screen.getByTestId("collapse")
            expect(div).toBeInTheDocument()
            const p = screen.getByTestId("collapseP")
            expect(p.textContent).toBe("")
        })
        describe("When click on h1", () => {
            it("Then p is not empty", () => {
                render(<Collapse name='test' data='test' />)
                const div = screen.getByTestId("collapse")
                expect(div).toBeInTheDocument()
                const h1 = screen.getByTestId("collapseH1")
                fireEvent.click(h1)
                const p = screen.getByTestId("collapseP")
                expect(p.textContent).toBe("test")
            })
        })
    })
})