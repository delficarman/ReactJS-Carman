import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY ,
    authDomain: "proyectofinal-carman.firebaseapp.com",
    projectId: "proyectofinal-carman",
    storageBucket: "proyectofinal-carman.appspot.com",
    messagingSenderId: "401008517865",
    appId: "1:401008517865:web:497102537b2e142d97c678"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);