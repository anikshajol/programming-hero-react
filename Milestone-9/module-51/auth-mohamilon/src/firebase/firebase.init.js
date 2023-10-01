// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDuXONQLrhYVMcAo_vLb2KAikQPFoMG11Y",
  authDomain: "auth-moha-milon-c2844.firebaseapp.com",
  projectId: "auth-moha-milon-c2844",
  storageBucket: "auth-moha-milon-c2844.appspot.com",
  messagingSenderId: "396571063525",
  appId: "1:396571063525:web:de2f77e5b7ee7d3854500c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
