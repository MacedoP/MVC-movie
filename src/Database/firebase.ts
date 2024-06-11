// import { firebaseConfig } from "./config";
import { create } from "domain";
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import {addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";


const firebaseConfig = {
  apiKey: "AIzaSyCBfVouhfP8A1GLEkx3Iy7WyyfmQMkLSfQ",
  authDomain: "mvcmovie-app.firebaseapp.com",
  projectId: "mvcmovie-app",
  storageBucket: "mvcmovie-app.appspot.com",
  messagingSenderId: "309289099617",
  appId: "1:309289099617:web:14c899d5c23b6c69142520"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name: string, email: string, password: string) =>{
  try{

    const res = await createUserWithEmailAndPassword(auth,email, password);
    const user = res.user;
    await addDoc(collection(db, "user"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
  });

  }catch(error:any){
    console.log(error);
    // alert(error);
    toast.error(error.code.split('/')[1].split('-').join(" "));

  }

}

const login = async (email: string, password: string): Promise<void> => {
  try {
      await signInWithEmailAndPassword(auth, email, password);
  } catch (error: any) {
      console.log(error);
      // alert(error);
      toast.error(error.code.split('/')[1].split('-').join(" "));
  }
}

const logout = (): void => {
  signOut(auth);
}

export { auth, db, login, signup, logout };

// Adicione esta linha no final do arquivo para torná-lo um módulo
export {};