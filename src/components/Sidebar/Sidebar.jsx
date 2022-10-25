import React from "react";
import "./sidebar.css";

const Sidebar = ({ isOpen, children, onClose }) => {
    return (
        <>
            {isOpen && <div className="sidebar-overlay" onClick={onClose} />}
            <div className="sidebar">{children}</div>
        </>
    );
};
export default Sidebar;
