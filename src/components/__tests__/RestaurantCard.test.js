import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../mocks/mockDataRestaurantCard.json";

describe("Restaurant Card Test Cases", () => {
    /* beforeAll(() => {
        console.log("Before All");
    });

    beforeEach(() => {
        console.log("Before Each");
    });*/
    it("Should render RestaurantCard component with props Data", () => {
        render(<RestaurantCard resData={MOCK_DATA} />);
        const restaurantName = screen.getByText("Galaxy Family Restaurant");
        expect(restaurantName).toBeInTheDocument();
    });
    /*
    test(
        ("should render RestaurantCard component with Promoted Label",
        () => {
            // Home Work - test HOC : withPromtedLabel()
        })
    ); 
    */
});
