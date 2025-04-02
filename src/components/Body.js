import ResturantCard, { PromotedCard } from "./ResturantCard";
import { useState, useEffect } from "react";
import ShimmerCard from "./utils/Shimmer_card";
import { Link } from "react-router-dom";

import useOnlineStatus from "./utils/Hooks/online";

const Body = () => {
  let [searchText, setsearchText] = useState("");
  let [TopratedRestaurant, setTopratedRestaurant] = useState([]);
  let [filterdeRestaurent, setfilteredRestaurent] = useState([]);
  const onlineStatus = useOnlineStatus();

  useEffect(() => {
    fetchdat();
  }, []);

  const PrometedRestCard = PromotedCard(ResturantCard);

  const fetchdat = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.956924&lng=77.701127&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const jsondata = await data.json();

    setTopratedRestaurant(
      jsondata?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );

    setfilteredRestaurent(
      jsondata?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  const handleSearch = () => {
    let filtered = TopratedRestaurant.filter((res) => {
      return res.info.name.toLowerCase().includes(searchText.toLowerCase());
    });
    setfilteredRestaurent(filtered);
  };

  const handleTopRated = () => {
    let filtered = TopratedRestaurant.filter((res) => res.info.avgRating > 4);
    setfilteredRestaurent(filtered);
  };

  if (onlineStatus === false) {
    return (
      <h1 className="text-center text-xl font-bold text-red-500">
        Oops! You're offline. Please check your internet connection.
      </h1>
    );
  }

  if (TopratedRestaurant.length === 0) {
    return (
      <div className="p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {Array(10)
            .fill("")
            .map((_, index) => (
              <ShimmerCard key={index} />
            ))}
        </div>
      </div>
    );
  } else {
    return (
      <div className="p-4">
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-4">
          <input
            className="border border-gray-300 rounded-md p-2 w-full sm:w-1/2"
            value={searchText}
            placeholder="Search Restaurants"
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          />
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            onClick={handleSearch}
          >
            Search
          </button>
          <button
            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
            onClick={handleTopRated}
          >
            Top Rated Restaurants
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filterdeRestaurent.map((restdata) => (
            <Link
              to={"/restaurant/" + restdata.info.id}
              key={restdata.info.id}
              className="block"
            >
              {true ? (
                <PrometedRestCard dataobj={restdata} />
              ) : (
                <ResturantCard dataobj={restdata} />
              )}
            </Link>
          ))}
        </div>
      </div>
    );
  }
};

export default Body;
