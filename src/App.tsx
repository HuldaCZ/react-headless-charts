import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import viteLogo from "/vite.svg";
import reactLogo from "./assets/react.svg";
import { BarChartPage } from "./Pages";

import styles from "./App.module.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <BarChartPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
