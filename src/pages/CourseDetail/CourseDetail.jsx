import React from "react";
import { fetchAllCourses } from "../Courses/Courses";
import { useLoaderData } from "react-router-dom";
import Rating from "../../components/Rating";
import { BsCalendarDate, BsGlobe } from "react-icons/bs";
import { MdSubtitles } from "react-icons/md";

const CourseDetail = (props) => {
    const course = useLoaderData();

    return (
        <div className="p-4">
            <div className="grid grid-cols-7">
                <div className="col-span-3">
                    <img src={course.thumb} className="w-full" />
                </div>
                <div className="col-span-4 pl-5">
                    <h1 className="font-bold text-3xl">{course.title}</h1>
                    <p>{course.description}</p>
                    <div className="flex items-center gap-x-2 mt-2">
                        <Rating rate={5} id={course.id} />
                        <span className="text-sm font-bold text-orange-400">{"5.0"}</span>
                        <span className="text-sm"> {(23, 234)} Ratings</span>
                    </div>
                    <h4>262,054 already enrolled</h4>
                    <h4>Instructor Most Hamedani</h4>
                    <h4>Instructor Most Hamedani</h4>
                    <div className="flex items-center gap-x-2">
                        <BsCalendarDate />
                        <span>Last updated 8/2015</span>
                    </div>
                    <div className="flex items-center gap-x-2">
                        <BsGlobe />
                        <span className="text-gray-700">English</span>
                    </div>

                    <div className="flex items-center gap-x-2">
                        <MdSubtitles />
                        <span className="text-gray-700">English</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export function fetchCourseDetail({ params }) {
    return fetchAllCourses().find((c) => c.id == params.courseId);
}

export default CourseDetail;
