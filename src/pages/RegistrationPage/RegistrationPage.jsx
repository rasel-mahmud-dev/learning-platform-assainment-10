import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import Button from "../../components/Button/Button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { BsGithub, BsGoogle } from "react-icons/bs";
import { CgLock } from "react-icons/cg";
import InputGroup from "../../components/InputGroup/InputGroup";

import AppContext from "../../context/AppContext";

import { createUserWithEmailAndPassword, getAuth, updateProfile } from "firebase/auth";
import navigateToDestination from "../../utils/navigateToDestination";

const RegistrationPage = (props) => {
    const {
        state: { auth },
        actions: { setAuth, loginWithGoogle, loginWithGithub },
    } = useContext(AppContext);

    const [errorMessage, setErrorMessage] = useState("");

    const location = useLocation();
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const firebaseAuth = getAuth();

    function githubLoginHandler() {
        loginWithGithub()
            .then(() => navigateToDestination(location.state, navigate))
            .catch(() => setErrorMessage("Login fail, please try again"));
    }

    function googleLoginHandler() {
	    loginWithGoogle()
            .then(() => navigateToDestination(location.state, navigate))
            .catch(() => setErrorMessage("Login fail, please try again"));
    }

    const onSubmit = async (data) => {
        if (Object.keys(errors).length !== 0) return;

        const result = await createUserWithEmailAndPassword(firebaseAuth, data.email, data.password);
        // if registration successful then update user profile
        if (result) {
            updateProfile(firebaseAuth.currentUser, {
                displayName: data.fullName,
                photoURL: data.profile_photo,
            })
                .then(() => {
                    // also update client side auth data
                    setAuth({
                        ...auth,
                        displayName: data.fullName,
                        photoURL: data.profile_photo,
                    });
                    if (location.state && location.state.from) {
                        navigate(location.state.from, { replace: true });
                    } else {
                        navigate("/", { replace: true });
                    }
                })
                .catch(() => {});
        }
    };

    return (
        <div>
            <div className="shadow-around bg-base-100 rounded-box max-w-lg mx-auto m-10 px-6 py-10 login-card">
                <h1 className="text-2xl font-bold text-center">Welcome to E-Coaching</h1>
                <h1 className="text-lg font-bold text-center mt-4 mb-7">Sign Up and Start Learning!</h1>

                <form onSubmit={handleSubmit(onSubmit)}>
                    {errorMessage && (
                        <p className="bg-red-400/20 text-red-400 text-center py-2 rounded-md">{errorMessage}</p>
                    )}

                    <InputGroup
                        name="fullName"
                        errors={errors}
                        placeholder="Enter email"
                        label="Full Name"
                        register={register("fullName", { required: "Full name required" })}
                    />

                    <InputGroup
                        name="email"
                        errors={errors}
                        placeholder="Enter email"
                        label="Email"
                        type="email"
                        register={register("email", { required: "Email required" })}
                    />

                    <InputGroup
                        name="profile_photo"
                        errors={errors}
                        placeholder="Profile photo link"
                        label="Profile Photo"
                        register={register("profile_photo")}
                    />

                    <InputGroup
                        name="password"
                        errors={errors}
                        label="Password"
                        type="password"
                        register={register("password", {
                            required: "Password required",
                            minLength: { value: 6, message: "Password should be min 6 character" },
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
                        Already have an Account?
                        <Link to="/login" state={location.state} className="link ml-2 text-blue-500 ">
                            Click to login
                        </Link>
                    </div>

                    <Button className="bg-primary-400 mt-6 w-full" type="submit">
                        Create Account
                    </Button>

                    <div className="divider text-sm py-4">Have an Account?</div>

                    <div className="">
                        <Button
                            type="button"
                            onClick={googleLoginHandler}
                            className="bg-red-500 justify-center items-center flex w-full px-4 py-2 border-none text-white font-semibold text-sm rounded-md"
                        >
                            <span className="flex items-center">
                                <BsGoogle className="mr-2 text-md" />
                                Login With Google
                            </span>
                        </Button>

                        <Button
                            type="button"
                            onClick={githubLoginHandler}
                            className="bg-gray-700 justify-center items-center flex w-full px-4 py-2 border-none text-white font-semibold text-sm rounded-md mt-2"
                        >
                            <span className="flex items-center">
                                <BsGithub className="mr-2 text-md" />
                                Login With Github
                            </span>
                        </Button>
                        <Button className="bg-blue-500 justify-center items-center flex w-full px-4 py-2 border-none text-white font-semibold text-sm rounded-md mt-2">
                            <Link to={`/login`} state={location.state} className="flex items-center">
                                <CgLock className="mr-2 text-md" />
                                Login With Password
                            </Link>
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default RegistrationPage;
