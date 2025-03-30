import ShimmerCard from "./utils/Shimmer_card";

import useMenu from "./utils/Hooks/useMenu";
import { useParams } from "react-router-dom";
const Menu = () => {
  const { resid } = useParams();

  const menuitems = useMenu(resid);
  if (menuitems === null) {
    return <ShimmerCard />;
  }
  const { name, cuisines, costForTwoMessage } =
    menuitems?.cards[2]?.card?.card?.info;
  const { itemCards } =
    menuitems.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
      ?.categories ||
    menuitems.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card;
  return (
    <div className="Menubody">
      <h1>{name}</h1>
      {console.log(
        menuitems.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
      )}
      <p>
        {cuisines.join(",  ")} - {costForTwoMessage}
      </p>
      <ul>
        {itemCards ? (
          itemCards.map((item, index) => (
            <li key={index}>{item.card.info.name}</li>
          ))
        ) : (
          <li>No items available</li>
        )}
      </ul>
    </div>
  );
};

export default Menu;
