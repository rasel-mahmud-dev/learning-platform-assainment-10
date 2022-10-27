import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import { Navigate} from "react-router-dom";
import Loader from "../components/Loader";

/***** logged user not access these   */
const ExcludeAuthRoute = (props) => {

	const { state } = useContext(AppContext);
	
	if (!state.isAuthLoaded) {
		return <Loader />;
	}
	
	if (state.auth) {
		return <Navigate to={`/`}/>;
	}
	
	return props.children;
};

export default ExcludeAuthRoute;
