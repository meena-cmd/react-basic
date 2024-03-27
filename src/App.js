import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import { createBrowserRouter,RouterProvider, Outlet} from "react-router-dom"; 
import About from "./Components/About";
import Contact from "./Components/Contact";
import Error from "./Components/Error";
import RestaurantMenu from "./Components/RestaurantMenu";



const AppLayout = () => {
  return (
    <div className="App">
      <Header />
      
      <Outlet />
    
    </div>
  );
};


const AppRouter=createBrowserRouter(
  [
    {
      path:"/",
      element:<AppLayout/>,
      children:[
        {
         path:"/",
         element:<Body/>
   
        },
         {
           path:"/about",
           element:<About/>
         },
         {
           path:"/contact",
           element:<Contact/>
         },
         {
          path:"/restaurant/:resid",
          element:<RestaurantMenu/>

         },
   
       ],
      errorElement:<Error/>
    },
    
    

  ]
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={AppRouter} />);
