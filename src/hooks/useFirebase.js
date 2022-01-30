import initializeFirebase from "../Pages/Login/Firebase/firebase.init"
import { useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword, GoogleAuthProvider, updateProfile, signInWithPopup, getIdToken } from "firebase/auth";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

// initialize Firebase app
initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    const [admin, setAdmin] = useState(false);
    const [token, setToken] = useState('');

    // let history = useHistory();

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const registerUser = (email, password, name, history) => {
        setLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setAuthError('');
                const newUser = { email, displayName: name };
                setUser(newUser);
                //save user to database
                saveUser(email, name, 'POST');
                // saveUser(email, name);
                //Private Route redirect
                history.replace('/');
                //send name to Firebase after acc Create
                updateProfile(auth.currentUser, {
                    displayName: name
                })
                    .then(() => { })
                    .catch((error) => { });
            })
            .catch((error) => {
                setAuthError(error.message);
                console.log(error);
            })
            .finally(() => setLoading(false));
    }

    //Login with Email
    const loginUser = (email, password, location, history) => {
        setLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {

                //Private Route redirect
                const destination = location?.state?.from || '/';
                history.replace(destination);
                setAuthError('');
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setLoading(false));
    }

    //Sign-in WITH Google
    const signInWithGoogle = (location, history) => {
        setLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                //save user to database
                saveUser(user.email, user.displayName, 'PUT');
                // saveGoogleUser(user.email, user.displayName);

                //Private Route redirect
                const destination = location?.state?.from || '/';
                history.replace(destination);
                setAuthError('');

            }).catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setLoading(false));
    }

    //observe user state
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                getIdToken(user)
                    .then(idToken => {
                        setToken(idToken)
                    })
            } else {
                setUser({});
            }
            setLoading(false);
        });
        return () => unsubscribe;
    }, [])

    //Admin
    useEffect(() => {
        fetch(`https://sleepy-ravine-27110.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user.email])

    //LOGOUT
    const logout = () => {
        setLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        })
            .finally(() => setLoading(false));
    }

    //save Register user data to server
    const saveUser = (email, name, method) => {
        // const saveUser = (email, name) => {
        const user = { email, name };
        fetch('https://sleepy-ravine-27110.herokuapp.com/users', {
            // method: method,
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
    }
    ////save/update Google user data to server
    // const saveGoogleUser = (email, name) => {
    //     const user = { email, name };
    //     fetch('http://localhost:5000/users', {
    //         method: 'PUT',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(user)
    //     })
    //         .then()
    // }

    return {
        user,
        admin,
        token,
        registerUser,
        loginUser,
        logout,
        loading,
        authError,
        signInWithGoogle,

    }

}

export default useFirebase;