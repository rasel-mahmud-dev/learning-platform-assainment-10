import React from "react";
import { useForm } from "react-hook-form";
import Button from "../../components/Button/Button.jsx";
import { Link } from "react-router-dom";
import { BsGithub, BsGoogle, CgLock } from "react-icons/all.js";

const RegistrationPage = (props) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {};

    return (
        <div>
            <div className="shadow-lg bg-base-100 rounded-box max-w-md mx-auto m-10 px-5 py-10">
                <h1 className="text-2xl font-bold text-center">Welcome to E-Coaching</h1>
                <h1 className="text-lg font-bold text-center my-5">Sign Up and Start Learning!</h1>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label htmlFor="" className="font-medium mb-1 inline-block">
                            FullName
                        </label>
                        <input
                            type="email"
                            {...register("fullName", { required: true })}
                            placeholder="Your full name"
                            className="input input-bordered input-primary w-full"
                        />
                    </div>
                    <div className="mt-4">
                        <label htmlFor="" className="font-medium mb-1 inline-block">
                            Email
                        </label>
                        <input
                            type="email"
                            {...register("email", { required: true })}
                            placeholder="Your email"
                            className="input input-bordered input-primary w-full"
                        />
                    </div>
                    <div className="mt-4">
                        <label htmlFor="" className="font-medium mb-1 inline-block">
                            Password
                        </label>
                        <input
                            type="password"
                            {...register("password", { required: true })}
                            placeholder="Your password"
                            className="input input-bordered input-primary w-full"
                        />
                    </div>
                    {/* errors will return when field validation fails  */}
                    {errors.exampleRequired && <span>This field is required</span>}

                    <div className="mt-4">
                        Already have an Account?
                        <Link to="/login" state={{ email: "", redirect: "" }} className="link ml-2 text-blue-500 ">
                            Click to login
                        </Link>
                    </div>

                    <Button className="bg-primary-400 mt-3 w-full" type="submit">
                        Create Account
                    </Button>

                    <div className="divider text-sm py-4">Not an Account?</div>

                    <div className="">
                        <Button
                            type="button"
                            className="bg-red-500 justify-center items-center flex w-full px-4 py-2 border-none text-white font-semibold text-sm rounded-md"
                        >
                            <span className="flex items-center">
                                <BsGoogle className="mr-2 text-md" />
                                Login With Google
                            </span>
                        </Button>

                        <Button
                            type="button"
                            className="bg-gray-700 justify-center items-center flex w-full px-4 py-2 border-none text-white font-semibold text-sm rounded-md mt-2"
                        >
                            <span className="flex items-center">
                                <BsGithub className="mr-2 text-md" />
                                Login With Github
                            </span>
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

export default RegistrationPage;
