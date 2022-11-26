import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import app from '../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const updateUser = (userInfo) => {
        return updateProfile(user, userInfo);
    }

    const logOut = () => {
        return signOut(auth);
    }

    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider);
    }
    useEffect(() => {
        const unsubcribe = onAuthStateChanged(auth, currentUser => {
            console.log('user observing');
            setUser(currentUser);
        });
        return () => unsubcribe();
    }, [])
    const authInfo = {
        createUser,
        signIn,
        logOut,
        googleSignIn,
        updateUser,
        user
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;