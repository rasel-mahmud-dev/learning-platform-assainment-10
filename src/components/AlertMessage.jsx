import React, { useEffect, useRef } from "react";

const AlertMessage = ({ message, setMessage }) => {
    const timeOutId = useRef();

    // close automatically after 2s
    useEffect(() => {
        timeOutId.current = setTimeout(() => {
            setMessage({ text: "" });
        }, 2000);
        return () => clearTimeout(timeOutId.current);
    }, [message.text]);

    return (
        <div className="">
            {message.text && (
                <div
                    className={`alert z-50 shadow-lg w-11/12 max-w-xl mx-auto fixed top-20 md:top-28 left-1/2 -translate-x-1/2 ${
                        message.status === 200 ? "!bg-primary-400 text-white" : "alert-error"
                    }`}
                >
                    <div>
                        <span>{message.text}</span>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AlertMessage;
