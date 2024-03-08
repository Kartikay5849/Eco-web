import { initializeApp } from "firebase/app";
import  {getAuth,GoogleAuthProvider} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyB1-8hA-bOD6I_RRfCEltb3ixBaUTUpguI",
  authDomain: "eco-admin-945ed.firebaseapp.com",
  projectId: "eco-admin-945ed",
  storageBucket: "eco-admin-945ed.appspot.com",
  messagingSenderId: "490737959185",
  appId: "1:490737959185:web:d1d9514ffcd55942828cb0",
  measurementId: "G-N63BYX5CSZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export  const auth=getAuth();
export const googleProvider=new GoogleAuthProvider();
export const db=getFirestore(app)