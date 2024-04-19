import ResturantCard from "./ResturantCard";
import resList from "../utils/mocData";
const Body = () => {
    let listofResturants = [
        {
            "id": "23787",
            "name": "Domino's Pizza",
            "cloudinaryImageId": "d0450ce1a6ba19ea60cd724471ed54a8",
            "locality": "6th Block",
            "areaName": "Koramangla",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "Pizzas",
                "Italian",
                "Pastas",
                "Desserts"
            ],
            "avgRating": 4.4
        },
        {
            "id": "23788",
            "name": "KFC",
            "cloudinaryImageId": "d0450ce1a6ba19ea60cd724471ed54a8",
            "locality": "6th Block",
            "areaName": "Koramangla",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "Pizzas",
                "Italian",
                "Pastas",
                "Desserts"
            ],
            "avgRating": 3.7
        },
    ]
    // console.log(resList[0].info.id); //aise acess karenge nhi to undefined value dega resList.info.id se. BCS index map me hi hota
    return (
        <div className="body">
            <div className="filter-btn">
                <button onClick={() => {
                    listofResturants = listofResturants.filter((res) => res.avgRating > 4);
                    console.log(listofResturants);
                }}>
                    Top Rated Resturants
                </button>
            </div>
            <div className="res-container">
                {
                    resList.map((resturant) => {
                        return <ResturantCard key={resturant.info.id} resData={resturant} />
                    })

                }
            </div>
        </div >
    );
};
export default Body;