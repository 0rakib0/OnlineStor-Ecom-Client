import {
  createBrowserRouter,
} from "react-router-dom";
import Root from "../Rooot/Root";
import Home from "../Pages/HomePage/Home/Home";
import SingleProduct from "../Pages/SingleProductView/SingleProduct";
import Register from "../Pages/AuthenticatePage/Register/Register";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/view-product/:id',
        element: <SingleProduct></SingleProduct>
      },
      {
        path: '/register',
        element: <Register></Register>
      }
    ]
  },
]);


export default router