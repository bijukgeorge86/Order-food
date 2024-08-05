import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { act } from "react-dom/test-utils";
import Header from "../Header";
import RestaurantMenu from "../RestaurantMenu";
import Cart from "../Cart";
import MOCK_DATA_NAME from "../mocks/mockRestaurantMenu.json";
import { Provider } from "react-redux";
import appStore from "../../redux/appStore";
import { BrowserRouter } from "react-router-dom";

describe("Cart Test Cases", () => {
    global.fetch = jest.fn(() =>
        Promise.resolve({
            json: () => Promise.resolve(MOCK_DATA_NAME),
        })
    );
    test("should Load Restaurant Menu Component", async () => {
        await act(async () =>
            render(
                <BrowserRouter>
                    <Provider store={appStore}>
                        <Header />
                        <RestaurantMenu />
                        <Cart />
                    </Provider>
                </BrowserRouter>
            )
        );
        const accordionHeader = screen.getByText("Biriyani (5)");
        fireEvent.click(accordionHeader);

        expect(screen.getAllByTestId("foodItems").length).toBe(5);

        expect(screen.getByText("Cart - (0 items)").toBeInTheDocument());

        const addBtns = screen.getAllByRole("button", { name: "Add +" });
        fireEvent.click(addBtns[0]);

        expect(screen.getByText("Cart - (1 items)").toBeInTheDocument());
        fireEvent.click(addBtns[1]);

        expect(screen.getByText("Cart - (2 items)").toBeInTheDocument());

        expect(screen.getAllByTestId("foodItems").length).toBe(7);

        fireEvent.click(screen.getByRole("button", { name: "Clear Cart" }));

        expect(screen.getAllByTestId("foodItems").length).toBe(5);

        expect(
            screen
                .getByText("Cart is empty, Add items to your cart")
                .toBeInTheDocument()
        );
    });
});
