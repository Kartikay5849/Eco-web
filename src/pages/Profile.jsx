import React, { useState, useEffect } from 'react';
import { auth, db } from '../config/firebase';
import { getDoc, doc } from "firebase/firestore";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const Profile = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const navigate=useNavigate();
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
    < div className='bg-[#579fc5]'>
    <button onClick={()=>{navigate("/")}} className='bg-[#ffffff] m-3 text-2xl rounded-3xl font-semibold py-3 px-5' >Home</button>
    <div className="bg-[#579fc5] min-h-screen flex justify-center items-center">
      
      <div className="w-full md:w-screen max-w-4xl mt-12 -m-2 md:-mt-12 rounded-lg p-8 flex flex-col items-center space-y-4">
        {/* Profile Details */}
        <div className="bg-blue-200 w-full bg-opacity-70 rounded-lg p-10 flex flex-col items-center space-y-6 shadow-lg">
          <img
            className="w-32 h-32 rounded-full object-cover border-4 border-gray-200"
            src={loggedInUser?.profilePicture || 'https://via.placeholder.com/150'}
            alt="Profile Picture"
          />
          <h1 className="text-5xl md:text-7xl font-extrabold text-black">{loggedInUser?.name}</h1>
          <p className="text-xl md:text-2xl text-gray-100">{loggedInUser?.email}</p>
          <p className="text-xl md:text-2xl text-gray-100">{loggedInUser?.phoneNumber}</p>
        </div>

        <hr className="border-gray-300 w-full" />

        {/* Eco Points and Global Eco Points */}
        <div className="w-full md:w-full bg-blue-200 h-auto flex flex-col rounded-md shadow-md">
          <div className="flex flex-row justify-between items-center py-4 px-6">
            <p className="text-3xl md:text-4xl text-blue-700">Ecopoints</p>
            <p className="bg-white text-blue-700 px-4 md:px-12 py-4 md:py-6 rounded-md">{loggedInUser?.ecoPoints}</p>
          </div>
          <div className="flex flex-row justify-between items-center py-4 px-6">
            <p className="text-3xl md:text-4xl text-blue-700">Global Ecorank</p>
            <p className="bg-white text-blue-700 px-4 md:px-12 py-4 md:py-6 rounded-md">#2</p>
          </div  >
          <div className='text-center' >
          <Link to="/rewards">
           <div className='bg-white text-blue-700 px-8 text-2xl hover:bg-opacity-30 delay-150 duration-300 hover:text-white md:px-12 py-4 md:py-6 rounded-md' >Redeem</div>
           </Link>
           </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Profile;
