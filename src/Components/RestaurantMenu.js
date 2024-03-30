import React from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import DummyCardList from "./DummyCardList";

const RestaurantMenu = () => {
  const { resid } = useParams();
  const resInfo = useRestaurantMenu(resid);

  if (resInfo === null) return <DummyCardList />;

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
