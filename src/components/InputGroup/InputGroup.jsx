import React from "react";

const InputGroup = ({ errors, label, className = "", name, type = "text", placeholder, register }) => {
    return (
        <div className="mt-4">
            <label htmlFor={name} className="font-medium mb-1 inline-block">
                {label}
            </label>
            <input
                type={type}
                name={name}
                id={name}
                {...register}
                placeholder={placeholder}
                className={`input input-bordered input-primary w-full ${className}`}
            />
            {errors[name] && <p className="text-red-400 text-sm mt-2">{errors[name].message}</p>}
        </div>
    );
};

export default InputGroup;
