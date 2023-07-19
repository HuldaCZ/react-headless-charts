import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import styles from "./App.module.scss";
import { BarChartPage } from "./Pages";

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
