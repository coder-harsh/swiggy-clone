import ResturantCard from "./ResturantCard";
import resList from "../utils/mocData";
import { useState, useEffect } from "react";

const Body = () => {
    //state varibale=normal js variable
    //hook is normal js function
    const [listofResturants, setListofResturant] = useState(resList);

    //() anar jo v pass karenge wo ek default variable value hoga. useState([Default value])
    //const array me sirf index pe value change karenge to error nhi dega. pura array change pe error dega const value change ka.

    // console.log(resList[0].info.id); //aise acess karenge nhi to undefined value dega resList.info.id se. BCS index map me hi hota

    return (
        <div className="body">
            <div className="filter-btn">
                <button onClick={() => {
                    const filteredList = listofResturants.filter((res) => res.info.avgRating >= 4);
                    setListofResturant(filteredList);  //when ever state variable changes. React will rerender that component.
                }
                }>
                    Top Rated Resturants
                </button>
            </div>
            <div className="res-container">
                {
                    listofResturants.map((resturant) => {
                        return <ResturantCard key={resturant.info.id} resData={resturant} /> //isme agar reslist v pass karenge to resList[index].info.id se acess karna padega
                    })

                }
            </div>
        </div >
    );
};
export default Body;