import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";
import { auth ,googleProvider,db} from '../config/firebase';
import { createUserWithEmailAndPassword ,signInWithPopup,signOut} from 'firebase/auth';
import { collection, addDoc, setDoc,doc } from 'firebase/firestore';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [contact, setContact] = useState('');
  const [ecoPoints,setEcoPoints]=useState(0);
  const navigate = useNavigate();

  const SignIn = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Add user details to Firestore
      const userDocRef = doc(collection(db, 'USERS'), user.uid);
      const id=user.uid
      // Set document data
      await setDoc(userDocRef, {
        name,
        email,
        contact,
        ecoPoints,
        id
      });
      console.log("Successfully registered");
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      console.log("Error with Google:", err);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      console.log("Successfully signed out");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-[#164863]">
      <div className="bg-[#164863] w-1/2 shadow-[5px_5px_50px_rgba(47,46,60,1)] rounded-lg p-8">
        <h1 className="text-4xl font-bold mb-8 text-center text-[#ffffff]">Register</h1>
        
        {/* Registration Form */}
        <div className="w-full  h-64 flex flex-col justify-between">
          {/* Name Input */}
          <input 
            type="text" 
            placeholder="Name" 
            className="w-full mb-4 p-2 bg-gray-600 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
          />
          
          {/* Email Input */}
          <input 
            type="email" 
            placeholder="Email" 
            className="w-full mb-4 p-2 bg-gray-600 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
          />
          
          {/* Password Input */}
          <input 
            type="password" 
            placeholder="Password" 
            className="w-full mb-4 p-2 rounded-md border bg-gray-600 border-gray-300 focus:outline-none focus:border-blue-500" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />

          {/* Confirm Password Input */}
          <input 
            type="password" 
            placeholder="Confirm Password" 
            className="w-full mb-4 p-2 rounded-md bg-gray-600 border border-gray-300 focus:outline-none focus:border-blue-500" 
            value={confirmPassword} 
            onChange={(e) => setConfirmPassword(e.target.value)} 
          />

          {/* Contact Number Input */}
          <input 
            type="text" 
            placeholder="Contact Number" 
            className="w-full mb-4 p-2 bg-gray-600 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500" 
            value={contact} 
            onChange={(e) => setContact(e.target.value)} 
          />
         
          {/* Register Button */}
          <button 
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
            onClick={SignIn} // Add SignIn function to onClick event
          >
            Register
          </button>
          <button className='mt-12 bg-[#ffffff] mx-auto px-12 py-2 flex items-center' onClick={signInWithGoogle}>
            <FaGoogle/>
          </button>
          <button onClick={logout}>Logout</button>
        </div>
      </div>
    </div>
  );
};

export default Register;