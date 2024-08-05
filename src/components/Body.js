import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
    // Local State variable - Super powerful variable.
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [searchText, setSearchText] = useState("");

    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=10.0158605&lng=76.3418666&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();
        //debugger;
        setListOfRestaurants(
            json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
                ?.restaurants
        );
        setFilteredRestaurant(
            json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
                ?.restaurants
        );
    };

    const onlineStatus = useOnlineStatus();

    if (onlineStatus == false)
        return (
            <h1>
                Looks like you are offline!!!. Please check your internet
                connection.!!!
            </h1>
        );

    const { loggedInUser, setUsername } = useContext(UserContext);

    return listOfRestaurants.length === 0 ? (
        <Shimmer />
    ) : (
        <div className="body">
            <div className="filter flex">
                <div className="m-4 p-4">
                    <input
                        type="text"
                        className="border border-solid border-black"
                        data-testid="searchInput"
                        value={searchText}
                        onChange={(e) => {
                            setSearchText(e.target.value);
                        }}
                    />
                    <button
                        className="px-4 py-2 bg-green-100 m-4 rounded-lg"
                        onClick={() => {
                            const filteredRestaurant = listOfRestaurants.filter(
                                (res) =>
                                    res.info.name
                                        .toLowerCase()
                                        .includes(searchText.toLowerCase())
                            );
                            setFilteredRestaurant(filteredRestaurant);
                        }}
                    >
                        Search
                    </button>
                </div>
                <div className="m-4 p-4 flex items-center">
                    <button
                        className="px-4 py-2 bg-gray-100 rounded-lg"
                        onClick={() => {
                            const filteredList = listOfRestaurants.filter(
                                (res) => res.info.avgRating > 4.5
                            );
                            setListOfRestaurants(filteredList);
                        }}
                    >
                        Top Rated Restaurants
                    </button>
                </div>
                <div className="m-4 p-4 flex items-center">
                    <label className="px-2">Username : </label>

                    <input
                        className="border border-black rounded-md p-2"
                        value={loggedInUser}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
            </div>
            <div className="flex flex-wrap">
                {/* Restaurant Card */}
                {filteredRestaurant.map((restaurant) => (
                    <Link
                        key={restaurant?.info.id}
                        to={"/restaurants/" + restaurant?.info.id}
                    >
                        {restaurant.info.promoted ? (
                            <RestaurantCardPromoted
                                resData={restaurant?.info}
                            />
                        ) : (
                            <RestaurantCard resData={restaurant?.info} />
                        )}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Body;
