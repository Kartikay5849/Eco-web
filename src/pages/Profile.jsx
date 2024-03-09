import React, { useState, useEffect } from 'react';
import { auth, db } from '../config/firebase';
import {  getDoc, doc } from "firebase/firestore";

const Profile = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const currentUser = auth.currentUser;
        if (currentUser) {
          console.log("currenuid",currentUser.uid)
          

          // Fetch data of the document where document ID is equal to the UID of the logged-in user
          const userDocRef = doc(db, "USERS", currentUser.uid);
          const userDocSnapshot = await getDoc(userDocRef);
          if (userDocSnapshot.exists()) {
            setLoggedInUser(userDocSnapshot.data());
            console.log("v",userDocSnapshot.data())
            console.log("loggedInUser",loggedInUser)
          } else {
            console.log("User document not found!");
          }
        }
      } catch (error) {
        console.error("Error fetching user document:", error);
      }
    };

    const unsubscribe = auth.onAuthStateChanged(fetchData);
    return () => unsubscribe();
  }, []);

  return (
    <div className="bg-[#579fc5] h-screen flex justify-center items-center">
      <div className="w-screen -mt-12 rounded-lg p-8 flex flex-col items-center space-y-4">
        {/* Profile Details */}
        <div className="bg-blue-200 w-full bg-opacity-70 rounded-lg p-10 flex flex-col items-center space-y-6 shadow-lg">
          <img
            className="w-32 h-32 rounded-full object-cover border-4 border-gray-200"
            src={loggedInUser?.profilePicture || 'https://via.placeholder.com/150'}
            alt="Profile Picture"
          />
          <h1 className="text-5xl font-extrabold text-black">{loggedInUser?.name}</h1>
          <p className="text-xl text-gray-100">{loggedInUser?.email}</p>
          <p className="text-xl text-gray-100">{loggedInUser?.phoneNumber}</p>
        </div>

        <hr className="border-gray-300 w-full" />

        {/* Eco Points and Global Eco Points */}
        <div className="w-1/3 bg-blue-200 h-auto flex flex-col rounded-md shadow-md">
          <div className="flex flex-row justify-between items-center py-4 px-6">
            <p className="text-3xl  text-blue-700">Ecopoints</p>
            <p className="bg-white text-blue-700 px-24 py-6 rounded-md">{loggedInUser?.ecoPoints}</p>
          </div>
          <div className="flex flex-row justify-between items-center py-4 px-6">
            <p className="text-3xl  text-blue-700">Global Ecorank</p>
            <p className="bg-white text-blue-700 px-24 py-6 rounded-md">#2</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
