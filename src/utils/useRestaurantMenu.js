import { useEffect, useState } from "react";
const useRestaurantMenu = (resid) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchmenu();
    console.log(fetchmenu);
  }, []);

  const fetchmenu = async () => {
    const menudata = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=" +
        resid +
        "&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER"
    );
    const json = await menudata.json();
    setResInfo(json?.data);
  };

  return resInfo;
};
export default useRestaurantMenu;
