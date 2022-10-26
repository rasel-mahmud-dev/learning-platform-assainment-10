import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import Button from "../../components/Button/Button.jsx";
import { Link } from "react-router-dom";
import { BsGithub, BsGoogle, CgLock } from "react-icons/all.js";
import AppContext from "../../context/AppContext.jsx";
import InputGroup from "../../components/InputGroup/InputGroup.jsx";

const LoginPage = (props) => {
    const {
        state,
        actions: { loginViaEmailAndPassword, loginWithGoogle, loginWithGithub, setMessage },
    } = useContext(AppContext);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        if (Object.keys(errors).length === 0) {
            loginViaEmailAndPassword(data.email, data.password)
                .then((result) => {
                    console.log(result);
                })
                .catch((error) => {
                    setMessage({
                        text: error.message ? error.message : "Login fail, Please try again",
                        status: 500,
                    });
                });
        }
    };

    return (
        <div>
            <div className="shadow-around bg-base-100 rounded-box max-w-md mx-auto m-10 px-5 py-10">
                <h1 className="text-2xl font-bold text-center">Welcome to E-Coaching</h1>
                <h3 className="text-lg font-bold text-center my-5">Login your account</h3>

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
                            minLength: { value: 6, message: "Password should be min 6 chracter" },
                            pattern: {
                                value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/,
                                message:
                                    "Password should be contains " +
                                    "one uppercase and one lowercase and " +
                                    "a number",
                            },
                        })}
                        placeholder="Your password"
                    />

                    <div className="mt-4 text-sm">
                        Forget Password?
                        <Link
                            to="/reset-password"
                            state={{ email: "", redirect: "" }}
                            className="link ml-2 text-blue-500 "
                        >
                            Click to reset
                        </Link>
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
                            <Link to={`/registration`} className="flex items-center">
                                <CgLock className="mr-2 text-md" />
                                Create Account
                            </Link>
                        </Button>
                    </div>

                    <p className="text-center mb-4 mt-6 dark:text-neutral-400">
                        'Not a member'?
                        <Link to="/registration" className="font-medium text-blue-500 text-link ml-2 ">
                            Create an Account
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
