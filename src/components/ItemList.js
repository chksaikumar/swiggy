import { RES_IMG } from "./public/public";
import { useDispatch } from "react-redux";
import { addItem } from "../Redux/slices/CartSlice";
const ItemList = ({ items }) => {
  const dispatch = useDispatch();
  const handeladdItem = (item) => {
    dispatch(addItem(item));
  };
  return (
    <div className="space-y-4">
      {items.map((item) => {
        const { id, name, price, defaultPrice, description, imageId } =
          item.card.info;

        return (
          <div
            key={id}
            className="flex items-center justify-between p-4  border-gray-200 rounded-lg shadow-sm bg-white"
          >
            {/* Left Section: Item Details */}
            <div className="flex flex-col items-start  w-9/12">
              <h3 className="text-base font-medium text-gray-800">{name} </h3>
              <p className="text-sm text-gray-600">
                ₹{(price || defaultPrice) / 100}
              </p>
              <p>
                ⭐
                {item?.card?.info?.ratings?.aggregatedRating?.rating ||
                  "Ratings Not Avilable"}
              </p>
              <p className="text-xs text-gray-500 mt-1 text-justify">
                {description || "No description available"}
              </p>
            </div>

            {/* Right Section: Item Image */}
            <div className="w-24 h-24 flex-shrink-0">
              <img
                src={RES_IMG + imageId}
                alt={name}
                className="w-full h-full object-cover rounded-md"
              />
              <button
                onClick={() => handeladdItem(item)}
                className="relative  -top-5 bg-green-400 p-1 rounded-md font-semibold "
              >
                ADD
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
