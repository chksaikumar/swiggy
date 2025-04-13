import { useState } from "react";
import ItemList from "./ItemList";
const Restaurantcategory = ({ data, showItem, setshowIndex, index }) => {
  const handleClick = () => {
    setshowIndex();
  };
  return (
    <div>
      <div className="flex justify-between flex-col w-6/12  bg-white rounded-lg shadow-md p-3 pb-0.5 m-auto my-6 cursor-pointer">
        <div className="flex justify-between" onClick={handleClick}>
          <h2 className="text-50 font-bold text-gray-800 mb-4">
            {data.title} ({data.itemCards.length})
          </h2>
          <span>{showItem ? "⬆️" : "⬇️"}</span>
        </div>
        {showItem && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default Restaurantcategory;
