import { useState, useEffect } from "react";
import ResContainer from "./Restaurant";
import DummyCardList from "./DummyCardList";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

//*whenever state variables update,react triggers a reconciliation cycle(re-renders the component)
const Body = () => {
  const [resList, setResList] = useState([]);
  const [filterRestaurant, setFilterRestaurant] = useState([]);

  const [inputFilter, setInputFilter] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    setResList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus=useOnlineStatus()
if (onlineStatus === false){
  return(<h1>you are lost in your network</h1>)
}
 

return resList?.length === 0 ? (
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
            const filterrestaurant = resList?.filter((res) =>
              res?.info?.name.toLowerCase().includes(inputFilter.toLowerCase())
            );
            setFilterRestaurant(filterrestaurant);
          }}
        >
          Search
        </button>
        <button
          className="filter"
          onClick={() => {
            const filtered = resList?.filter((res) => res?.info?.avgRating > 4.3);
            setFilterRestaurant(filtered);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="res-container">
        {filterRestaurant?.map((data) => (
         <Link key={data?.info?.id} to={"/restaurant/"+data?.info?.id}><ResContainer resdata={data} /></Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
