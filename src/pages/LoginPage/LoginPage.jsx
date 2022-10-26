import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import Button from "../../components/Button/Button.jsx";
import { Link } from "react-router-dom";
import { BsGithub, BsGoogle, CgLock } from "react-icons/all.js";
import AppContext from "../../context/AppContext.jsx";

const LoginPage = (props) => {
    const {
        state,
        actions: { loginViaEmailAndPassword, loginWithGoogle, loginWithGithub, setMessage },
    } = useContext(AppContext);

    const {
        register,
        handleSubmit,
        setError,
        formState: { errors },
    } = useForm();

    const [formError, setFormError] = useState("");

    const onSubmit = (data) => {
        let errorMessage = "";
        for (let errorsKey in errors) {
            if (errors[errorsKey]) {
                if (errors[errorsKey].type === "pattern") {
                    errorMessage =
                        errorsKey +
                        ` should be Minimum six characters, at least one uppercase, one
		                    lowercase and one number`;
                }
            }
        }

        setError("password", { type: "minLength", message: "errorMessage" }, { shouldFocus: true });

        // if (errorMessage) {
        //
        //     return;
        // }

        // loginViaEmailAndPassword(data.email, data.password);
    };

    console.log(errors);

    return (
        <div>
            <div className="shadow-lg bg-base-100 rounded-box max-w-md mx-auto m-10 px-5 py-10">
                <h1 className="text-2xl font-bold text-center">Welcome to E-Coaching</h1>
                <h1 className="text-lg font-bold text-center my-5">Login your account</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label htmlFor="email" className="font-medium mb-1 inline-block">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            {...register("email", { required: true })}
                            placeholder="Your email"
                            className="input input-bordered input-primary w-full"
                        />
                    </div>
                    <div className="mt-4">
                        <label htmlFor="password" className="font-medium mb-1 inline-block">
                            Password
                        </label>
                        <input
                            id="password"
                            type="password"
                            {...register("password", {
                                required: true,
                                minLength: 6,
                                pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/,
                            })}
                            placeholder="Your password"
                            className="input input-bordered input-primary w-full"
                        />
                    </div>

                    {/* errors will return when field validation fails  */}
                    {formError && <span>{formError}</span>}

                    <div className="mt-4">
                        Forget Password?
                        <Link
                            to="/reset-password"
                            state={{ email: "", redirect: "" }}
                            className="link ml-2 text-blue-500 "
                        >
                            Click to reset
                        </Link>
                    </div>

                    <Button className="bg-primary-400 mt-3 w-full" type="submit">
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
                                With Email & Password
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
