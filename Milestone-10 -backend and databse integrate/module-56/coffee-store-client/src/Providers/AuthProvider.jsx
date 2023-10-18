import { createContext, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);
  const auth = getAuth(app);

  // create user

  const createUser = (email, password) => {
    setLoader(false);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   login

  const login = (email, password) => {
    setLoader(false);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const userInfo = {
    user,
    loader,
    createUser,
    login,
  };

  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
