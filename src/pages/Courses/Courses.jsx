import React, { useContext, useEffect, useState } from "react";
import AppContext from "../../context/AppContext";
import Course from "../../components/Course/Course";
import Sidebar from "../../components/Sidebar/Sidebar";
import Rating from "../../components/Rating";
import api from "../../axios/index.js";
import { useLoaderData } from "react-router-dom";
import { fetchCategories } from "../../context/actions";

const Courses = () => {
    const {
        state: { categories, courses },
        actions: { setCourses, setCategories },
    } = useContext(AppContext);

    const [isOpenSidebar, setOpenSidebar] = useState(true);

    let coursesData = useLoaderData();

    useEffect(() => {
        (async function () {
            // store courses in global state for caching
            setCourses(coursesData);

            // store categories in global state for caching
            if (!categories) {
                fetchCategories()
                    .then((result) => {
                        setCategories(result);
                    })
                    .catch((ex) => {});
            }
        })();
    }, []);

    const [filter, setFilter] = useState({
        category: [],
        ratings: [],
        language: "",
        priceRange: [0, 100],
        duration: 100,
    });

    function filterByCategoryHandler(category) {
        let updateFilter = [...filter.category];
        let existIndex = updateFilter.findIndex((cat) => cat.id === category.id);
        if (existIndex !== -1) {
            updateFilter.splice(existIndex, 1);
        } else {
            updateFilter.push(category);
        }

        setFilter((prev) => ({
            ...prev,
            category: updateFilter,
        }));
    }

    function filterByRatingHandler(rateNumber) {
        alert("ASD");
    }

    return (
        <div className="container">
            <div className="">
                <Sidebar isOpen={isOpenSidebar} onClose={() => setOpenSidebar(!isOpenSidebar)}>
                    <div className="p-5">
                        <h1 className="font-bold text-lg text-base-500">Categories</h1>
                        {filter.category.length ? (
                            <div className="mt-2 flex flex-wrap gap-2">
                                {filter.category.map((cat) => (
                                    <div className="badge">{cat.name}</div>
                                ))}
                            </div>
                        ) : (
                            ""
                        )}
                        <div className="mt-1">
                            {categories &&
                                categories.map((category) => (
                                    <div className="text-base-700 flex items-center gap-x-2 cursor-pointer">
                                        <input
                                            onChange={() => filterByCategoryHandler(category)}
                                            type="checkbox"
                                            id={category.name}
                                            className="checkbox !rounded checkbox-xs checkbox-primary "
                                            checked={!!filter.category.find((cat) => cat.id === category.id)}
                                        />
                                        <label htmlFor={category.name} className="py-1 font-medium">
                                            {category.name}
                                        </label>
                                    </div>
                                ))}
                        </div>

                        <h1 className="font-bold text-lg text-base-500 mt-3">Rating</h1>
                        <div className="">
                            {new Array(5).fill(0).map((_, index) => (
                                <div className="text-base-700 flex items-center gap-x-2 cursor-pointer">
                                    <input
                                        onChange={() => filterByRatingHandler(index + 1)}
                                        type="checkbox"
                                        id={"rate-" + index}
                                        className="checkbox !rounded checkbox-xs checkbox-primary "
                                        checked={filter.ratings.includes(index + 1)}
                                    />
                                    <label
                                        htmlFor={"rate-" + index}
                                        className="py-1 font-medium flex items-center gap-x-2"
                                    >
                                        {index + 1}
                                        <Rating rate={index + 1} id={"rate-" + index} />
                                    </label>
                                </div>
                            ))}
                        </div>
                    </div>
                </Sidebar>
                <div className="content">
                    <div className="ml-4">
                        <h1 className="text-xl font-bold mt-4 mb-3">Courses </h1>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                            {courses && courses?.map((course) => <Course course={course} key={course.id} />)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Courses;

export function fetchAllCourses() {
    return api
        .get("/api/courses")
        .then(({ data, status }) => {
            return data;
        })
        .catch((ex) => {
            return null;
        });
}
