import {
  createBrowserRouter,
} from "react-router-dom";
import Root from "../Rooot/Root";
import Home from "../Pages/HomePage/Home/Home";
import SingleProduct from "../Pages/SingleProductView/SingleProduct";
import Register from "../Pages/AuthenticatePage/Register/Register";
import Login from "../Pages/AuthenticatePage/Login/Login";
import PrivetRout from "./PrivetRouts";
import ProductCard from "../Pages/ProductCard/ProductCard";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
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
      },
      {
        path:'/login',
        element: <Login></Login>
      },
      {
        path:'/card-items',
        element: <PrivetRout><ProductCard></ProductCard></PrivetRout>
      }
      
    ]
  },
]);


export default router