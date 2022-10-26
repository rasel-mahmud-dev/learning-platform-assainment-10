import { useContext, useEffect } from "react";
import "./App.css";
import Navigation from "./components/Navigation/Navigation.jsx";
import { Outlet } from "react-router-dom";

//initialize firebase app
import "./firebase/index.js";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import AppContext from "./context/AppContext.jsx";
import AlertMessage from "./components/AlertMessage.jsx";

function App() {
    const {
        state,
        actions: { setAuth, setMessage },
    } = useContext(AppContext);

    const auth = getAuth();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            console.log(user);
            if (user) {
                setAuth({
                    uId: user.uid,
                    displayName: user.displayName,
                    email: user.email,
                    userId: user.uid,
                    photoURL: user.photoURL,
                });
            } else {
                // User is signed out
                console.log("User signed out");
                setAuth(null);
            }
        });

        return () => unsubscribe();
    }, []);

    return (
        <div className="App">
            <Navigation />
            <AlertMessage setMessage={setMessage} message={state.message} />
            <Outlet />
        </div>
    );
}

export default App;
