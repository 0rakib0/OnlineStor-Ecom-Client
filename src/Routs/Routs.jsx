import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../Rooot/Root";
import Home from "../Pages/HomePage/Home/Home";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
          path:'/',
          element: <Home></Home>
        }
      ]
    },
  ]);
  

  export default router