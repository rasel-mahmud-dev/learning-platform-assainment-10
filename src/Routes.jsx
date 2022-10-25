import React from "react";
import App from "./App";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Courses from "./pages/Courses/Courses";
import CourseDetail, { fetchCourseDetail } from "./pages/CourseDetail/CourseDetail.jsx";
import AboutPage from "./pages/AboutPage/AboutPage.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { path: "/", element: <HomePage /> },
            { path: "/courses", element: <Courses /> },
            {
                path: "/course-detail/:courseId",
                loader: fetchCourseDetail,
                element: <CourseDetail />,
            },
            { path: "/about", element: <AboutPage /> },
        ],
    },
]);

export default () => <RouterProvider router={router} />;
