import ResturantCard from "./ResturantCard";
import resList from "../utils/mocData";
import { useState, useEffect } from "react";

const Body = () => {
    const [listofResturants, setListofResturant] = useState(resList);
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