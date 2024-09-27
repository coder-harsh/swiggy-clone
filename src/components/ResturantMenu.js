import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constants";
import useFetchData from "../utils/useFetchData";
const ResturantMenu = () => {
    const { resId } = useParams();
    const resInfo = useFetchData(MENU_URL + resId);
    console.log(resId);
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