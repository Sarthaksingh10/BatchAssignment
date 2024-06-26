import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Header from "./Components/Header/Header.jsx";
import Features from "./Components/Features/Features.jsx";
import Footer from "./Components/Footer/Footer.jsx";

const router = createBrowserRouter(
  /* Creating a browser based router*/
  [
    {
      path: "/",
      element: (
        <App />
      ) /*  Defining the main component which will contain all other component*/,
      children: [
        /* Children is used to define nested routes in react-router-dom*/
        {
          path: "",
          element: <Header />,
        },
        {
          path: "Aboutus",
          element: <Footer />,
        },
        {
          path: "pricing",
          element: <App />,
        },
        {
          path: "Features",
          element: <Features />,
        },
      ],
    },
  ]
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
