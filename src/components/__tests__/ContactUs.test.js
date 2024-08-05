import { render, screen } from "@testing-library/react";
import ContactUs from "../ContactUs";
import "@testing-library/jest-dom";

describe("Contact Us Page Test Cases", () => {
    /*beforeAll(() => {
        console.log("Before All");
    });

    beforeEach(() => {
        console.log("Before Each");
    });

    afterAll(() => {
        console.log("After All");
    });

    afterEach(() => {
        console.log("After Each");
    });*/

    test("Should load Contact Us Component", () => {
        render(<ContactUs />);
        // Below line is called Querying
        const heading = screen.getByRole("heading");
        //Assertion
        expect(heading).toBeInTheDocument();
    });

    it("Should load Button inside Contact Us Component", () => {
        render(<ContactUs />);
        // Below line is called Querying
        const button = screen.getByRole("button");
        //Assertion
        expect(button).toBeInTheDocument();
    });

    test("Should load Submit text is present inside Contact Us Component", () => {
        render(<ContactUs />);
        // Below line is called Querying
        const submit = screen.getByText("Submit");
        //Assertion
        expect(submit).toBeInTheDocument();
    });

    it("Should load Input name inside Contact Us Component", () => {
        render(<ContactUs />);
        // Below line is called Querying
        const placeholderName = screen.getByPlaceholderText("name");
        //Assertion
        expect(placeholderName).toBeInTheDocument();
    });

    test("Should load 2 input boxes on the Contatct Us Component", () => {
        render(<ContactUs />);
        // Below line is called Querying
        const inputBoxes = screen.getAllByRole("textbox");
        //console.log(inputBoxes);
        //Assertion
        expect(inputBoxes.length).toBe(2);
        // Above OR as Below
        //expect(inputBoxes.length).not.toBe(3);
    });
});

// You can use
// test("",()=>{})
//      OR
// it("",()=>{})
