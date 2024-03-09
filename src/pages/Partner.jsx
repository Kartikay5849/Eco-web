import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {  db } from '../config/firebase';
import { addDoc, collection } from 'firebase/firestore';
const JoinUsPage = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [website, setWebsite] = useState('');
  const [contact, setContact] = useState('');
  const navigate =useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Add hotel details to Firestore
      await addDoc(collection(db, 'HOTELS'), {
        name,
        address,
        description,
        location,
        website,
        contact
      });
      console.log("Hotel details added");
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-between">
      <header className="bg-blue-500 text-white text-center py-8 flex justify-between items-center px-4">
          <button className="text-white bg-blue-800 px-4 py-2 rounded-full text-left" onClick={() => { navigate("/") }}>
            Go back to home
          </button>
        <h1 className="text-3xl font-bold">Join Us In Our Cause</h1>
        <div></div> {/* To align the button and the title */}
      </header>
      <main className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4">Hotel Details</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Hotel Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Hotel Name"
              name="name"
              // value={hotelDetails.name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
              Address
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="address"
              type="text"
              placeholder="Hotel Address"
              name="address"
              // value={hotelDetails.address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
              Description
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="description"
              placeholder="Hotel Description"
              name="description"
              // value={hotelDetails.description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="location">
              Location
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="location"
              type="text"
              placeholder="Hotel Location"
              name="location"
              // value={hotelDetails.location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="website">
              Official Website
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="website"
              type="text"
              placeholder="Hotel Website"
              name="website"
              // value={hotelDetails.website}
              onChange={(e) => setWebsite(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="contact">
              Contact
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="contact"
              type="text"
              placeholder="Hotel Contact"
              name="contact"
              // value={hotelDetails.contact}
              onChange={(e) => setContact(e.target.value)}
            />
          </div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
            Submit
          </button>
        </form>
      </main>
      <footer className="bg-blue-500 text-white text-center py-8">
        <p>Copyright &copy; 2024. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default JoinUsPage;
