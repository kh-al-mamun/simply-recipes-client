// eslint-disable-next-line no-unused-vars
import React, { createContext, useEffect, useState } from 'react';
import auth from '../../firebase.config';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updatePassword, updateProfile } from 'firebase/auth';
import { toast } from 'react-hot-toast';

export const AuthContext = new createContext(null);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider()

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createAccount = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const verifyMail = (currentUser) => {
        return sendEmailVerification(currentUser)
    }

    const logIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const googleLogin = () => signInWithPopup(auth, googleProvider);

    const githubLogin = () => signInWithPopup(auth, githubProvider);

    const changeInfo = (info) => {
        updateProfile(auth.currentUser, info)
        .then()
        .catch(error => {console.log(error); toast.error(error.message)})
    };

    const changePassword = (newPass) => updatePassword(user, newPass);

    const resetPassword = (email) => sendPasswordResetEmail(auth, email);

    const logOut = () => signOut(auth);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('user', currentUser);
            setUser(currentUser);
            setLoading(false);
        });
        return unsubscribe;
    }, [])

    const authInfo = {
        user,
        loading,
        createAccount,
        verifyMail,
        logIn,
        googleLogin,
        githubLogin,
        changeInfo,
        changePassword,
        resetPassword,
        logOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;