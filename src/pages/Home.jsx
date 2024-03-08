import React from 'react'
import Header from '../components/Header'
// import Countdown from '../components/Countdown'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

const Home = () => {

  return (
    <div className='bg-[#164863] '>
        <div className='h-screen'>
            <Header/>
            <div className='flex flex-col justify-center items-center mt-16'>
                <div>
                    <div className='flex  text-[#ddf2fd] flex-col'> 
                    <p className='text-7xl break-all'>
                        <span className='text-8xl '>
                        Clean Future<br/></span> 
                        For All
                    </p>
                    
                    </div>
                </div>
                <div className='mt-12'>
                    {/* <Countdown/> */}
                    <div className="flex gap- mt-8 mx-auto text-xl w-full justify-evenly ">
                        <Link to="/register">
                        <button className="bg-[#9ba2a7] px-4 py-2 rounded-md hover:bg-[#7c7c81] hover:text-white delay-125 duration-500">
                            Register
                        </button>
                        </Link>
                    <Link to="/login">
                        <button  className=" border-2 border-[#9ba2a7] px-4 py-2 rounded-md hover:border-[#a1c3db] shadow-xl text-white delay-125 duration-500">
                            Login
                        </button>
                    </Link>
                </div>
                </div>
            
            </div>
        </div>

        {/* what we fight for */}

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <h1 className='text-white text-5xl text-center mb-12 font-bold'>What we Fight For?</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                <div className="bg-gray-200 p-4 rounded-lg">
                <h2 className="text-3xl font-bold mb-2">Plastic Reduction</h2>
                <p className="text-xl text-justify">Our organization is dedicated to reducing the prevalence and impact of plastic pollution in marine
                 environments. We recognize urgent need to address this global issue that threatens marine life and ecosystems.
                  Through various initiatives, such as organizing beach clean-up events, advocating for policies to reduce single-use plastics,
                   and promoting recycling and waste management programs, we aim to minimize plastic waste and its detrimental effects on the environment.
                </p>
                </div>
                <div className="bg-gray-200 p-4 rounded-lg">
                <h2 className="text-3xl font-bold mb-2">Ocean Protection</h2>
                <p className="text-xl">Defending our oceans is at the core of our mission. We are committed to addressing the myriad of threats that endanger 
                the health and vitality of marine ecosystems. Our initiatives encompass a wide range of activities, including lobbying for the establishment 
                of marine protected areas, supporting sustainable fishing practices, and raising awareness about the importance of ocean conservation. </p>
                </div>
                <div className="bg-gray-200 p-4 rounded-lg">
                <h2 className="text-3xl font-bold mb-2">Beach Access</h2>
                <p className="text-xl">
                We believe that access to beaches should be equitable and inclusive for all individuals, regardless of background or ability. Our organization
                 is dedicated to ensuring that everyone has the opportunity to enjoy and benefit from our coastal environments. We collaborate with policymakers
                  and community stakeholders to address barriers to beach access, such as restrictive regulations or inadequate infrastructure.
                </p>
                </div>
                <div className="bg-gray-200 p-4 rounded-lg">
                <h2 className="text-3xl font-bold mb-2">Coast and Climate</h2>
                <p className="text-xl">Our organization understands the intrinsic link between coastal regions and climate change, and we are dedicated to 
                 addressing the interconnected challenges presented by these issues. Coastal areas are particularly vulnerable to the impacts of climate
                 change, including rising sea levels, increased frequency of extreme weather events, and coastal erosion. </p>
                </div>
                <div className="bg-gray-200 p-4 rounded-lg">
                <h2 className="text-3xl font-bold mb-2">Clean Water</h2>
                <p className="text-xl">Protecting the health and sustainability of our planet’s most precious resource, water, is a cornerstone of our work.
                 We recognize that access to clean water is essential for human health, environmental well-being, and economic prosperity. Our initiatives 
                 focus on implementing water conservation measures, preventing pollution, and advocating for policies that prioritize clean water resources.</p>
                </div>
            </div>
        </div>

        {/* Leaderboard */}
        <div className="h-screen flex mt-48 py-12 flex-col">
      {/* Header */}
        <div className='text-center'>
            <h1 className='text-5xl text-white' >LEADERBOARD</h1>
        </div>
      {/* Ranking */}
        <div className="flex-grow ">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Ranking for Player 1 */}
                <div className="bg-white rounded-lg shadow-md p-4 mb-4">
                    <h2 className="text-lg font-semibold mb-2">1. Kartikay</h2>
                    <p className="text-sm">Ecopoints: 1000</p>
                </div>
                {/* Ranking for Player 2 */}
                <div className="bg-white rounded-lg shadow-md p-4 mb-4">
                    <h2 className="text-lg font-semibold mb-2">2. Aditya </h2>
                    <p className="text-sm">Ecopoints: 900</p>
                </div>
                {/* Ranking for Player 3 */}
                <div className="bg-white rounded-lg shadow-md p-4 mb-4">
                    <h2 className="text-lg font-semibold mb-2">3.Avani</h2>
                    <p className="text-sm">Ecopoints: 800</p>
                </div>
                {/* Ranking for Player 4 */}
                <div className="bg-white rounded-lg shadow-md p-4 mb-4">
                    <h2 className="text-lg font-semibold mb-2">4. ABCD</h2>
                    <p className="text-sm">Ecopoints: 700</p>
                </div>
                </div>
            </div>
        </div>

        {/* Our partners */}

        <div className="h-screen flex flex-col">
            {/* Header */}
            <div className='text-center'>
                <h1 className='text-5xl text-white'>Our Partners</h1>
            </div>

            
            <div className="flex-grow">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-2 md:grid-cols-3 gap-4">
                {/* Partner 1 */}
                <div className="bg-white rounded-lg shadow-md p-4">
                    <img src="https://source.unsplash.com/random/200x200?sig=1" alt="Partner 1" className="mx-auto mb-4" />
                    <p className="text-lg text-center">ABC Hotel</p>
                </div>

                {/* Partner 2 */}
                <div className="bg-white rounded-lg shadow-md p-4">
                    <img src="https://source.unsplash.com/random/200x200?sig=2" alt="Partner 2" className="mx-auto mb-4" />
                    <p className="text-lg text-center">ABC Hotel</p>
                </div>

                {/* Partner 3 */}
                <div className="bg-white rounded-lg shadow-md p-4">
                    <img src="https://source.unsplash.com/random/200x200?sig=3" alt="Partner 3" className="mx-auto mb-4" />
                    <p className="text-lg text-center">ABC Hotel</p>
                </div>

                {/* Partner 4 */}
                <div className="bg-white rounded-lg shadow-md p-4">
                    <img src="https://source.unsplash.com/random/200x200?sig=4" alt="Partner 4" className="mx-auto mb-4" />
                    <p className="text-lg text-center">ABC Hotel</p>
                </div>

                {/* Partner 5 */}
                <div className="bg-white rounded-lg shadow-md p-4">
                    <img src="https://source.unsplash.com/random/200x200?sig=5" alt="Partner 5" className="mx-auto mb-4" />
                    <p className="text-lg text-center">ABC Hotel</p>
                </div>

                {/* Partner 6 */}
                <div className="bg-white rounded-lg shadow-md p-4">
                    <img src="https://source.unsplash.com/random/200x200?sig=6" alt="Partner 6" className="mx-auto mb-4" />
                    <p className="text-lg text-center">ABC Hotel</p>
                </div>
                </div>
            </div>
        </div>

   
        
        {/* Feedback */}

        <div className="py-12 mb-48 sm:mt-8 ">
        <h2 className="text-5xl font-bold text-center text-gray-200 mb-8">Feedback for us</h2>

         <div className="w-full flex justify-around mx-auto  px-4">
        <div className="flex flex-col  md:flex-row">
          <div className="md:w-1/2 p-4 m-2 rounded-xl bg-[#0c2e41]  sm:md-20 md:mr-48 md:pr-4 mb-6 md:mb-0">
            <h3 className=" font-semibold text-3xl text-gray-100 mb-4">Get in Touch</h3>
            <p className="text-gray-200 mb-2">Feel free to reach out to us for any inquiries or feedback. We would love to hear from you!</p>
            <p className="text-gray-200 mb-2">Email: example@example.com</p>
            <p className="text-gray-200">Phone: +1234567890</p>
          </div>
          <form className="md:w-1/2">
            <div className="flex flex-col mb-4">
              <label htmlFor="name" className="text-gray-100 mb-1">Your Name</label>
              <input type="text" id="name" name="name" className="px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:border-indigo-500" />
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="email" className="text-gray-100 mb-1">Your Email</label>
              <input type="email" id="email" name="email" className="px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:border-indigo-500" />
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="message" className="text-gray-100 mb-1">Message</label>
              <textarea id="message" name="message" rows="4" className="px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:border-indigo-500"></textarea>
            </div>

            <button type="submit" className="bg-gray-800 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition duration-300">Submit</button>
          </form>
        </div>
      </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Home