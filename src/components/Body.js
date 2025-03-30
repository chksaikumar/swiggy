import ResturantCard from "./ResturantCard";
import { useState, useEffect } from "react";
import ShimmerCard from "./utils/Shimmer_card";
import { Link } from "react-router-dom";
const Body = () => {
  let [searchText, setsearchText] = useState("");
  let [TopratedRestaurant, setTopratedRestaurant] = useState([]);
  let [filterdeRestaurent, setfilteredRestaurent] = useState([]);

  useEffect(() => {
    fetchdat();
  }, []);

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

  if (TopratedRestaurant.length === 0) {
    return (
      <div className="BodyContainer">
        <div className="Rest-Card">
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
      <div className="BodyContainer">
        <div className="search_container">
          <input
            className="SearchBar"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          ></input>
          <button className="searchbtn" onClick={handleSearch}>
            Search
          </button>
          <button className="topbtn" onClick={handleTopRated}>
            TOP Rated Restaurant
          </button>
        </div>

        <div className="Rest-Card">
          {filterdeRestaurent.map((restdata) => (
            <Link to={"/restaurant/" + restdata.info.id} key={restdata.info.id}>
              {" "}
              <ResturantCard dataobj={restdata} />
            </Link>
          ))}
        </div>
      </div>
    );
  }
};

export default Body;
