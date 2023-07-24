import React, { createContext, useEffect, useState } from "react";
import { app } from "../Firebase/fb.config";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { toast } from "react-hot-toast";
import { useSignup } from "../Hooks/useSignup";

export const LayerContext = createContext(null);
const AuthContext = ({ children }) => {
  const auth = getAuth(app);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Provider Auth
  const GoogleProvider = new GoogleAuthProvider();
  const GithubProvider = new GithubAuthProvider();

  // Google Auth
  const GoogleAuth = () => {
    setLoading(true);
    return signInWithPopup(auth, GoogleProvider)
      .then(() => {
        useSignup(auth.currentUser.email, auth.currentUser.displayName);
      })
      .catch((error) => console.log(error.message));
  };

  // Github Auth
  const GithubAuth = () => {
    setLoading(true);
    return signInWithPopup(auth, GithubProvider)
      .then(() => {
        useSignup(auth.currentUser.email, auth.currentUser.displayName);
      })
      .catch((error) => toast.error("Something went wrong. Try again."));
  };

  // Create Account
  const createAccount = (email, password, name) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        updateProfile(auth.currentUser, {
          displayName: name,
        });
        useSignup(email, name);
      })
      .catch((error) => {
        if (error.message === "Firebase: Error (auth/email-already-in-use).") {
          toast.error("Email already in use. Try again.");
        }
      });
  };
  // Login
  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
      .then(() => {})
      .catch((error) => {
        if (error.message === "Firebase: Error (auth/user-not-found).") {
          toast.error("User not found. Try again.");
        }
      });
  };
  // Logout
  const logout = () => {
    setLoading(true);
    return signOut(auth)
      .then(() => toast.success("Successfully Logged out!"))
      .catch((error) => toast.error("Something went wrong. Try again."));
  };
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);
  const authInfo = {
    user,
    loading,
    GoogleAuth,
    GithubAuth,
    createAccount,
    login,
    logout,
  };
  return (
    <LayerContext.Provider value={authInfo}>{children}</LayerContext.Provider>
  );
};

export default AuthContext;
