import ShimmerCard from "./ShimmerCard";
import { useState } from "react";
const Shimmer = () => {
    const fetchData = async () => {
        try {
            const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65420&lng=77.23730&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
            const json = await data.json();
            console.log(json);
            // console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants[0].info.name);
            // setListofResturant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            const resList = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
            setresLen(resList);
        } catch (error) {
            console.error('Failed to fetch api data:', error);
        }
    };
    fetchData();
    const [resLen, setresLen] = useState([]);
    return (
        <div className="shimmer-container">
            {
                resLen.map((res) => {
                    return <ShimmerCard />
                })
            }
        </div>
    )
}
export default Shimmer;