import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBtR5Iy3D5C_jZOVUZ0PqDkkwyI8OhU0lw",
    authDomain: "rugby-world-66a96.firebaseapp.com",
    projectId: "rugby-world-66a96",
    storageBucket: "rugby-world-66a96.appspot.com",
    messagingSenderId: "586932297385",
    appId: "1:586932297385:web:1e71c20de419e779eed3b8"
}; 

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

//process.env.REACT_APP_API_KEY