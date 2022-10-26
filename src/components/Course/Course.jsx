import React from "react";
import { Link } from "react-router-dom";
import "./course.css";
import Rating from "../Rating";

export default function Course({ course }) {
    return (
        <div className="card !rounded-lg shadow bg-base-100 dark:bg-primary-5">
            <Link to={`/course-detail/${course.id}`} className="">
                <div className="relative">
                    <div className="">
                        <img className="w-full" src={course.thumb} alt="car!" />
                        <div className="p-2">
                            <h1 className="">{course.title}</h1>
                            <h5 className="text-xs text-gray-400">{course?.instructorName}</h5>
                            <div className="flex items-center gap-x-2 mt-2">
                                <span className="text-xs font-bold">{course.rating?.rate}</span>
                                <Rating rate={course.rating?.rate} id={course.id} />
                                <span className="text-xs"> {course.rating?.total}</span>
                            </div>
                            <h3 className="text-sm text-gray-800 font-bold mt-1">
                                <span>${course.price}</span>
                                <span className="text-gray-400 ml-3">${course.price}</span>
                            </h3>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
}
