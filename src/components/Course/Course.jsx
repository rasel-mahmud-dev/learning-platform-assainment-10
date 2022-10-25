import React from 'react'
// import fullPath from "src/utils/fullPath"
import { Link } from "react-router-dom"
import "./course.css"
import Rating from "../Rating"

export default function Course({ course }) {
    return (
      <div className="card !rounded-lg bg-white shadow-xs border ">
        <Link to={`/course-detail/${course.id}`} className="">
            <div className="relative">
                <div className="">
                    <img className="w-full" src={(course.thumb)} alt="car!" />
                    <div className="p-2">
                        <h1 className="">{course.title}</h1>
                        <h5 className="text-xs text-gray-400">{"Mosh Hamedani"}</h5>
                         <div className="flex items-center gap-x-2 mt-2">
                         <span className="text-xs font-bold">{"2.0"}</span>
                         <Rating rate={2} id={course.id}/>
                         <span className="text-xs"> {23,234}</span>
                        </div>
                        <h3 className="text-sm text-gray-800 font-bold mt-1">
                         
                        <span>$30</span>
                        <span className="text-gray-400 ml-3">$35</span>
                        </h3>
                    </div>
                </div>
                </div>

        </Link>
                </div>
    )
}
