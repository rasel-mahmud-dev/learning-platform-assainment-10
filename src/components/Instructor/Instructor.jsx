import React from "react";
import Rating from "../Rating";

const Instructor = ({ instructor }) => {
    return (
        <div className="card !rounded-lg shadow bg-base-100 dark:bg-primary-5">
            <img className="w-full" src={instructor?.avatar} alt="" />
            <div className="p-4">
                <h4 className="text-base font-medium mb-1">{instructor.name}</h4>
                <div className="flex items-center gap-x-2">
                    <Rating rate={instructor?.rating?.rate} id={instructor.id} />{" "}
                    <span className="text-sm font-bold">({instructor?.rating?.count})</span>
                </div>
                <span className="text-sm font-bold mt-1"> Total Courses {instructor?.totalCourses}</span>
            </div>
        </div>
    );
};

export default Instructor;
