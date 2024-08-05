import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaturantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";
const RestaurantMenu = () => {
    const { resId } = useParams();
    const restInfo = useRestaurantMenu(resId);

    const [showIndex, setShowIndex] = useState(0);

    const dummy = "Dummy Data";

    if (restInfo === null) return <Shimmer />;
    debugger;

    const { name, cuisines, cloudinaryImageId, costForTwoMessage } =
        restInfo?.cards[2]?.card?.card?.info;
    debugger;

    const { itemCards } =
        restInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
            ?.card;
    //debugger;

    const categories =
        restInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
            (c) =>
                c.card?.["card"]?.["@type"] ==
                "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );

    return (
        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl">{name}</h1>
            <p className="font-bold text-lg">
                {cuisines.join(", ")} - {costForTwoMessage}
            </p>
            {/* Categories Accordion */}
            {categories.map((category, index) => (
                // Controlled Component
                <RestaurantCategory
                    key={category?.card?.card?.title}
                    data={category?.card?.card}
                    showItems={index == showIndex ? true : false}
                    setShowIndex={() => setShowIndex(index)}
                    dummy={dummy}
                />
            ))}
        </div>
    );
};

export default RestaurantMenu;
