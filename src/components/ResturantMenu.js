import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constants";
const ResturantMenu = () => {
    const [resInfo, setResInfo] = useState(null);
    const { resId } = useParams();
    console.log(resId);
    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch(MENU_URL + resId);
        const json = await data.json();
        console.log(json);
        setResInfo(json.data);
    }
    if (resInfo === null) return <Shimmer />

    const { name, cuisines, costForTwoMessage, avgRating } = resInfo?.cards[2]?.card?.card?.info;
    const { deliveryTime } = resInfo?.cards[2]?.card?.card?.info.sla;
    const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap.REGULAR?.cards[2]?.card?.card;
    return (
        <div>
            <h1>{name}</h1>
            <p>{cuisines.join(", ")} - {costForTwoMessage}</p>
            <p>{avgRating} Ratings</p>
            <p>{deliveryTime} Mins</p>
            <h2>Menu</h2>
            <ul>
                {itemCards.map(item => <li key={item.card.info.id}>{item.card.info.name} - RS {item.card.info.defaultPrice / 100 || item.card.info.price / 100}</li>)}
            </ul>
        </div>
    );
};
export default ResturantMenu;