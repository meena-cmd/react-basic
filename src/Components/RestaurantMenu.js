import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchmenu();
  }, []);
  const { resid } = useParams();

  const fetchmenu = async () => {
    const menudata = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=" +
        resid +
        "&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER"
    );
    const json = await menudata.json();
    setResInfo(json?.data);
    setLoading(false);
  };

  if (loading) {
    return <div>Loading...</div>; // Render a loading indicator while data is being fetched
  }
  const { info } = resInfo?.cards[2]?.card?.card;
  const { itemCards } =
    resInfo?.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;

  return (
    <div className="menu">
      <ul>
        <li>
          <h1>{info.name}</h1>
        </li>

        <li>
          {info.cuisines.join(",")} - {info.costForTwoMessage}
        </li>
        <li>{info.avgRating}</li>
        <li>Delivery at {info.sla.deliveryTime} minutes</li>
      </ul>
      <ul>
        <li>
          <h3>Menu</h3>
        </li>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item?.card?.info?.name} - Rs.{item?.card?.info?.price / 100}
          </li>
        ))}
        <li></li>
      </ul>
      <ul>
        <li>
          <h3>Address</h3>
        </li>
        <li>{info.areaName},</li>
        <li>{info.city}</li>
      </ul>
    </div>
  );
};
export default RestaurantMenu;
