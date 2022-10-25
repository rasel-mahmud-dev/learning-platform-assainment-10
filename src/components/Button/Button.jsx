import React from "react";
import "./style.css";

const Button = ({ className, ...attributes }) => {
    return <button className={`my-btn border-none rounded-md ${className}`} {...attributes} />;
};

export default Button;
