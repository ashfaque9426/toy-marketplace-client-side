// eslint-disable-next-line no-unused-vars
import React, { createContext, useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const updataUserProfile = (user, name, url) => {
        setLoading(true);
        return updateProfile(user, {
            displayName: name,
            photoURL: url
        });
    }

    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    const appInfo = {
        user,
        loading,
        createUser,
        signIn,
        updataUserProfile,
        googleSignIn,
        logOut
    };

    useEffect(()=> {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setLoading(false);
            setUser(currentUser);
            console.log(currentUser);

            if (currentUser && currentUser.email) {
                const loggedUserEmail = {
                    email: currentUser.email
                }

                fetch('https://b7a11-toy-marketplace-server-side-ashfaque9426-j702e8udy.vercel.app/jwt', {
                    method: "POST",
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(loggedUserEmail)
                })
                    .then(res => res.json())
                    .then(data => {
                        localStorage.setItem('figurama-secret-token', data.token);
                    })
            }
            else {
                localStorage.removeItem('figurama-secret-token');
            }
        });

        return ()=> unsubscribe();
    }, []);

    return (
        <AuthContext.Provider value={appInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;