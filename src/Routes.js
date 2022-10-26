import React from "react";
import App from "./App";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Courses, { fetchAllCourses } from "./pages/Courses/Courses";
import CourseDetail, { fetchCourseDetail } from "./pages/CourseDetail/CourseDetail";
import AboutPage from "./pages/AboutPage/AboutPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
import BlogPage from "./pages/BlogPage/BlogPage";
import FAQs from "./pages/FAQs/FAQs";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import PrivateRoute from "./middleware/PrivateRoute";
import Checkout from "./pages/Checkout/Checkout";
import NotFound from "./components/NotFound/NotFound";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <NotFound />,
        children: [
            { path: "/", element: <HomePage />, loader: fetchAllCourses },
            { path: "/courses", element: <Courses />, loader: fetchAllCourses },
            {
                path: "/course-detail/:courseId",
                loader: fetchCourseDetail,
                element: <CourseDetail />,
            },
            { path: "/login", element: <LoginPage /> },
            {
                path: "/checkout/:courseId",
                loader: fetchCourseDetail,
                element: (
                    <PrivateRoute>
                        <Checkout />
                    </PrivateRoute>
                ),
            },
            {
                path: "/profile/:id",
                element: (
                    <PrivateRoute>
                        <ProfilePage />
                    </PrivateRoute>
                ),
            },
            { path: "/registration", element: <RegistrationPage /> },
            { path: "/about", element: <AboutPage /> },
            { path: "/blogs", element: <BlogPage /> },
            { path: "/faq", element: <FAQs /> },
        ],
    },
]);

export default () => <RouterProvider router={router} />;
