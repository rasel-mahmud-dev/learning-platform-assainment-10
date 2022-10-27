import React from "react";
import "./sidebar.css";

const Sidebar = ({ isOpen, children, onClose }) => {
    return (
        <>
            {isOpen && <div className="sidebar-overlay" onClick={onClose} />}
            <div className={`sidebar ${isOpen ? "sidebar-open": ""}`}>{children}</div>
        </>
    );
};
export default Sidebar;
