function navigateToDestination(state, navigate){
	if (state && state.from) {
		navigate(state.from, { replace: true });
	} else {
		navigate("/", { replace: true });
	}
}

export default navigateToDestination