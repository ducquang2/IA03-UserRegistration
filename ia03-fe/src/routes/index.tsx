import { createBrowserRouter } from "react-router-dom";

import RootLayout from "./RootLayout";

import Home from "../pages/home";
import Register from "../pages/register";
import Signin from "../pages/signin";
import Users from "../pages/users";
import ErrorPage from "./ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/users",
        element: <Users />,
      },
      {
        path: "/login",
        element: <Signin />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
