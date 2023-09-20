import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Pages/Home/Home";
import Products from "../Pages/Products/Products";
import Dashbord from "../Pages/Dashbord/Dashbord";

import SingleProduct from "../Pages/SingleProduct/SingleProduct";
import DashboardLayouts from "../DashboardLayouts/DashboardLayouts";
import Profile from "../Pages/Profile/Profile";
import EditProfile from "../Pages/EditProfile/EditProfile";

const myCreatedRoutes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/products",
        element: <Products></Products>,
        loader: () => fetch(`https://dummyjson.com/products`),
      },
      {
        path: "/products/:id",
        element: <SingleProduct></SingleProduct>,
        // loader: ({ params }) =>
        //   fetch(`https://dummyjson.com/product/${params.id}`),
      },
      {
        path: "/dashboard",
        element: <DashboardLayouts></DashboardLayouts>,
        children: [
          {
            path: "/dashboard",
            element: <Dashbord></Dashbord>,
          },
          {
            path: "/dashboard/profile",
            element: <Profile></Profile>,
          },
          {
            path: "/dashboard/edit-profile",
            element: <EditProfile></EditProfile>,
          },
        ],
      },
    ],
  },
]);

export default myCreatedRoutes;
