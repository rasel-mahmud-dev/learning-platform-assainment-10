import React from "react";
import ReactDOM from "react-dom/client";
import Routes from "./Routes";
import AppProvider from "./context/AppProvider";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <AppProvider>
            <Routes />
        </AppProvider>
    </React.StrictMode>
);
