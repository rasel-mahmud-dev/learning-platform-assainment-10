import React, { useContext, useEffect, useState } from "react";
import AppContext from "../../context/AppContext.jsx";
import Course from "../../components/Course/Course.jsx";

const Courses = () => {
    const { state, setCourses } = useContext(AppContext);
    console.log(state);

    useEffect(() => {
        setCourses(fetchAllCourses());
    }, []);

    return (
        <div className="px-4">
            <div className="content">
                <div className="ml-4">
                    <h1 className="text-xl font-bold mt-4 mb-3">Courses </h1>
                    <div className="grid grid-cols-3 gap-4">
                        {state?.courses.map((course) => (
                            <Course course={course} key={course.id} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Courses;

export function fetchAllCourses() {
    return [
        {
            title: "Full stack web development",
            id: 1,
            thumb: "/images-2.jpeg",
            description:
                "Dummy course content best for mern stack web developing course. best online course out main aim to give student best knowledge ",
        },
        {
            title: "Full stack web development",
            id: 2,
            thumb: "/images.jpeg",
            description:
                "Dummy course content best for mern stack web developing course. best online course out main aim to give student best knowledge",
        },
        {
            title: "Full stack web development",
            id: 3,
            thumb: "/images-2.jpeg",
            description:
                "Dummy course content best for mern stack web developing course. best online course out main aim to give student best knowledge",
        },
        {
            title: "Full stack web development",
            id: 4,
            thumb: "/images.jpeg",
            description:
                "Dummy course content best for mern stack web developing course. best online course out main aim to give student best knowledge",
        },
        {
            title: "Full stack web development",
            id: 5,
            thumb: "/images-2.jpeg",
            description:
                "Dummy course content best for mern stack web developing course. best online course out main aim to give student best knowledge",
        },
        {
            title: "Full stack web development",
            id: 6,
            thumb: "/images.jpeg",
            description:
                "Dummy course content best for mern stack web developing course. best online course out main aim to give student best knowledge",
        },
        {
            title: "Full stack web development",
            id: 7,
            thumb: "/images-2.jpeg",
            description:
                "Dummy course content best for mern stack web developing course. best online course out main aim to give student best knowledge",
        },
        {
            title: "Full stack web development",
            id: 8,
            thumb: "/images-2.jpeg",
            description:
                "Dummy course content best for mern stack web developing course. best online course out main aim to give student best knowledge",
        },
        {
            title: "Full stack web development",
            id: 9,
            thumb: "/images.jpeg",
            description:
                "Dummy course content best for mern stack web developing course. best online course out main aim to give student best knowledge",
        },
        {
            title: "Full stack web development",
            id: 10,
            thumb: "/images-2.jpeg",
            description:
                "Dummy course content best for mern stack web developing course. best online course out main aim to give student best knowledge",
        },
        {
            title: "Full stack web development",
            id: 11,
            thumb: "/images.jpeg",
            description:
                "Dummy course content best for mern stack web developing course. best online course out main aim to give student best knowledge",
        },
        {
            title: "Full stack web development",
            id: 12,
            thumb: "/images-2.jpeg",
            description:
                "DDummy course content best for mern stack web developing course. best online course out main aim to give student best knowledge",
        },
    ];
}
