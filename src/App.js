import React from "react";
import { RouterProvider } from "react-router-dom";
import { route } from "./components/Routes/Route";

function App() {
  return (
    <div>
      <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;
