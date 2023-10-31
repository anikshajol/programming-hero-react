import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AddCoffee from "./Components/AddCoffee.jsx";
import UpdateCoffee from "./Components/UpdateCoffee.jsx";
import Coffee from "./Coffee.jsx";
import SignUp from "./Components/SignUp.jsx";
import SignIn from "./Components/SignIn";
import Root from "./Layouts/Root";
import AuthProvider from "./Providers/AuthProvider";
import Users from "./Components/Users";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Users2 from "./Components/Users2";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    loader: () => fetch(`http://localhost:5000/coffee`),
    children: [
      {
        path: "/coffee",
        element: <Coffee></Coffee>,
        loader: () => fetch(`http://localhost:5000/coffee`),
      },
      {
        path: "/addCoffee",
        element: <AddCoffee></AddCoffee>,
      },
      {
        path: "/updateCoffee/:id",
        element: <UpdateCoffee></UpdateCoffee>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/coffee/${params.id}`),
      },
      {
        path: "/register",
        element: <SignUp></SignUp>,
      },
      {
        path: "/sign-in",
        element: <SignIn />,
      },
      {
        path: "/users",
        element: <Users />,
        loader: () => fetch(`http://localhost:5000/users`),
      },
      {
        path: "/users2",
        element: <Users2 />,
      },
    ],
  },
]);

// Create a client
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router}></RouterProvider>
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
