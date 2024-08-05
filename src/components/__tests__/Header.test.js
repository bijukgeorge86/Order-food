import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../redux/appStore";
import { BrowserRouter } from "react-router-dom";

describe("Header Component Test Case", () => {
    /*beforeAll(() => {
        console.log("Before All");
    });

    beforeEach(() => {
        console.log("Before Each");
    });*/
    it("Should render Header Component with a login button", () => {
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header />
                </Provider>
            </BrowserRouter>
        );
        //const loginButton = screen.getByRole("button");
        //Anothe way to write above as below
        const loginButton = screen.getByRole("button", { name: "Login" });
        // Above (1st) or Below (Below way is not the best way)
        //const loginButton = screen.getByText("Login");
        expect(loginButton).toBeInTheDocument();
    });

    test("Should render Header Component with Cart Items 0", () => {
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header />
                </Provider>
            </BrowserRouter>
        );
        const cartItems = screen.getByText("Cart (0 Items)");
        expect(cartItems).toBeInTheDocument();
    });

    it("Should render Header Component with a Cart Item", () => {
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header />
                </Provider>
            </BrowserRouter>
        );

        // Below is using Regex
        const cartItems = screen.getByText(/Cart/);
        expect(cartItems).toBeInTheDocument();
    });

    test("Should change Login button to Logout on click in Header Component", () => {
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header />
                </Provider>
            </BrowserRouter>
        );

        const loginButton = screen.getByRole("button", { name: "Login" });
        fireEvent.click(loginButton);
        const logoutButton = screen.getByRole("button", { name: "Logout" });
        expect(logoutButton).toBeInTheDocument();
    });
});
