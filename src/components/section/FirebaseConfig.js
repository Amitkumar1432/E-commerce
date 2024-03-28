// Import the functions you need from the SDKs you need

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvhCk17nX1kZLka7kvOPaAHuKc9FQSnSo",
  authDomain: "react-firebase-auth-ef810.firebaseapp.com",
  projectId: "react-firebase-auth-ef810",
  storageBucket: "react-firebase-auth-ef810.appspot.com",
  messagingSenderId: "824057420138",
  appId: "1:824057420138:web:43244b135aa925921aed13",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export default app;
