import { createBrowserRouter } from "react-router-dom";
import Inventory from "../Inventory/Inventory";
import Main from "../layouts/Main";
import { productAndCartLoader } from "../loaders/productsAndCartLoader";
import Orders from "../Orders/Orders";
import Shop from "../Shop/Shop";

 export const router = createBrowserRouter([
{ path: "/",element:<Main></Main>,children:[
    {path:"/",element:<Shop></Shop>,
     loader:productAndCartLoader},
    {path:"shop",element:<Shop></Shop>,
    loader:productAndCartLoader},
    {path:"orders",element:<Orders></Orders>,
    loader:productAndCartLoader
   },
    {path:"inventory",element:<Inventory></Inventory>},
]}
])