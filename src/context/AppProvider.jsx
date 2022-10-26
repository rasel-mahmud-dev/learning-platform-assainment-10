import React, { useState } from "react";
import AppContext from "./AppContext";
import { loginViaEmailAndPassword, loginWithGithub, loginWithGoogle, logOutHandler } from "../firebase/authHandler";

const AppProvider = (props) => {
    const [state, setState] = useState({
        courses: [],
        auth: null,
        setAuthLoaded: false,
        message: {
            text: "",
            status: 200, // 200 success, 500 error
        },
    });

    const value = {
        state,
        actions: {
            setCourses: (v) => setState((prev) => ({ ...prev, courses: v })),
            setAuth: (user) => setState((prev) => ({ ...prev, auth: user })),
            setAuthLoaded: (isLoaded) => setState((prev) => ({ ...prev, isAuthLoaded: isLoaded })),
            setMessage: (message) => setState((prev) => ({ ...prev, message: { ...message } })),
            loginViaEmailAndPassword,
            loginWithGoogle,
            loginWithGithub,
            logOutHandler,
        },
    };
    return <AppContext.Provider value={value}>{props.children}</AppContext.Provider>;
};

export default AppProvider;
