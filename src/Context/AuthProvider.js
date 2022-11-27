import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/Firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);


    // Create User
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // LogIn
    const userLogin = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    //Logout
    const logOut = () => {
        setLoading(true);
        return signOut(auth)
    }

    //reset pass
    const resetPassword = (userEmail) => {
        return sendPasswordResetEmail(auth, userEmail);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('User Observing');
            setUser(currentUser);
            setLoading(false);
        });
        return () => unsubscribe();
    }, []);



    const authInfo = {
        createUser,
        userLogin,
        user,
        logOut,
        loading,
        resetPassword
    }




    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;


// import React, { createContext } from 'react';
// import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
// import app from '../Firebase/Firebase.config';


// export const AuthContext = createContext()
// const auth = getAuth(app);

// const AuthProvider = ({ children }) => {

//     const createUser = (email, password) => {
//         return createUserWithEmailAndPassword(auth, email, password);
//     }

//     const authInfo = {
//         createUser
//     }

//     return (
//         <AuthContext.Provider value={authInfo}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

// export default AuthProvider;