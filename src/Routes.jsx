import React from "react";
import App from "./App";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Courses from "./pages/Courses/Courses";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/courses", element: <Courses /> },
    ],
  },
]);

export default () => <RouterProvider router={router} />;
