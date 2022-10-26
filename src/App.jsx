import { useContext, useEffect } from "react";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import { Outlet } from "react-router-dom";

//initialize firebase app
import "./firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import AppContext from "./context/AppContext";
import AlertMessage from "./components/AlertMessage";

function App() {
    const {
        state,
        actions: { setAuth, setAuthLoaded, toggleTheme, setMessage },
    } = useContext(AppContext);

    const auth = getAuth();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuth({
                    uId: user.uid,
                    displayName: user.displayName,
                    email: user.email,
                    userId: user.uid,
                    photoURL: user.photoURL,
                });
                setAuthLoaded(true);
            } else {
                // User is signed out
                console.log("User signed out");
                setAuthLoaded(true);
                setAuth(null);
            }
        });
        let theme = window.localStorage.getItem("theme");
        let root = window.document.documentElement;
        if (theme && theme === "dark") {
            toggleTheme(true);
            root.classList.add("dark");
        }
        if (theme && theme === "light") {
            toggleTheme(false);
            root.classList.add("light");
        }

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
