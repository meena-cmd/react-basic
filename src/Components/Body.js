import { useState, useEffect } from "react";
import ResContainer from "./Restaurant";
import DummyCardList from "./Dummy";

//*whenever state variables update,react triggers a reconciliation cycle(re-renders the component)
const Body = () => {
  const [resList, setResList] = useState([]);
  const [filterRestaurant, setFilterRestaurant] = useState([]);

  const [inputFilter, setInputFilter] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  console.log("body render");

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=8.764166099999999&lng=78.1348361&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    setResList(
      json?.data.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterRestaurant(
      json?.data.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return resList.length === 0 ? (
    <DummyCardList />
  ) : (
    <div className="body">
      <div className="search_container">
        <input
          type="text"
          placeholder="Type Restaurant"
          value={inputFilter}
          onChange={(e) => {
            setInputFilter(e.target.value);
          }}
        />
        <button
          className="searchbtn"
          onClick={() => {
            const filterrestaurant = resList.filter((res) =>
              res.info.name.toLowerCase().includes(inputFilter.toLowerCase())
            );
            setFilterRestaurant(filterrestaurant);
          }}
        >
          Search
        </button>
        <button
          className="filter"
          onClick={() => {
            const filtered = resList.filter((res) => res.info.avgRating > 4.3);
            setFilterRestaurant(filtered);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="res-container">
        {filterRestaurant.map((data) => (
          <ResContainer key={data?.info?.id} resdata={data} />
        ))}
      </div>
    </div>
  );
};
export default Body;
