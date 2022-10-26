import React, { useContext, useEffect, useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import "./homePage.css";
import Rating from "../../components/Rating.jsx";
import Button from "../../components/Button/Button.jsx";
import AppContext from "../../context/AppContext.jsx";
import Course from "../../components/Course/Course";
import { Link, useLoaderData } from "react-router-dom";
import { fetchAllInstructor, fetchCategories } from "../../context/actions.js";

const HomePage = (props) => {
    const {
        state: { courses, categories, instructors },
        actions: { setCourses, setCategories, setInstructors },
    } = useContext(AppContext);

    const [filterByPopularCourse, setFilterByPopularCourse] = useState(0);

    const coursesData = useLoaderData();

    useEffect(() => {
        (async function () {
            // store courses in global state for caching
            setCourses(coursesData);

            // don't re call api if already fetched categories
            if (!categories) {
                fetchCategories()
                    .then((result) => {
                        // store categories in global state for caching
                        setCategories(result);
                    })
                    .catch((ex) => {});
            }

            // store instructors in global state for caching
            if (!instructors) {
                fetchAllInstructor()
                    .then((result) => {
                        setInstructors(result);
                    })
                    .catch((ex) => {});
            }
        })();
    }, []);

    // const categories = [
    //     { id: 1, name: "Web development" },
    //     { id: 2, name: "App development" },
    //     { id: 7, name: "Mechine Learning" },
    //     { id: 12, name: "Cyber Security" },
    //     { id: 21, name: "Ethical Hacking" },
    //     { id: 3, name: "Graphich design" },
    //     { id: 4, name: "Learning English" },
    //     { id: 5, name: "Video Editing" },
    //     { id: 6, name: "Logo Design" },
    // ];

    function handleFilterPopularCourse(courseId) {
        setFilterByPopularCourse(courseId);
    }

    return (
        <div className="home-page">
            <section className="hero-section !p-0">
                <Swiper
                    slidesPerView={1}
                    onSlideChange={() => console.log("slide change")}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide>
                        <div>
                            <img className="w-full" src="/8801001_8572.jpg" alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        {" "}
                        <div>
                            <img src="/8801001_8572.jpg" alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        {" "}
                        <div>
                            <img src="/8801001_8572.jpg" alt="" />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </section>

            <section>
                <div className="container">
                    <h4 className="section-title">OUR COURSE CATEGORIES</h4>
                    <h1 className="text-3xl text-neutral font-bold text-center">Explore Top Categories</h1>
                    <div className="grid grid-cols-3 mt-10">
                        {categories &&
                            categories.map((cat) => (
                                <div className="flex items-start gap-5 p-5">
                                    <img className="w-10" src="category_1_1.svg" alt="logo" />
                                    <div>
                                        <h4 className="text-2xl text-neutral font-medium">{cat.name}</h4>
                                        <p className="text-neutral/60">
                                            Globally maintain magnetic process with model foster data after ubiuitous
                                            architectures.
                                        </p>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            </section>

            {/******* Core Features *******/}
            <section>
                <div className="!max-w-5xl mx-auto">
                    <h4 className="section-title">MORE ABOUT US</h4>
                    <h1 className="text-3xl text-neutral-900 font-bold text-center">
                        We are innovative educational institution to the creation of the student
                    </h1>
                    <p className="mt-10 text-center text-gray-500">
                        Compellingly procrastinate equity invested markets with efficient process improvements.
                        Collaboratively actualize mission-critical partnerships with integrated portals. Authoritatively
                        optimize low-risk high-yield metrics and plug-and-play potentialities.
                    </p>
                    <div className="mt-10 flex items-center justify-evenly">
                        <li className="list-none flex items-start gap-2">
                            <div>
                                <img src="/counter_1_1.svg" alt="" />
                            </div>
                            <span>
                                <p className="text-2xl text-blue font-bold text-primary-400">250</p>
                                <p className="text-neutral/90 font-medium text-sm">FINISHED WEBINARS</p>
                            </span>
                        </li>
                        <li className="list-none flex items-start gap-2">
                            <div>
                                <img src="/counter_1_1.svg" alt="" />
                            </div>
                            <span>
                                <p className="text-2xl text-blue font-bold text-primary-400">250</p>
                                <p className="text-neutral/90 font-medium text-sm">FINISHED WEBINARS</p>
                            </span>
                        </li>
                        <li className="list-none flex items-start gap-2">
                            <div>
                                <img src="/counter_1_1.svg" alt="" />
                            </div>
                            <span>
                                <p className="text-2xl text-blue font-bold text-primary-400">250</p>
                                <p className="text-neutral/90 font-medium text-sm">FINISHED WEBINARS</p>
                            </span>
                        </li>
                    </div>
                </div>
            </section>

            {/***** More About us *******/}
            <section className="">
                <div className="!max-w-5xl mx-auto">
                    <h4 className="section-title">E-Coaching Core Features</h4>
                    <h1 className="text-3xl text-neutral-900 font-bold text-center">
                        We are innovative educational institution to the creation of the student
                    </h1>
                    <p className="mt-10 text-center text-gray-500">
                        Compellingly procrastinate equity invested markets with efficient process improvements.
                        Collaboratively actualize mission-critical partnerships with integrated portals. Authoritatively
                        optimize low-risk high-yield metrics and plug-and-play potentialities.
                    </p>
                    <div className="mt-10 flex items-center justify-evenly">
                        <li className="list-none flex items-start gap-2">
                            <div>
                                <img src="/counter_1_1.svg" alt="" />
                            </div>
                            <span>
                                <p className="text-2xl text-blue font-bold text-primary-400">250</p>
                                <p className="text-neutral/90 font-medium text-sm">FINISHED WEBINARS</p>
                            </span>
                        </li>
                        <li className="list-none flex items-start gap-2">
                            <div>
                                <img src="/counter_1_1.svg" alt="" />
                            </div>
                            <span>
                                <p className="text-2xl text-blue font-bold text-primary-400">250</p>
                                <p className="text-neutral/90 font-medium text-sm">FINISHED WEBINARS</p>
                            </span>
                        </li>
                        <li className="list-none flex items-start gap-2">
                            <div>
                                <img src="/counter_1_1.svg" alt="" />
                            </div>
                            <span>
                                <p className="text-2xl text-blue font-bold text-primary-400">250</p>
                                <p className="text-neutral/90 font-medium text-sm">FINISHED WEBINARS</p>
                            </span>
                        </li>
                    </div>
                </div>
            </section>

            {/***** Popular courses *******/}
            <section className="">
                <div className="container">
                    <h4 className="section-title">POPULAR COURSES</h4>
                    <h1 className="text-3xl text-neutral-900 font-bold text-center">Our Popular Courses</h1>
                    <p className="!max-w-5xl mx-auto mt-10 text-gray-500">
                        Compellingly procrastinate equity invested markets with efficient process improvements.
                        Collaboratively actualize mission-critical partnerships with integrated portals. Authoritatively
                        optimize low-risk high-yield metrics and plug-and-play potentialities.
                    </p>
                    <div className="mt-10 !max-w-5xl mx-auto flex flex-wrap items-center justify-center gap-3">
                        {categories &&
                            categories.map((cat) => (
                                <li
                                    onClick={() => handleFilterPopularCourse(cat.id)}
                                    className={`list-none px-4 py-1 text-sm rounded cursor-pointer
                            text-neutral-900 font-medium whitespace-nowrap rounded-xl border border-neutral/10
                            ${filterByPopularCourse === cat.id ? "bg-primary-400 text-white" : ""}
                            `}
                                >
                                    {cat.name}
                                </li>
                            ))}
                    </div>
                    {courses && (
                        <>
                            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                                {courses.map((course) => (
                                    <Course course={course} />
                                ))}
                            </div>
                            <Link to="/courses">
                                <Button className="bg-primary-400 block mx-auto mt-5">View more courses</Button>
                            </Link>
                        </>
                    )}
                </div>
            </section>

            {/***** Our Instructor *******/}
            <section className="">
                <div className="container mx-auto">
                    <h4 className="section-title">BEST ONLINE INSTRUCTOR</h4>
                    <h1 className="text-3xl text-neutral-900 font-bold text-center">Our Popular Courses</h1>
                    <p className="mt-10 !max-w-5xl mx-auto text-gray-500">
                        Seamlessly target robust quality vectors and goals oriented architectures propriately enegdrages
                        one-to-one resources after standardized scenarios adaptive experiences exceptional resources
                        service depend lifestyle carefully
                    </p>
                    <div className="mt-10 grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
                        {instructors &&
                            instructors.map((instructor, index) => (
                                <div className="card rounded-md shadow bg-base-100">
                                    <img className="w-full" src={instructor.avatar} alt="" />
                                    <div className="p-4">
                                        <h4 className="text-base font-medium mb-1">{instructor.name}</h4>
                                        <div className="flex items-center gap-x-2">
                                            <Rating rate={instructor.rating.rate} id="d" />{" "}
                                            <span className="text-sm font-bold">({instructor.rating.count})</span>
                                        </div>
                                        <span className="text-sm font-bold mt-1">
                                            {" "}
                                            Total Courses {instructor.totalCourses}
                                        </span>
                                    </div>
                                </div>
                            ))}
                    </div>
                    <Button className="bg-primary-400 block mx-auto mt-5">Show All Instructor</Button>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
