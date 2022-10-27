import React, { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./navigation.css";
import AppContext from "../../context/AppContext";
import { FaMoon, FaSignInAlt } from "react-icons/fa";
import { BsSunFill } from "react-icons/bs";
import { HiBars4 } from "react-icons/hi2";

const Navigation = () => {
    const {
        state: { auth, isDarkMode },
        actions: { logOutHandler, toggleTheme },
    } = useContext(AppContext);

    const navigate = useNavigate();

    const [openAuthMenu, setOpenAuthMenu] = useState(false);
    const [expandNavigation, setExpandNavigation] = useState(false);

    function handleLogOut() {
        logOutHandler()
            .then(() => {
                navigate("/login");
            })
            .catch((ex) => {});
    }

    function chooseFirstLetter(name) {
        if (!name) {
            return "";
        }
        let letterOne = name[0];
        let letterTwo = "";
        let splitName = name.split(" ");
        if (splitName.length > 1) {
            letterTwo = splitName[1][0];
        }
        return letterOne + letterTwo;
    }

    function switchThemeHandler(theme) {
        toggleTheme(theme === "dark");
        let root = window.document.documentElement;
        if (root.classList.contains("dark")) {
            root.classList.remove("dark");
            root.classList.add("light");
        } else {
            root.classList.add("dark");
            root.classList.remove("light");
        }

        window.localStorage.setItem("theme", theme);
    }

    function toggleNavigation() {
        setExpandNavigation(!expandNavigation);
    }

    return (
        <div>
            <div className="navbar dark:bg-neutral-focus bg-base-100 top-0 left-0 fixed shadow-md">
                <div className="container">
                    <div className="flex-1">
                        <Link to="/" className="">
                            <img src="/logo.svg" alt="" className="w-40" />
                        </Link>
                    </div>
                    <div className={`flex items-center dark:text-white main-nav ${expandNavigation ? "expand" : ""}`}>
                        <NavLink end={true}
                            onClick={() => setExpandNavigation(false)}
                            to="/"
                            
                            className="btn btn-ghost normal-case text-md"
                        >
                            Home
                        </NavLink>
                        <NavLink
                            onClick={() => setExpandNavigation(false)}
                            to="/courses"
                            className="btn btn-ghost normal-case text-md"
                        >
                            Courses
                        </NavLink>
                        <NavLink
                            onClick={() => setExpandNavigation(false)}
                            to="/blogs"
                            className="btn btn-ghost normal-case text-md"
                        >
                            Blogs
                        </NavLink>
                        <NavLink
                            onClick={() => setExpandNavigation(false)}
                            to="/faq"
                            className="btn btn-ghost normal-case text-md "
                        >
                            FAQs
                        </NavLink>
                    </div>
                    <div className="flex-none">
                        {auth && (
                            <div
                                className="relative "
                                onMouseOver={() => setOpenAuthMenu(true)}
                                onMouseLeave={() => setOpenAuthMenu(false)}
                            >
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="avatar placeholder">
                                        <div className="bg-neutral-focus text-neutral-content rounded-full w-9">
                                            {auth.photoURL ? (
                                                <img src={auth.photoURL} alt="avatar" />
                                            ) : (
                                                <span>{chooseFirstLetter(auth.displayName)}</span>
                                            )}
                                        </div>
                                    </div>
                                </label>
                                <ul
                                    tabIndex={0}
                                    className={`absolute opacity-0 z-50 invisible top-8 -right-3 mt-3 p-4 bg-base-100 dark:bg-dark-10 shadow-around  rounded-box w-52 ${
                                        openAuthMenu ? "!opacity-100 !visible" : ""
                                    }`}
                                >
                                    <li className="pt-1">{auth.displayName}</li>
                                    <li className="pt-1">
                                        <Link to={`/profile/${auth.uId}`}>Profile</Link>
                                    </li>
                                    <li className="pt-1 link cursor-pointer" onClick={handleLogOut}>
                                        Logout
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                    <div className="flex items-center">
                        <span className="pl-3">
                            {isDarkMode ? (
                                <span
                                    className="btn-circle normal-case text-md w-6 h-6"
                                    onClick={() => switchThemeHandler("light")}
                                >
                                    <BsSunFill className="text-2xl" />
                                </span>
                            ) : (
                                <span
                                    className="btn-circle normal-case text-md w-6 h-6 "
                                    onClick={() => switchThemeHandler("dark")}
                                >
                                    <FaMoon className="text-xl text-neutral-focus" />
                                </span>
                            )}
                        </span>
                        <div className="pl-4">
                            <HiBars4 className="text-2xl block sm:hidden" onClick={toggleNavigation} />
                        </div>
                    </div>

                    {!auth && (
                        <NavLink to="/login" className="btn btn-ghost normal-case text-md dark:text-white !pr-0">
                            <FaSignInAlt />
                            <span className="ml-1">Login</span>
                        </NavLink>
                    )}
                </div>
            </div>
            <div className="h-16" />
        </div>
    );
};

export default Navigation;
