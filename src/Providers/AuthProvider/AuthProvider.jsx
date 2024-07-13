/* eslint-disable react/prop-types */
// import { createContext, useEffect, useState } from "react";
// import {
//   createUserWithEmailAndPassword,
//   getAuth,
//   onAuthStateChanged,
//   sendPasswordResetEmail,
//   signInWithEmailAndPassword,
//   signOut,
//   updateProfile,
// } from "firebase/auth";
// import app from "../../Firebase/firebase.config";

// export const AuthContext = createContext(null);
// const auth = getAuth(app);

// const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(false);

//   // create User With Email And Password
//   const createUserUsingEmailAndPassword = (email, password) => {
//     setLoading(true);
//     return createUserWithEmailAndPassword(auth, email, password);
//   };

//   // signIn With Email And Password
//   const userSignInUsingEmailAndPassword = (email, password) => {
//     setLoading(true);
//     return signInWithEmailAndPassword(auth, email, password);
//   };

//   //   Current User:
//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//       setUser(currentUser);
//       console.log("Current User", currentUser);
//       setLoading(false);
//     });

//     return () => {
//       return unsubscribe;
//     };
//   }, []);

//   // sign out current user
//   const logOut = () => {
//     return signOut(auth);
//   };

//   // Send a password reset email

//   // Check the user is signed in or not

//   const authInfo = {
//     user,
//     createUserUsingEmailAndPassword,
//     userSignInUsingEmailAndPassword,
//     updateUserProfile,
//     logOut,
//     resetPassword,
//     loading,
//   };

//   return (
//     <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
//   );
// };

// export default AuthProvider;

import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from './../../Firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // Initial loading state set to true

  // Registration User:
  const createUser = async (email, password) => {
    setLoading(true);
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } finally {
      setLoading(false);
    }
  };

  // Login User:
  const loginUser = async (email, password) => {
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } finally {
      setLoading(false);
    }
  };

  // Current User:
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const logOut = async () => {
    setLoading(true);
    try {
      await signOut(auth);
    } finally {
      setLoading(false);
    }
  };

  const resetPassword = async (email) => {
    setLoading(true);
    try {
      await sendPasswordResetEmail(auth, email);
    } finally {
      setLoading(false);
    }
  };

  const updateUserProfile = async (displayName) => {
    setLoading(true);
    try {
      if (auth.currentUser) {
        await updateProfile(auth.currentUser, { displayName });
      }
    } finally {
      setLoading(false);
    }
  };

  const authInfo = {
    createUser,
    loginUser,
    user,
    loading,
    logOut,
    updateUserProfile,
    resetPassword,
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

