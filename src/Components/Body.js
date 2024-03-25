import { useState, useEffect } from "react";
import ResContainer from "./Restaurant";
import DummyCardList from "./Dummy";

//whenever state variables update,react triggers a reconciliation cycle(re-renders the component)
const Body = () => {
  const [resList, setResList] = useState([]);

  //   useEffect(() => {
  //     fetchData()
  //   },[]);

  useEffect(() => {
    console.log("Fetching data...");
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
        
    const json = await data.json();
    console.log(json)
    setResList(json?.[4]?.card?.card.gridElements.infoWithStyle.restaurants);
  };

  // const fetchData = async () =>
  //     try {
  //       const response = await fetch(
  //         "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
  //       );

  //       if (!response.ok) {
  //         throw new Error("Network response was not ok");

  //       console.log("no response")
  //     const json = await response.json();
  //       console.log("API Response:", json);
  //       console.log("State before update:", resList);
  //       setResList(json?.data[0]?.card?.card?.gridElements?.infoWithStyle?.info || []);
  //   console.log("API Response:", json);
  //   const extractedData = json?.data?.cards || [];
  //   console.log("Extracted Data:", extractedData);
  //   const updatedList = [...extractedData]; // Create a new array
  // setResList(updatedList);

  //     catch (error) {
  //       console.error("Error fetching data:", error);

  //     }
  //   };

  return resList.length === 0 ? (
    <DummyCardList />
  ) : (
    <div className="body">
      <div className="search">
        <button
          onClick={() => {
            const filtered = resList.filter((res) => res.info.avgRating > 4.5);
            setResList(filtered);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {resList?.map((data) => (
          <ResContainer key={data.info?.id || "fallbackId"} resdata={data} />
        ))}
      </div>
    </div>
  );
};
export default Body;
