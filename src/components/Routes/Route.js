import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Pages/Shows/Layouts/MainLayout";
import ErrorPage from "../Pages/Shared/ErrorPage";
import LandingPage from "../Pages/LandingPage/LandingPage";
import Show from "../Pages/Show/Show";
import Bookings from "../Pages/Bookings/Bookings";

export const route = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/show/:id",
        element: <Show />,
      },
      {
        path: "/bookings",
        element: <Bookings />,
      },
    ],
  },
]);
