import { useState } from "react";
import {auth, googleProvider} from "../config/firebase";
import { createUserWithEmailAndPassword , signInWithPopup, signOut} from "firebase/auth";


function Auth(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signUp = async()=> {
        await createUserWithEmailAndPassword(auth,email,password);
    }

    const signInWithGoogle = async() => {
        await signInWithPopup(auth,googleProvider);
    }

    const logOut = async() =>{
        await signOut(auth);
    }

    return(

        <div>
            <span>Usuario: {auth?.currentUser?.email}</span>
            <input placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/>
            <input placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
            <button onClick={signUp}>Registrar</button>

            <button onClick={signInWithGoogle}>Ingresar con Google</button>
            <button onClick={logOut}>Cerrar sesión</button>
        </div>
    )
}


export default Auth;

//Solo falta llamarlo en App ahora.