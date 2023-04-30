
import { PATHS } from "../constants";
import CartPage from "../pages/CartPage/CartPage";
import HomePage from "../pages/HomePage/HomePage";

export const router = [ 
    {index:true ,element :<HomePage/>},
    {path:PATHS.CART ,element :<CartPage/>}
]