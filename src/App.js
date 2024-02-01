import React from "react";
import { RouterProvider } from "react-router-dom";
import { route } from "./components/Routes/Route";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div>
      <RouterProvider router={route}></RouterProvider>
      <Toaster />
    </div>
  );
}

export default App;
