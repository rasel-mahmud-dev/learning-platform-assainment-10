import React, { useContext, useEffect, useState } from "react";
import AppContext from "../../context/AppContext.jsx";
import { getAuth } from "firebase/auth";

const ProfilePage = (props) => {
    const { state } = useContext(AppContext);

    const firebaseAuth = getAuth();
    const user = firebaseAuth.currentUser;

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

    return (
        <div className="container py-4">
            {profile && (
                <div>
                    <h1 className="text-5xl text-center font-bold">Welcome. {profile.displayName}</h1>

                    <div className="card rounded shadow-around p-4 max-w-md mx-auto my-20">
                        <div className="mx-auto">
                            <img src={profile.photoURL} alt="user photo" className="rounded-full" />
                        </div>
                        <h4 className="mt-6">UserName: {profile.displayName}</h4>
                        <h4>Email: {profile.email}</h4>
                        <h4>Email Status: {profile.emailVerified ? "Verified" : "Not Verified"}</h4>
                        <h4>Created At: {new Date(Number(profile.createdAt)).toDateString()}</h4>
                        <h4>Last Login: {new Date(Number(profile.lastLoginAt)).toDateString()}</h4>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProfilePage;
