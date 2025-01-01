import ResturantCard, { withPromotedLabel } from "./ResturantCard";
import { useState, useEffect } from "react"; //named import
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { FaStar } from "react-icons/fa6";
const Body = () => {
    const [listofResturants, setListofResturant] = useState([]);
    const [filterListofResturants, setfilterListofResturant] = useState([]);
    const [searchText, setSearchText] = useState("");
    //when ever we change local state variable, react rerenders the component.

    //useEffect is normal js function. It will take 2 arguments. 1 is call back fn and 2nd is dependency array.
    const ResturantCardPromoted = withPromotedLabel(ResturantCard);
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
            console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants[0].info.name);
            setListofResturant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            setfilterListofResturant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        } catch (error) {
            console.error('Failed to fetch api data:', error);
        }
    };

    console.log("body is rendered..");
    /*
    if (listofResturants.length === 0) {  //conditional rendering
        return <Shimmer />
    }
    */
    const onlineStatus = useOnlineStatus();
    if (onlineStatus === false) {
        return <h1>Looks Like you are offline</h1>
    };
    return listofResturants.length === 0 ? ( //ternary operator
        <Shimmer />
    ) : (
        <div className="body">
            <div className="flex justify-center items-center mb-4">
                <div className="flex justify-center border-2 mr-4">
                    <input type="text" className="search-box" value={searchText} onChange={(e) => {
                        setSearchText(e.target.value);
                        //when ever you change the local state variable, react rerenders the component outside usestate hook.
                        //when ever we write anything, react rerenders thewhole  component and updates the input field value only after reconcilation is complete. 
                        //Dom manipulation is expensive. React is effecient at it.
                        //why react is fast: bcs react fiber/new reconciliation algorithm only updates that portion of dom after finding the diffrence.
                    }} />
                    <button className="search-btn" onClick={() => {
                        //filter resturant cards and update ui
                        //serach text
                        console.log(searchText);
                        const filteredRes = listofResturants.filter(
                            (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        );
                        setfilterListofResturant(filteredRes);
                    }}>Search</button>
                </div>
                <button className="filter-btn" onClick={() => {
                    // const filteredList = listofResturants.filter((res) => res.info.avgRating >= 4);
                    const filteredList = filterListofResturants.filter((res) => res.info.avgRating >= 4);
                    // setListofResturant(filteredList);
                    setfilterListofResturant(filteredList);
                }
                }>
                    <span className="flex justify-center items-center bg-gray-100 px-4 py-1 rounded">
                        <p className="mr-1">
                            4
                        </p>
                        <FaStar className="text-yellow-400" />
                    </span>
                </button>
            </div>
            <div className="flex flex-wrap justify-center">
                {
                    filterListofResturants.map((resturant) => {
                        return <Link to={"/resturants/" + resturant.info.id} key={resturant.info.id} className="bg-gray-100 hover:bg-gray-200 rounded-lg w-64 border-gray-400 shadow mb-6 mx-3">
                            {/* <ResturantCard resData={resturant} /> */}
                            {
                                resturant.info.isOpen ? (<ResturantCardPromoted resData={resturant} />) : <ResturantCard resData={resturant} />
                            }
                        </Link>
                    })

                }
            </div>
        </div >
    );
};
export default Body;