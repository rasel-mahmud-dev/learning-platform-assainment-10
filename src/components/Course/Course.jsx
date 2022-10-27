import React from "react";
import { Link } from "react-router-dom";
import Rating from "../Rating";
import calcDiscountPrice from "../../utils/calcDiscountPrice";

export default function Course({ course }) {
    return (
        <div className="card !rounded-lg shadow bg-base-100 dark:bg-primary-5">
            <Link to={`/course-detail/${course.id}`} className="">
                <div className="relative">
                    <div className="">
                        <img className="w-full" src={course.thumb} alt="car!" />
                        <div className="p-2">
                            <h1 className="dark:text-base-100 text-neutral-focus text-xl md:text-base mb-2">{course.title}</h1>
                            <h5 className="text-sm dark:text-base-300/90 text-neutral/80">{course?.instructorName}</h5>
                            <div className="flex items-center gap-x-2 mt-2">
                                <span className="text-xs font-semibold">{course.rating?.rate.toFixed(1)}</span>
                                <Rating rate={course.rating?.rate} id={course.id} />
                                <span className="text-xs font-semibold"> ({course.rating?.total})</span>
                            </div>
                            <h3 className="text-sm text-neutral dark:text-base-300  mt-2">
                                <span className="text-primary-300 font-semibold">${course.price}</span>
                                <span className="text-gray-400 ml-3 line-through">${calcDiscountPrice(course.price, course.discount)} Off</span>
                            </h3>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
}
