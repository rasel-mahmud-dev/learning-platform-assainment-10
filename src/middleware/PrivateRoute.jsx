import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import { Navigate, useLocation } from "react-router-dom";
import Loader from "../components/Loader";

const PrivateRoute = (props) => {
    const location = useLocation();
    const { state } = useContext(AppContext);

    if (!state.isAuthLoaded) {
        return <Loader />;
    }

    if (!state.auth) {
        return <Navigate to="/login" state={{ from: location.pathname }} />;
    }

    return props.children;
};

export default PrivateRoute;
