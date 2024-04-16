import ResturantCard from "./ResturantCard";
import resList from "../utils/mocData";
const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                {
                    resList.map((resturant, index) => {
                        return (<ResturantCard key={index} resData={resturant} />
                        );
                    })
                }
            </div>
        </div>
    );
};
export default Body;