// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5eikHfRMnqzVo44Ijt3Rsnj5V98Ltx1Y",
  authDomain: "taskmanager-io.firebaseapp.com",
  projectId: "taskmanager-io",
  storageBucket: "taskmanager-io.appspot.com",
  messagingSenderId: "103864178220",
  appId: "1:103864178220:web:a4b2b7efc5b4666a2ce389",
  measurementId: "G-B0DEJQG104",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

//---------EXPORTS------------\

export default app;
export const db = getFirestore(app);
export const auth = getAuth(app);
