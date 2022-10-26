import React from "react";

const Modal = (props) => {
    const { className = "" } = props;
    return (
        <div>
            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal-4" className="modal-toggle" />
            <label htmlFor="my-modal-4" className="modal cursor-pointer">
                <label className={`modal-box relative  dark:bg-dark-10 ${className}`} htmlFor="">
                    <h3 className="text-lg font-bold">{props.title}</h3>
                    {props.children}
                </label>
            </label>
        </div>
    );
};

export default Modal;
