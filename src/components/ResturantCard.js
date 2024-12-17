import { CLOUD_CDNURL } from "../utils/constants";
const ResturantCard = (props) => {
    const { resData } = props;
    //now destructure this object
    const { cloudinaryImageId, name, cuisines, costForTwo, avgRating } = resData?.info; //it is optional chaining 
    const { deliveryTime } = resData?.info.sla;
    return (
        <div className="flex justify-center items-center flex-col">
            <img alt="res-logo" className="rounded-t w-full h-44" src={CLOUD_CDNURL + cloudinaryImageId} />
            <h3 className="font-bold text-xl my-2">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} Stars</h4>
            <h5>{deliveryTime} Mins</h5>
            <h6>{costForTwo} items</h6>
        </div>
    )
}
export const withPromotedLabel = (ResturantCard) => {
    return (props) => {
        return (
            <div className="bg-red-700">
                <label>Promoted</label>
                <ResturantCard {...props} />
            </div>
        )
    }
}
export default ResturantCard;