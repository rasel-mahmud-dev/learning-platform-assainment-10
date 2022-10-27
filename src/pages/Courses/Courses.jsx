import React, { useContext, useEffect, useState } from "react";
import AppContext from "../../context/AppContext";
import Course from "../../components/Course/Course";
import Sidebar from "../../components/Sidebar/Sidebar";
import Rating from "../../components/Rating";
import api from "../../axios/index.js";
import { useLoaderData } from "react-router-dom";
import { fetchCategories, fetchCourseCount } from "../../context/actions";
import { FaFilter, FaTimes } from "react-icons/fa";
import Button from "../../components/Button/Button";
import Loader from "../../components/Loader";

const languageData = ["Bangla", "English", "Hindy"];

const Courses = () => {
    const {
        state: { categories, courses },
        actions: { setCourses, setCategories },
    } = useContext(AppContext);

    const [isOpenSidebar, setOpenSidebar] = useState(false);
	const [courseLoading, setCourseLoading] = useState(true)
	
    const [filter, setFilter] = useState({
        category: [],
        ratings: [],
        language: [],
    });
	

    const [filteredCourses, setFilteredCourses] = useState([]);
    const [totalCourse, setTotalCourse] = useState(0);

    // initial data fetching
    useEffect(() => {
        // count total courses in server
        fetchCourseCount().then(({ data }) => {
            setTotalCourse(data);
        });
	
	    fetchAllCourses().then(coursesData=>{
		    // store courses in global state for caching
		    if(coursesData) {
			    setCourses(coursesData);
			    setFilteredCourses(coursesData);
			    setCourseLoading(false)
		    }
	    }).catch(ex=>{
		    setCourseLoading(false)
	    })
	    
        // store categories in global state for caching
        if (!categories) {
            fetchCategories()
                .then((result) => {
                    setCategories(result);
                })
                .catch((ex) => {});
        }

        handleWindowResize();
        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    // observation for filter category
    useEffect(() => {
		
		setCourseLoading(true)
		
        let categoryIds = [];
        let languages = filter.language;
        let ratings = filter.ratings;
        if (filter.category.length) {
            categoryIds = filter.category.map((c) => c.id);
        }
		
        api.post("/api/courses/filter", { categoryIds, languages, ratings })
            .then(({ data, status }) => {
                if (status === 200) {
                    setFilteredCourses(data);
                }
	            setCourseLoading(false)
            })
            .catch((ex) => {
                console.log(ex);
	            setCourseLoading(false)
            });
    }, [filter.category.length, filter.ratings.length, filter.language.length]);

    // widow resize handler
    function handleWindowResize() {
        if (window.innerWidth > 768) {
            setOpenSidebar(false);
        }
    }

    // click on category name
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

    // click on rating
    function filterByRatingHandler(rateNumber) {
        if (filter.ratings.includes(rateNumber)) {
            setFilter((prevState) => ({
                ...prevState,
                ratings: prevState.ratings.filter((rate) => rate !== rateNumber),
            }));
        } else {
            setFilter((prevState) => ({ ...prevState, ratings: [...prevState.ratings, rateNumber] }));
        }
    }

    // click on language
    function filterByLanguageHandler(lang) {
        if (filter.language.includes(lang)) {
            setFilter((prevState) => ({ ...prevState, language: prevState.language.filter((l) => l !== lang) }));
        } else {
            setFilter((prevState) => ({ ...prevState, language: [...prevState.language, lang] }));
        }
    }

    // reset all filter fields
    function handleResetFilter() {
        setFilter({
            category: [],
            ratings: [],
            language: [],
        });
    }
    return (
        <div className="container !px-0">
            <div className="">
                <Sidebar isOpen={isOpenSidebar} onClose={() => setOpenSidebar(!isOpenSidebar)}>
                    <div className="p-5">
                        <h1 className="text-base-500 flex items-center justify-between">
                            <span className="text-lg font-bold ">Filter</span>

                            <Button onClick={handleResetFilter} className="bg-primary-400 !py-1 !px-2 flex items-center gap-x-1">
                                Clear All
                                <FaTimes className="text-lg" />
                            </Button>
                        </h1>
                        <h1 className="font-medium text-base text-base-500 mt-4">Categories</h1>
                        {filter.category.length ? (
                            <div className="mt-2 flex flex-wrap gap-2">
                                {filter.category.map((cat, index) => (
                                    <div className="badge flex items-center gap-x-1" key={index}>
                                        <span>{cat.name}</span>
                                        <FaTimes className="text-xs" onClick={() => filterByCategoryHandler(cat)} />
                                    </div>
                                ))}
                            </div>
                        ) : (
                            ""
                        )}
                        <div className="mt-1">
                            {categories &&
                                categories.map((category) => (
                                    <div className="text-base-700 flex items-center gap-x-2 cursor-pointer" key={category.id}>
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

                        <div>
                            <h1 className="font-bold text-lg text-base-500 mt-3">Rating</h1>
                            <div className="">
                                {new Array(5).fill(0).map((_, index) => (
                                    <div className="text-base-700 flex items-center gap-x-2 cursor-pointer" key={index}>
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

                        <div>
                            <h1 className="font-bold text-lg text-base-500 mt-3">Language</h1>
                            <div className="">
                                {languageData.map((language) => (
                                    <div
                                        className="text-base-700 flex items-center gap-x-2 cursor-pointer"
                                        key={language}
                                    >
                                        <input
                                            onChange={() => filterByLanguageHandler(language)}
                                            type="checkbox"
                                            id={language}
                                            className="checkbox !rounded checkbox-xs checkbox-primary "
                                            checked={filter.language.includes(language)}
                                        />
                                        <label
                                            htmlFor={language}
                                            className="py-1 font-medium flex items-center gap-x-2"
                                        >
                                            {language}
                                        </label>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </Sidebar>
                <div className={`content ${isOpenSidebar ? "sidebar-with-content" : ""}`}>
                    <div className="">
                        <div className="flex justify-between items-center my-4">
                            <h1 className="text-2xl font-bold">Courses ({totalCourse}) </h1>
                            <div
                                className="w-9 h-9 bg-primary-400/60 rounded-full md:hidden flex justify-center items-center"
                                onClick={() => setOpenSidebar(!isOpenSidebar)}
                            >
                                <FaFilter className="font-medium text-sm " />
                            </div>
                        </div>
	                    {!courseLoading && <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                            {filteredCourses.length
                                ? filteredCourses?.map((course) => <Course course={course} key={course.id} />)
                                : courses &&
                                  courses.length &&
                                  courses?.map((course) => <Course course={course} key={course.id} />)}
                        </div>}
	                    
	                    {/***** Loading ******/}
	                    <div>
		                    {courseLoading && (
								<Loader title="Fetching Courses" />
		                    )}
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
