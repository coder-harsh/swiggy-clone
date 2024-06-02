import ResturantCard from "./ResturantCard";
import { useState, useEffect } from "react"; //named import
import Shimmer from "./Shimmer";

const Body = () => {
    const [listofResturants, setListofResturant] = useState([]);

    //useEffect is normal js function. It will take 2 arguments. 1 is call back fn and 2nd is dependency array.

    useEffect(() => {
        // console.log("Use Effect called.");
        fetchData();
    }, []);
    //callback function of useEffect will be called once the component outside useeffect will be rendered has been rendered
    //useEffect is triggered or called once the component is rendered. Here first Body component will be rendered then use effect wil be called.

    const fetchData = async () => {
        try {
            const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65420&lng=77.23730&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
            const json = await data.json();
            console.log(json);
            console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants[0].info.name);
            setListofResturant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        } catch (error) {
            console.error('Failed to fetch api data:', error);
        }
    };

    console.log("body is rendered..");
    if (listofResturants.length === 0) {
        return <Shimmer />
    }
    return (
        <div className="body">
            <div className="filter-btn">
                <button onClick={() => {
                    const filteredList = listofResturants.filter((res) => res.info.avgRating >= 4);
                    setListofResturant(filteredList);
                }
                }>
                    Top Rated Resturants
                </button>
            </div>
            <div className="res-container">
                {
                    listofResturants.map((resturant) => {
                        return <ResturantCard key={resturant.info.id} resData={resturant} />
                    })

                }
            </div>
        </div >
    );
};
export default Body;