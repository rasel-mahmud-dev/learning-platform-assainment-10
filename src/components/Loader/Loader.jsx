import React from "react";

const Loader = () => {
    return (
        <div>
            <div className="radial-progress" style={{ "--value": "70", "--size": "12rem", "--thickness": "2px" }}>
                70%
            </div>
            <div className="radial-progress" style={{ "--value": "70", "--size": "12rem", "--thickness": "2rem" }}>
                70%
            </div>
        </div>
    );
};

export default Loader;
