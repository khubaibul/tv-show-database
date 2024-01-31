import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Pages/Shows/Layouts/MainLayout";
import ErrorPage from "../Pages/Shared/ErrorPage";
import LandingPage from "../Pages/LandingPage/LandingPage";

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
    ],
  },
]);
