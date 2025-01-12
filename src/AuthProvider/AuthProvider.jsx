import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import auth from "../firebase/firebase.init";

export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)
    const signUpUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const updateProfileUser = (name, photo) => {
        setLoading(true);
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }

    const logOut = () => {
        setLoading(true);
        signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log('currentUser--->', currentUser)
            setLoading(false);
            return () => {
                unsubscribe()
            }
        })
    }, [])

    const authInfo = {
        name: 'anik',
        user,
        loading,
        signUpUser,
        signInUser,
        updateProfileUser,
        logOut,
    }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;