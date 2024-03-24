import { useState,useEffect } from "react";
import { arr_of_obj_reslist } from "../utils/mockdata";
import ResContainer from "./Restaurant";

const Body = () => {
  const [reslist, setResList] = useState([]);

useEffect(() =>{
    fetchData()
},[])

// const fetchData=async () => {
//    const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
//    const json=await data.json()
//    console.log(json);
//    setResList(json?.data?.cards[2]?.data?.data?.cards)
// }

const fetchData = async () => {
    try {
      const response = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
      const data = await response.json();
         console.log(data);
         setResList(data?.data?.cards[2])
      // Process the data or update state here
    } catch (error) {
      console.error('Error fetching data:', error);
      // Handle the error (e.g., show a message to the user)
    }
  };
  

return (
    <div className="body">
      <div className="search">
        <button
          onClick={() => {
            const filtered = reslist.filter((res) => res.info.avgRating > 4.5);
            setResList(filtered);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
      { reslist.map((data) => (
  <ResContainer key={data.info.id} resdata={data} />
))}

      </div>
    </div>
  );
};
export default Body;
