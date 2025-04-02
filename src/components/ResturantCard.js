import { RES_IMG } from "./public/public";

const ResturantCard = (prop) => {
  const { dataobj } = prop;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    dataobj?.info;
  const { deliveryTime } = dataobj?.info?.sla;

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
      <img
        src={RES_IMG + cloudinaryImageId}
        alt="Restaurant"
        className="w-full h-40 object-cover"
      />
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
        <div className="text-sm text-gray-600 mt-2">
          <h4>{cuisines.join(", ")}</h4>
        </div>
        <div className="flex items-center justify-between mt-4 text-sm text-gray-600">
          <h5 className="bg-green-100 text-green-800 px-2 py-1 rounded-md">
            {avgRating} ★
          </h5>
          <p>{costForTwo}</p>
          <h5>{deliveryTime} min</h5>
        </div>
      </div>
    </div>
  );
};

export const PromotedCard = (ResturantCard) => {
  return (props) => {
    return (
      <div className="relative h-full">
        <label className="absolute top-2 left-2 bg-yellow-500 text-white text-xs px-2 py-1 rounded-md">
          Promoted
        </label>
        <ResturantCard {...props} />
      </div>
    );
  };
};

export default ResturantCard;
