import React, { useState } from "react";
import AppContext from "./AppContext";
import { loginViaEmailAndPassword, loginWithGithub, loginWithGoogle, logOutHandler } from "../firebase/authHandler";

const AppProvider = (props) => {
    const [state, setState] = useState({
        courses: [],
        categories: null,
        instructors: null,
        auth: null,
        setAuthLoaded: false,
        isDarkMode: false,
        message: {
            text: "",
            status: 200, // 200 success, 500 error
        },
    });

    const value = {
        state,
        actions: {
            setCourses: (courses) => setState((prev) => ({ ...prev, courses })),
            setCategories: (categories) => setState((prev) => ({ ...prev, categories })),
            setInstructors: (instructors) => setState((prev) => ({ ...prev, instructors })),
            setAuth: (user) => setState((prev) => ({ ...prev, auth: user })),
            setAuthLoaded: (isLoaded) => setState((prev) => ({ ...prev, isAuthLoaded: isLoaded })),
            setMessage: (message) => setState((prev) => ({ ...prev, message: { ...message } })),
            toggleTheme: (theme) => {
                setState((prevState) => ({ ...prevState, isDarkMode: !theme ? !prevState.isDarkMode : theme }));
            },
            loginViaEmailAndPassword,
            loginWithGoogle,
            loginWithGithub,
            logOutHandler,
        },
    };
    return <AppContext.Provider value={value}>{props.children}</AppContext.Provider>;
};

export default AppProvider;
