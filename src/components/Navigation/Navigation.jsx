import React, { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./navigation.css";
import AppContext from "../../context/AppContext.jsx";
import { BsSunFill, FaMoon, FaSignInAlt } from "react-icons/all";
import Button from "../Button/Button.jsx";

const Navigation = () => {
    const {
        state: { auth, isDarkMode },
        actions: { logOutHandler, toggleTheme },
    } = useContext(AppContext);

    const navigate = useNavigate();

    const [openAuthMenu, setOpenAuthMenu] = useState(false);

    function handleLogOut() {
        logOutHandler()
            .then(() => {
                navigate("/");
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

    return (
        <div>
            <div className="navbar z-40 dark:bg-neutral-focus bg-base-100 top-0 left-0 fixed shadow-md">
                <div className="container">
                    <div className="flex-1">
                        <Link to="/" className="">
                            <img src="/logo.svg" alt="" className="w-40" />
                        </Link>
                    </div>
                    <div className="flex items-center dark:text-white">
                        <NavLink to="/" className="btn btn-ghost normal-case text-md">
                            Home
                        </NavLink>
                        <NavLink to="/courses" className="btn btn-ghost normal-case text-md">
                            Courses
                        </NavLink>
                        <NavLink to="/blogs" className="btn btn-ghost normal-case text-md">
                            Blogs
                        </NavLink>
                        <NavLink to="/faq" className="btn btn-ghost normal-case text-md">
                            FAQs
                        </NavLink>
                        <span>
                            {isDarkMode ? (
                                <Button
                                    className="btn-circle normal-case text-md px-1 w-6 h-6"
                                    onClick={() => switchThemeHandler("light")}
                                >
                                    <BsSunFill className="text-xl" />
                                </Button>
                            ) : (
                                <Button
                                    className="btn-circle normal-case text-md px-1 w-6 h-6 text-neutral"
                                    onClick={() => switchThemeHandler("dark")}
                                >
                                    <FaMoon />
                                </Button>
                            )}
                        </span>
                    </div>
                    <div className="flex-none">
                        {auth ? (
                            <div
                                className="relative"
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
                                    className={`absolute opacity-0 invisible top-8 -right-3 mt-3 p-4 shadow-around bg-base-100 rounded-box w-52 ${
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
                        ) : (
                            <NavLink to="/login" className="btn btn-ghost normal-case text-md dark:text-white">
                                <FaSignInAlt />
                                <span className="ml-1">Login</span>
                            </NavLink>
                        )}
                    </div>
                </div>
            </div>
            <div className="h-16" />
        </div>
    );
};

export default Navigation;
