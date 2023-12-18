// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

//Esto lo agregue yo:
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {getAuth, GoogleAuthProvider} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY ,
    authDomain: "proyectofinal-carman.firebaseapp.com",
    projectId: "proyectofinal-carman",
    storageBucket: "proyectofinal-carman.appspot.com",
    messagingSenderId: "401008517865",
    appId: "1:401008517865:web:497102537b2e142d97c678"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Esto tambien lo agregue yo:
export const db = getFirestore(app);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();