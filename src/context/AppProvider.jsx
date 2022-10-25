import React, { useState } from "react";
import AppContext from "./AppContext";

const AppProvider = (props) => {
  const [state, setState] = useState({
    courses: [],
  });
  const value = {
    state,
    setCourses: (v) => setState((prev) => ({ ...prev, courses: v })),
  };
  return <AppContext.Provider value={value}>{props.children}</AppContext.Provider>;
};

export default AppProvider;
