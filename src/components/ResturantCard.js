import styleCard from "../utils/styleCard";
import { CLOUD_CDNURL } from "../utils/constants";
const ResturantCard = (props) => {
    const { resData } = props;
    //now destructure this object
    const { cloudinaryImageId, name, cuisines, costForTwo, avgRating } = resData?.info; //it is optional chaining 
    const { deliveryTime } = resData?.info.sla;
    return (
        <div className="res-card" style={styleCard}>
            <img alt="res-logo" className="res-logo" src={CLOUD_CDNURL + cloudinaryImageId} />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} Stars</h4>
            <h5>{deliveryTime} Mins</h5>
            <h6>{costForTwo} items</h6>
        </div>
    )
}
export default ResturantCard;