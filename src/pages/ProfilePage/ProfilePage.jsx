import React, { useContext, useEffect, useState } from "react";
import AppContext from "../../context/AppContext";
import Modal from "../../components/Modal/Modal";
import InputGroup from "../../components/InputGroup/InputGroup";
import Button from "../../components/Button/Button";
import { useForm } from "react-hook-form";

import { getAuth, updateProfile, updateEmail } from "firebase/auth";

const ProfilePage = (props) => {
    const {
        state,
        actions: { setAuth },
    } = useContext(AppContext);
    const firebaseAuth = getAuth();
    const user = firebaseAuth.currentUser;

    const [responseMessage, setResponseMessage] = useState({
        message: "",
        status: 200,
    });

    const [profile, setProfile] = useState(null);

    useEffect(() => {
        if (user) {
            setProfile({
                displayName: user.displayName,
                email: user.email,
                emailVerified: user.emailVerified,
                uId: user.uid,
                photoURL: user.photoURL,
                createdAt: user.metadata.createdAt,
                lastLoginAt: user.metadata.lastLoginAt,
            });
        }
    }, [state.auth]);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        setResponseMessage({
            status: 200,
            message: "",
        });
        try {
            if (data.email) {
                await updateEmail(firebaseAuth.currentUser, data.email);
            }
            let info = {};
            if (data.fullName) info.displayName = data.fullName;
            if (data.profile_photo) info.photoURL = data.fullName;
            await updateProfile(firebaseAuth.currentUser, info);

            // update client side data
            setAuth({ ...state.auth, ...info });

            setResponseMessage({
                status: 200,
                message: "Profile updated",
            });
        } catch (e) {
            setResponseMessage({
                status: 500,
                message: e.message,
            });
        }
    };

    function updateProfileModal() {
        return (
            <Modal id="update-profile" title="Update Profile">
                {responseMessage.message && (
                    <div
                        className={`${
                            responseMessage.status === 200 ? "bg-primary-400/10 text-primary-400" : "bg-red-400/10"
                        } text-red-400 p-4 rounded-md mt-4`}
                    >
                        {responseMessage.message}
                    </div>
                )}
                <form onSubmit={handleSubmit(onSubmit)}>
                    <InputGroup
                        name="fullName"
                        errors={errors}
                        placeholder="Enter email"
                        label="Full Name"
                        register={register("fullName")}
                    />

                    <InputGroup
                        name="email"
                        errors={errors}
                        placeholder="Enter email"
                        label="Email"
                        type="email"
                        register={register("email")}
                    />

                    <InputGroup
                        name="profile_photo"
                        errors={errors}
                        placeholder="Profile photo link"
                        label="Profile Photo"
                        register={register("profile_photo")}
                    />

                    <Button className="bg-primary-400 mt-6 w-full" type="submit">
                        Update
                    </Button>
                </form>
            </Modal>
        );
    }

    return (
        <div className="container py-10">
            {updateProfileModal()}

            {profile && (
                <div>
                    <h1 className="text-3xl md:text-5xl text-center font-bold">Welcome. {profile.displayName}</h1>

                    <div className="card rounded-box dark:shadow-xl shadow-around p-4 max-w-md mx-auto my-10 md:my-20 bg-white dark:bg-primary-10 ">
                        <div className="mx-auto">
                            <img src={profile.photoURL} alt="user photo" className="rounded-full" />
                        </div>
                        <h4 className="mt-6">UserName: {profile.displayName}</h4>
                        <h4>Email: {profile.email}</h4>
                        <h4>Email Status: {profile.emailVerified ? "Verified" : "Not Verified"}</h4>
                        <h4>Created At: {new Date(Number(profile.createdAt)).toDateString()}</h4>
                        <h4>Last Login: {new Date(Number(profile.lastLoginAt)).toDateString()}</h4>
                        <label htmlFor="my-modal-update-profile" className="btn bg-primary-400 w-max mt-4">
                            Update Profile
                        </label>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProfilePage;
