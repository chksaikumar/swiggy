import ShimmerCard from "./utils/Shimmer_card";

import useMenu from "./utils/Hooks/useMenu";
import { useParams } from "react-router-dom";

import Restaurantcategory from "./RestaurantCategory";
import { useState } from "react";
const Menu = () => {
  const [showIndex, setshowIndex] = useState(0);
  const { resid } = useParams();
  const menuitems = useMenu(resid);

  if (menuitems === null) {
    return <ShimmerCard />;
  }

  const category =
    menuitems.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  const name = menuitems?.cards[0]?.card?.card?.text;

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      {category.map((item, index) => (
        <Restaurantcategory
          key={item?.card?.card?.title}
          data={item?.card?.card}
          showItem={index === showIndex ? true : false}
          setshowIndex={(prevIndex) =>
            setshowIndex(index === showIndex ? null : index)
          }
          index={index}
        />
      ))}
    </div>
  );
};

export default Menu;
