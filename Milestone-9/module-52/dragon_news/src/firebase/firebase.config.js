// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDcllD1OC21hLWvY72cUToUSoCYRC7UHOg",
  authDomain: "react-dragon-news-auth-46f8d.firebaseapp.com",
  projectId: "react-dragon-news-auth-46f8d",
  storageBucket: "react-dragon-news-auth-46f8d.appspot.com",
  messagingSenderId: "907182624619",
  appId: "1:907182624619:web:ebd9c7c7dd960cc2f2862e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;
