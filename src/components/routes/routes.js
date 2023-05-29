import { createBrowserRouter } from "react-router-dom";
import Inventory from "../Inventory/Inventory";
import Main from "../layouts/Main";
import { productAndCartLoader } from "../loaders/productsAndCartLoader";
import Login from "../Login/Login";
import Orders from "../Orders/Orders";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Shipping from "../Shipping/Shipping";
import Shop from "../Shop/Shop";
import SignUp from "../SignUp/SignUp";

 export const router = createBrowserRouter([
{ path: "/",element:<Main></Main>,children:[
    {path:"/",element:<Shop></Shop>,
     loader:productAndCartLoader},
    {path:"shop",element:<Shop></Shop>,
    loader:productAndCartLoader},
    {path:"orders",element:<PrivateRoute><Orders></Orders></PrivateRoute>,
    loader:productAndCartLoader
   },
    {path:"inventory",element:<Inventory></Inventory>},
    {path:"shipping",element:<Shipping></Shipping>},
    {path:"/login",element:<Login></Login>},
    {path:"/signup",element:<SignUp></SignUp>}
]}
])