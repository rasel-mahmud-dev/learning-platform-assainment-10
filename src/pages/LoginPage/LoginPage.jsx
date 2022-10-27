import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import Button from "../../components/Button/Button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { BsGithub, BsGoogle } from "react-icons/bs";
import {  CgLock } from "react-icons/cg";
import AppContext from "../../context/AppContext.jsx";
import InputGroup from "../../components/InputGroup/InputGroup";
import Modal from "../../components/Modal/Modal";

const LoginPage = () => {
    const {
        actions: { loginViaEmailAndPassword, loginWithGoogle, loginWithGithub, passwordResetEmail },
    } = useContext(AppContext);

    const navigate = useNavigate();

    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    const location = useLocation();

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    // need for password reset form
    let email = watch("email");

    const onSubmit = (data) => {
        setErrorMessage("");
        if (Object.keys(errors).length === 0) {
            loginViaEmailAndPassword(data.email, data.password)
                .then(() => {
                    if (location.state && location.state.from) {
                        navigate(location.state.from, { replace: true });
                    } else {
                        navigate("/", { replace: true });
                    }
                })
                .catch((error) => {
                    let message = error.message ? error.message : "Login fail, Please try again";
                    if (error.code === "auth/wrong-password") {
                        setErrorMessage("Password doesn't match");
                    } else if (error.code === "auth/user-not-found") {
                        setErrorMessage("You are not registered");
                    } else {
                        setErrorMessage(message);
                    }
                });
        }
    };

    // handle send mail for password reset
    function handlePasswordReset(event) {
        event.preventDefault();
        setErrorMessage("");
        setSuccessMessage("");
        if (!event.target.email.value) {
            return setErrorMessage("Please Give your email");
        }

        passwordResetEmail(event.target.email.value)
            .then((r) => {
                setSuccessMessage("Password Reset Mail has been send. Please check your inbox or spam folder");
            })
            .catch((ex) => {
                setErrorMessage(ex.message);
            });
    }

    // password reset mail send form
    function passwordResetModal() {
        return (
            <Modal title="Reset Password" className="max-w-sm" id="4">
                <form onSubmit={handlePasswordReset} className="mt-4 dark:text-neutral">
                    {errorMessage && (
                        <p className="bg-red-400/20 text-red-400 text-center py-2 mb-3 rounded-md">{errorMessage}</p>
                    )}
                    {successMessage && (
                        <p className="bg-primary-400/20 text-primary-500 text-center py-2 mb-3 rounded-md">
                            {successMessage}
                        </p>
                    )}
                    <input
                        type="text"
                        name="email"
                        defaultValue={email}
                        className="input input-primary input-bordered w-full"
                    />
                    <Button className="bg-primary-400 mt-4">Reset Request</Button>
                </form>
            </Modal>
        );
    }

    return (
        <div>
            <div className="shadow-around bg-base-100 rounded-box max-w-lg mx-auto m-10 px-6 py-10 card login-card">
                <h1 className="text-2xl font-bold text-center">Welcome to E-Coaching</h1>
                <h3 className="text-lg font-bold text-center my-5">Login your account</h3>

                {errorMessage && (
                    <p className="bg-red-400/20 text-red-400 text-center py-2 rounded-md">{errorMessage}</p>
                )}

                {passwordResetModal()}

                <form onSubmit={handleSubmit(onSubmit)}>
                    <InputGroup
                        name="email"
                        errors={errors}
                        placeholder="Enter email"
                        label="Email"
                        type="email"
                        register={register("email", { required: "Email required" })}
                    />

                    <InputGroup
                        name="password"
                        errors={errors}
                        label="Password"
                        type="password"
                        register={register("password", {
                            required: "Password required",
                            minLength: { value: 6, message: "Password should be min 6 character" },
                        })}
                        placeholder="Your password"
                    />

                    <div className="mt-4 text-sm">
                        Forget Password?
                        <label htmlFor="my-modal-4" className="link ml-2 text-blue-500 ">
                            Click to reset
                        </label>
                    </div>

                    <Button className="bg-primary-400 w-full mt-6" type="submit">
                        Login
                    </Button>

                    <div className="divider text-sm py-4">Not an Account?</div>

                    <div className="">
                        <Button
                            type="button"
                            onClick={loginWithGoogle}
                            className="bg-red-500 justify-center items-center flex w-full px-4 py-2 border-none text-white font-semibold text-sm rounded-md"
                        >
                            <span className="flex items-center">
                                <BsGoogle className="mr-2 text-md" />
                                Login With Google
                            </span>
                        </Button>

                        <Button
                            type="button"
                            onClick={loginWithGithub}
                            className="bg-gray-700 justify-center items-center flex w-full px-4 py-2 border-none text-white font-semibold text-sm rounded-md mt-2"
                        >
                            <span className="flex items-center">
                                <BsGithub className="mr-2 text-md" />
                                Login With Github
                            </span>
                        </Button>
                        <Button className="bg-blue-500 justify-center items-center flex w-full px-4 py-2 border-none text-white font-semibold text-sm rounded-md mt-2">
                            <Link to={`/registration`} state={location.state} className="flex items-center">
                                <CgLock className="mr-2 text-md" />
                                Create Account
                            </Link>
                        </Button>
                    </div>

                    <p className="text-center mb-4 mt-6 dark:text-neutral-400">
                        'Not a member'?
                        <Link
                            to="/registration"
                            state={location.state}
                            className="font-medium text-blue-500 text-link ml-2 "
                        >
                            Create an Account
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
