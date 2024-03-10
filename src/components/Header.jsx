import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { auth, db } from '../config/firebase';
import { getDoc, doc } from 'firebase/firestore';

const Header = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const scrollToAboutUs = () => {
    const aboutUsSection = document.getElementById('aboutus');
    aboutUsSection.scrollIntoView({ behavior: 'smooth' });
  }
  const scrollToContact = () => {
    const contact = document.getElementById('contact');
    contact.scrollIntoView({ behavior: 'smooth' });
  }
  useEffect(() => {
    const fetchData = async () => {
      try {
        const currentUser = auth.currentUser;
        if (currentUser) {
          const userDocRef = doc(db, 'USERS', currentUser.uid);
          const userDocSnapshot = await getDoc(userDocRef);
          if (userDocSnapshot.exists()) {
            setLoggedInUser(userDocSnapshot.data());
          } else {
            console.log('User document not found!');
          }
        }
      } catch (error) {
        console.error('Error fetching user document:', error);
      }
    };

    const unsubscribe = auth.onAuthStateChanged(fetchData);
    return () => unsubscribe();
  }, []);

  return (
    <div>
      <div className='flex md:ml-20 '>
        <ul className='mx-auto rounded-xl mt-8 bg-[#164863] bg-opacity-60 flex text-xl md:text-2xl px-1 sm:px-12 md:px-40 py-7 gap-16 justify-center'>
          {/* <Link to='#aboutus'> */}
            <li onClick={scrollToAboutUs} className='hover:cursor-pointer hover:text-[#ffffff] delay-125 duration-500'>About Us</li>
          {/* </Link> */}
          {/* <Link to='/learn'>
            <li className='hover:cursor-pointer hover:text-[#ffffff]  delay-125 duration-500'>Learn</li>
          </Link> */}
          {/* <Link to='/contact'> */}
            <li onClick={scrollToContact} className='hover:cursor-pointer hover:text-[#ffffff]  delay-125 duration-500 '>Contact</li>
          {/* </Link> */}
          <Link to='/rewards'>
            <li className='hover:cursor-pointer hover:text-[#ffffff]  delay-125 duration-500'> Rewards</li>
          </Link>
          <Link to='/partner'>
            <li className='hover:cursor-pointer hover:text-[#ffffff]  delay-125 duration-500'> Partner</li>
          </Link>
        </ul>
        {loggedInUser ? (
          <Link to='/profile'>
            <button className='bg-[#164863] bg-opacity-20 hover:bg-opacity-60 delay-125 hover:text-white md:visible md:m-8 md:px-8 py-5 rounded-full  transition duration-300'>
              Profile
            </button>
          </Link>
        ) : (
          <Link to='/login'>
            <button className='bg-[#ddf2fd] bg-opacity-60 md:visible md:m-8 md:px-8 py-5 rounded-md hover:bg-opacity-100 transition duration-300'>
              Login
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
