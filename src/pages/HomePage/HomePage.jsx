import React, { useContext, useEffect, useState } from "react";

import "./homePage.css";
import Button from "../../components/Button/Button";
import AppContext from "../../context/AppContext";
import Course from "../../components/Course/Course";
import { Link, useLoaderData } from "react-router-dom";
import { fetchAllInstructor, fetchCategories } from "../../context/actions";
import Instructor from "../../components/Instructor/Instructor";
import HeroSlider from "../../components/HeroSlider/HeroSlider";
import TestimonialSlider from "../../components/TestimonialSlider/TestimonialSlider";

const HomePage = (props) => {
    const {
        state: { courses, categories, instructors },
        actions: { setCourses, setCategories, setInstructors },
    } = useContext(AppContext);

    const [filterByPopularCourse, setFilterByPopularCourse] = useState(0);
    const [filterCourses, setFilterCourses] = useState([]);

    const coursesData = useLoaderData();

    useEffect(() => {
        (async function () {
            // store courses in global state for caching
            setCourses(coursesData);
            setFilterCourses(coursesData);
            setFilterByPopularCourse(0);

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

    function handleFilterPopularCourse(courseId) {
        if (courseId === 0) {
            setFilterCourses(courses);
        } else {
            let filtered = courses.filter((course) => course.categoryId === courseId);
            setFilterCourses(filtered);
        }
        setFilterByPopularCourse(courseId);
    }

    const data = [
        { category: "Data Science", courses: "425", image: "/data-science.jpg" },

        { category: "Web Development", courses: "70", image: "/web-development.png" },

        { category: "Business", courses: "1095", image: "/teamwork-3213924__340.webp" },

        {
            category: "Computer Science",
            courses: "668",
            image: "/businessman-searching-big-datadigital-transformation-260nw-1496224217.webp",
        },

        { category: "Health", courses: "471", image: "/istockphoto-478360036-612x612.jpg" },

        { category: "Social Sciences", courses: "401", image: "/social-science.png" },

        { category: "Personal Development", courses: "137", image: "/Personal-Development.png" },

        { category: "Arts and Humanities", courses: "338", image: "/Arts-and-Humanities.jpg" },

        {
            category: "Physical Science and Engineering",
            courses: "413",
            image: "/Physical-Science-and-Engineering.jpg",
        },

        { category: "Language Learning", courses: "150", image: "/Language-Learning.jpeg" },

        { category: "Information Technology", courses: "145", image: "/Information-Technology-thumbnail.jpg" },

        { category: "Math and Logic", courses: "70", image: "/Math-and-Logic.jpg" },
    ];

    return (
        <div className="home-page">
            <section className="hero-section !p-0">
                <HeroSlider />
            </section>

            {/******** Explore Top Categories *********/}
            <section>
                <div className="container">
                    <h4 className="section-title">OUR COURSE CATEGORIES</h4>
                    <h1 className="section-sub-title">Explore Top Categories</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 mt-6 md:mt-10">
                        {categories &&
                            categories.map((cat, index) => (
                                <div
                                    className="flex flex-col md:flex-row justify-center items-start gap-5 p-5"
                                    key={index}
                                >
                                    <img className="w-10 mx-auto md:mx-none " src="/category_1_1.svg" alt="logo" />
                                    <div className="text-center md:text-start">
                                        <h4 className="text-2xl text-neutral dark:text-base-300/90 font-medium">
                                            {cat.name}
                                        </h4>
                                        <p className="dark:text-base-300/70 text-neutral/90 mt-2">
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
            {/*<section>*/}
            {/*    <div className="!max-w-5xl mx-auto">*/}
            {/*        <h4 className="section-title">MORE ABOUT US</h4>*/}
            {/*        <h1 className="section-sub-title">*/}
            {/*            We are innovative educational institution to the creation of the student*/}
            {/*        </h1>*/}
            {/*        <p className="mt-10 text-center section-desc">*/}
            {/*            Compellingly procrastinate equity invested markets with efficient process improvements.*/}
            {/*            Collaboratively actualize mission-critical partnerships with integrated portals. Authoritatively*/}
            {/*            optimize low-risk high-yield metrics and plug-and-play potentialities.*/}
            {/*        </p>*/}
            {/*        <div className="mt-10 flex items-center justify-evenly">*/}
            {/*            <li className="list-none flex items-start gap-2">*/}
            {/*                <div>*/}
            {/*                    <img src="/counter_1_1.svg" alt="" />*/}
            {/*                </div>*/}
            {/*                <span>*/}
            {/*                    <p className="text-2xl text-blue font-bold text-primary-400">250</p>*/}
            {/*                    <p className="dark:text-base-300/70 text-neutral/90 font-medium text-sm">*/}
            {/*                        FINISHED WEBINARS*/}
            {/*                    </p>*/}
            {/*                </span>*/}
            {/*            </li>*/}
            {/*            <li className="list-none flex items-start gap-2">*/}
            {/*                <div>*/}
            {/*                    <img src="/counter_1_1.svg" alt="" />*/}
            {/*                </div>*/}
            {/*                <span>*/}
            {/*                    <p className="text-2xl text-blue font-bold text-primary-400">250</p>*/}
            {/*                    <p className="dark:text-base-300/70 text-neutral/90 font-medium text-sm">*/}
            {/*                        FINISHED WEBINARS*/}
            {/*                    </p>*/}
            {/*                </span>*/}
            {/*            </li>*/}
            {/*            <li className="list-none flex items-start gap-2">*/}
            {/*                <div>*/}
            {/*                    <img src="/counter_1_1.svg" alt="" />*/}
            {/*                </div>*/}
            {/*                <span>*/}
            {/*                    <p className="text-2xl text-blue font-bold text-primary-400">250</p>*/}
            {/*                    <p className="dark:text-base-300/70 text-neutral/90 font-medium text-sm">*/}
            {/*                        FINISHED WEBINARS*/}
            {/*                    </p>*/}
            {/*                </span>*/}
            {/*            </li>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</section>*/}

            {/***** More About us *******/}
            <section className="">
                <div className="!max-w-5xl mx-auto px-4">
                    <h4 className="section-title">MORE ABOUT US</h4>
                    <h1 className="section-sub-title">
                        We are innovative educational institution to the creation of the student
                    </h1>
                    <p className="mt-10 text-center section-desc">
                        Compellingly procrastinate equity invested markets with efficient process improvements.
                        Collaboratively actualize mission-critical partnerships with integrated portals. Authoritatively
                        optimize low-risk high-yield metrics and plug-and-play potentialities.
                    </p>
                    <div className="mt-10 flex flex-col md:flex-row gap-10 md:gap-2 items-center justify-evenly ">
                        <li className="list-none flex items-center md:items-start gap-2 flex-col md:flex-row text-center md:text-start">
                            <div>
                                <img className="w-14" src="/pngtree-live-webinar-poster-png-image_6690801_prev_ui.png" alt="" />
                            </div>
                            <span>
                                <p className="text-2xl text-blue font-bold text-primary-400">250</p>
                                <p className="dark:text-base-300/70 text-neutral/90 font-medium text-sm">
                                    FINISHED WEBINARS
                                </p>
                            </span>
                        </li>
                        <li className="list-none flex items-center md:items-start gap-2 flex-col md:flex-row  text-center md:text-start">
                            <div>
                                <img src="/satisfaction-rating-_prev_ui.png" className="w-20" alt="" />
                            </div>                            <span>
                                <p className="text-2xl text-blue font-bold text-primary-400">100%</p>
                                <p className="dark:text-base-300/70 text-neutral/90 font-medium text-sm">
                                    SATISFACTION RATE
                                </p>
                            </span>
                        </li>
                        <li className="list-none flex items-center md:items-start gap-2 flex-col md:flex-row  text-center md:text-start">
                            <div>
                                <img className="w-20" src="/lovepik-a-man-hiring-with-a-loudspeaker-png-image_401006145_wh300_prev_ui.png" alt="" />
                            </div>
                            <span>
                                <p className="text-2xl text-blue font-bold text-primary-400">100</p>
                                <p className="dark:text-base-300/70 text-neutral/90 font-medium text-sm">
                                    STUDENT HIRED
                                </p>
                            </span>
                        </li>
                    </div>
                </div>
            </section>

            {/***** Explore *******/}
            <section className="">
                <div className="container">
                    <h4 className="section-title">Explore E-Coaching</h4>
                    <h1 className="section-sub-title">We provide different kind of Courses</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-6 md:mt-10">
                        {data &&
                            data.map((cat, index) => (
                                <div className="card !rounded-lg shadow bg-base-100 dark:bg-primary-5" key={index}>
                                    <div className="card-wrapper">
                                        <img className="mx-auto card-image" src={cat.image} alt="logo" />
                                    </div>
                                    <div className="flex justify-between items-center px-4 mt-3 mb-6">
                                        <h4 className="text-lg text-neutral dark:text-base-300/90 font-medium">
                                            {cat.category}
                                        </h4>
                                        <span className="dark:text-base-300/70 text-neutral/70 font-medium text-end">
                                            Courses ({cat.courses})
                                        </span>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            </section>

            {/***** STUDENTS TESTIMONIALS *******/}
            <section className="">
                <div className="container">
                    <h4 className="section-title">OUR STUDENTS TESTIMONIALS</h4>
                    <h1 className="section-sub-title">People Who Already Love Us</h1>
                    <TestimonialSlider />
                </div>
            </section>

            {/***** Popular courses *******/}
            <section className="">
                <div className="container">
                    <h4 className="section-title">POPULAR COURSES</h4>
                    <h1 className="section-sub-title">Our Popular Courses</h1>
                    <p className="section-desc !max-w-5xl text-center mx-auto mt-10">
                        Compellingly procrastinate equity invested markets with efficient process improvements.
                        Collaboratively actualize mission-critical partnerships with integrated portals. Authoritatively
                        optimize low-risk high-yield metrics and plug-and-play potentialities.
                    </p>
                    <div className="mt-10 !max-w-5xl mx-auto flex flex-wrap items-center justify-center gap-3">
                        <li
                            onClick={() => handleFilterPopularCourse(0)}
                            className={`list-none px-4 py-1 text-sm rounded cursor-pointer
                            text-neutral-900 font-medium whitespace-nowrap rounded-xl border border-neutral/10 dark:border-neutral
                            ${filterByPopularCourse === 0 ? "bg-primary-400 text-white" : ""}
                            `}
                        >
                            All
                        </li>
                        {categories &&
                            categories.map((cat, index) => (
                                <li
                                    key={index}
                                    onClick={() => handleFilterPopularCourse(cat.id)}
                                    className={`list-none px-4 py-1 text-sm rounded cursor-pointer
						                            text-neutral-900 font-medium whitespace-nowrap rounded-xl border border-neutral/10 dark:border-neutral
						                            ${filterByPopularCourse === cat.id ? "bg-primary-400 text-white" : ""}
						                            `}
                                >
                                    {cat.name}
                                </li>
                            ))}
                    </div>
                    {filterCourses && filterCourses.length > 0 ? (
                        <>
                            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                                {filterCourses.map((course, index) => (
                                    <Course course={course} key={index} />
                                ))}
                            </div>
                            <Link to="/courses">
                                <Button className="bg-primary-400 block mx-auto mt-5">View more courses</Button>
                            </Link>
                        </>
                    ) : (
                        <div className="mt-10">
                            <p className="text-red-400 text-xl text-center font-semibold">
                                No course found on this category
                            </p>
                        </div>
                    )}
                </div>
            </section>

            {/***** Our Instructor *******/}
            <section className="">
                <div className="container mx-auto">
                    <h4 className="section-title">BEST ONLINE INSTRUCTOR</h4>
                    <h1 className="section-sub-title">Our Popular Courses</h1>
                    <p className="mt-10 !max-w-5xl mx-auto text-center section-desc">
                        Seamlessly target robust quality vectors and goals oriented architectures propriately enegdrages
                        one-to-one resources after standardized scenarios adaptive experiences exceptional resources
                        service depend lifestyle carefully
                    </p>
                    <div className="mt-10 grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
                        {instructors &&
                            instructors.map((instructor, index) => <Instructor instructor={instructor} key={index} />)}
                    </div>
                    <Button className="bg-primary-400 block mx-auto mt-5">Show All Instructor</Button>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
