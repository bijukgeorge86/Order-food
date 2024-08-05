const { render, screen, fireEvent } = require("@testing-library/react");
import { act } from "react-dom/test-utils";
import Body from "../Body";
import MOCK_DATA from "../mocks/mockDataRestaurantList.json";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";

/* Since Test cases are run on JSdom which is a browser like and it doesn't have fetch function we are creating a function like fetch as below */
describe("Search and Body Function Test Cases", () => {
    /*beforeAll(() => {
        console.log("Before All");
    });

    beforeEach(() => {
        console.log("Before Each");
    });*/
    global.fetch = jest.fn(() => {
        return Promise.resolve({
            json: () => {
                return Promise.resolve(MOCK_DATA);
            },
        });
    });

    test("Should search Restaurant List and given Restaturant as text input", async () => {
        await act(async () =>
            render(
                <BrowserRouter>
                    <Body />
                </BrowserRouter>
            )
        );

        const cardsBeforeSearch = screen.getAllByTestId("resCard");

        expect(cardsBeforeSearch.length).toBe(8);

        const searchBtn = screen.getByRole("button", { name: "Search" });
        //console.log(searchBtn);
        // Using getByTestId is always gets back the value
        const searchInput = screen.getByTestId("searchInput");
        fireEvent.change(searchInput, { target: { value: "Restaurant" } });
        fireEvent.click(searchBtn);
        //expect(searchBtn).toBeInTheDocument();
        // Should load which has name as Restaurant
        const cardsAfterSearch = screen.getAllByTestId("resCard");
        expect(cardsAfterSearch.length).toBe(1);
    });

    test("Should filter Top Rated Restaurant", async () => {
        await act(async () =>
            render(
                <BrowserRouter>
                    <Body />
                </BrowserRouter>
            )
        );

        const cardsBeforeFilter = screen.getAllByTestId("resCard");

        expect(cardsBeforeFilter.length).toBe(8);

        const topRatedBtn = screen.getByRole("button", {
            name: "Top Rated Restaurants",
        });
        fireEvent.click(topRatedBtn);

        const cardsAfterFilter = screen.getAllByTestId("resCard");
        expect(cardsAfterFilter.length).toBe(8);
    });
});
