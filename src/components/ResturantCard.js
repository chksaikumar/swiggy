// import dataobj from "./utils/Constdata";
import { RES_IMG } from "./public/public";
const ResturantCard = (prop) => {
  const { dataobj } = prop;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    dataobj?.info;
  const { deliveryTime } = dataobj?.info?.sla;

  return (
    <div className="RestCard-container">
      <img src={RES_IMG + cloudinaryImageId} alt="RestImage "></img>
      <h3>{name}</h3>
      <div className="align_left">
        <h4> {cuisines.join(",  ")}</h4>
        <h5>{avgRating}</h5>
        <p>{costForTwo}</p>
        <h5>{deliveryTime} min</h5>
      </div>
    </div>
  );
};

export const PromotedCard = (ResturantCard) => {
  return (props) => {
    return (
      <>
        <label>Promoted </label>
        <ResturantCard {...props} />
      </>
    );
  };
};

export default ResturantCard;
