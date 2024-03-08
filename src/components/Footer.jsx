import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto flex flex-wrap">
        <div className="w-full md:w-1/3 px-4 mb-6">
          <h2 className="text-xl font-bold mb-4">About Us</h2>
          <p className="text-sm">Eco Beach Platform is dedicated to promoting environmental conservation and sustainability. Our mission is to protect our beaches and oceans for future generations.</p>
        </div>
        <div className="w-full md:w-1/3 px-4 mb-6">
          <h2 className="text-xl font-bold mb-4">Contact Information</h2>
          <p className="text-sm">Email: info@ecobeachplatform.com</p>
          <p className="text-sm">Phone: +1234567890</p>
        </div>
        <div className="w-full md:w-1/3 px-4 mb-6">
          <h2 className="text-xl font-bold mb-4">Social Media</h2>
          <div className="flex">
            <a href="#" className="mr-4"><i className="fab fa-facebook"></i></a>
            <a href="#" className="mr-4"><i className="fab fa-twitter"></i></a>
            <a href="#" className="mr-4"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
        <div className="w-full px-4 mb-6">
          <h2 className="text-xl font-bold mb-4">Useful Links</h2>
          <ul>
            <li><a href="#" className="text-sm">FAQs</a></li>
            <li><a href="#" className="text-sm">Terms of Service</a></li>
            <li><a href="#" className="text-sm">Privacy Policy</a></li>
            <li><a href="#" className="text-sm">Rewards Page</a></li>
          </ul>
        </div>
        <div className="w-full px-4 mb-6">
          <h2 className="text-xl font-bold mb-4">Newsletter Signup</h2>
          <form>
            <input type="email" placeholder="Enter your email" className="bg-gray-800 text-white px-4 py-2 rounded-md mb-4" />
            <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">Subscribe</button>
          </form>
        </div>
        <div className="w-full px-4 mb-6">
          <h2 className="text-xl font-bold mb-4">Site Navigation</h2>
          <ul>
            <li><a href="#" className="text-sm">Home</a></li>
            <li><a href="#" className="text-sm">About</a></li>
            <li><a href="#" className="text-sm">Events</a></li>
            <li><a href="#" className="text-sm">Donate</a></li>
          </ul>
        </div>
        <div className="w-full px-4 mb-6">
          <p className="text-sm">&copy; {new Date().getFullYear()} Eco Beach Platform. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer