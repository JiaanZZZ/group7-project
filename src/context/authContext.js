import React, { createContext, useContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { authFirebase } from "../component/Firebase";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  //console.log(user)
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(authFirebase, provider);
  };

  const logOut = ()=>{
    signOut(authFirebase)
  }

  useEffect(() => {
    const unsubsribe = onAuthStateChanged(authFirebase, (currentUser) => {
      setUser(currentUser)
    });
    return () => {
      unsubsribe();
    };
  }, [user]);
  return (
    <AuthContext.Provider value={{ googleSignIn,user,logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
