import React,{useState,useEffect} from 'react'
import Header from '../components/Header'
import Countdown from '../components/Countdown'
import { auth ,db} from '../config/firebase'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import backgroundImage from '../assets/home.svg';
import { doc,getDocs,getDoc , orderBy, query} from 'firebase/firestore'

import { collection } from 'firebase/firestore'
const Home = () => {
const [loggedInUser, setLoggedInUser] = useState();
const [leaderboardData, setLeaderboardData] = useState([]);

  
    useEffect(() => {
      async function fetchLeaderboardData() {
        const leaderboardRef = collection(db, 'USERS'); // Assuming your collection name is 'users'
        const leaderboardSnapshot = await getDocs(query(leaderboardRef, orderBy('ecoPoints', 'desc'))); // Query users collection and order by 'ecoPoints' in descending order
        const data = []; // Array to store leaderboard data
        
        leaderboardSnapshot.forEach((doc) => {
          // Push document data into the array
          data.push({
            id: doc.id, // Assuming your uid is stored as document id
            ...doc.data() // Other user data
          });
        });
        
        setLeaderboardData(data);
      }
  
      fetchLeaderboardData();
    }, []);
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
    <div className="bg-fixed bg-cover bg-blue-300 bg-center" style={{ backgroundImage: `url(${backgroundImage})`, minHeight: '100vh' }}>
      {/* <div className="absolute inset-0 bg-opacity-50 bg-black"></div> Overlay to darken the background image */}
    
         <div className='h-screen z-10'>
            <Header/>
            <div className='flex flex-col justify-center items-center mt-16'>
                <div>
                <div className='flex text-[#164863] flex-col items-center'>
                    <p className='text-8xl font-semibold text-center break-all '>
                        <span className="">Clean Future</span><br />
                        <span className="">For All</span>
                    </p>
                </div>

                </div>
                <div className='mt-12'>
                    <Countdown/>
                    { loggedInUser ?
                    <></>
                            :<div className="flex gap- mt-8 mx-auto text-xl w-full justify-evenly ">
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
                    }
                </div>
            
            </div>
        </div>

        {/* what we fight for */}

        <div id='aboutus' className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <h1 className='text-[#164863] text-5xl text-center mb-12 font-bold'>What we Fight For?</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                <div className="bg-gray-200 pb-8 border-2 border-blue-200 delay-125 duration-500 hover:border-[#164863] ">
                <h2 className="text-2xl bg-[#8cc5e4] text-[#1a1a1d] text-center py-3 font-bold mb-2">Environmental Preservation</h2>
                <p className="text-xl px-3 text-justify">Our primary mission is the protection and preservation of coastal ecosystems, 
                achieved through community-driven initiatives, advocacy, and sustainable management practices.
                </p>
                </div>
                <div className="bg-gray-200 border-2 border-blue-200 delay-125 duration-500 hover:border-[#164863] ">
                <h2 className="text-2xl bg-[#8cc5e4] text-[#1a1a1d] text-center py-3 font-bold mb-2">Community Engagement</h2>
                <p className="text-xl px-3 text-justify">We empower individuals to actively participate in beach cleaning events and environmental education programs,
                 fostering a sense of responsibility and stewardship towards our natural surroundings.
                </p>
                </div>
                <div className="bg-gray-200 border-2 border-blue-200 delay-125 duration-500 hover:border-[#164863] ">
                <h2 className="text-2xl bg-[#8cc5e4] text-[#1a1a1d] text-center py-3 font-bold mb-2">Sustainable Tourism Advocacy</h2>
                <p className="text-xl px-3 text-justify">We advocate for eco-friendly practices that minimize our environmental footprint while supporting responsible tourism, ensuring that our coastal
                 areas remain pristine and accessible for future generations.
                </p>
                </div>
                <div className="bg-gray-200 border-2 border-blue-200 delay-125 duration-500 hover:border-[#164863] ">
                <h2 className="text-2xl bg-[#8cc5e4] text-[#1a1a1d] text-center py-3 font-bold mb-2">Education and Outreach</h2>
                <p className="text-xl px-3 text-justify">Through workshops, resources, and awareness campaigns, we aim to increase environmental literacy and inspire action, equipping communities with the knowledge 
                and tools needed to address pressing environmental challenges.
                </p>
                </div>
                <div className="bg-gray-200 border-2 border-blue-200 delay-125 duration-500 hover:border-[#164863] ">
                <h2 className="text-2xl bg-[#8cc5e4] text-[#1a1a1d] text-center py-3 font-bold mb-2">Collaborative Impact</h2>
                <p className="text-xl px-3 text-justify">We believe in the power of partnerships and collaboration, working closely with NGOs, businesses, and local communities to amplify our efforts, leverage resources, 
                and drive meaningful change towards a more sustainable future.
                </p>
                </div>
                
            </div>
        </div>

        {/* Leaderboard */}
        <div className="container mx-auto h-auto py-32">
            <h1 className="text-5xl text-[#164863] font-bold mb-4 text-center">Leaderboard</h1>
            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Rank
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Name
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Points
                    </th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {leaderboardData.map((user, index) => (
                    <tr key={user.id}>
                        <td className="px-6 py-4 whitespace-nowrap">{index + 1}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{user.name}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{user.ecoPoints}</td>
                    </tr>
                    ))}
                </tbody>
                </table>
            </div>
        </div>

        {/* Our partners */}

        <div className="h-screen flex flex-col">
            {/* Header */}
            <div className='text-center'>
                <h1 className='text-5xl text-[#164863] font-bold'>Our Partners</h1>
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

   

        <div id='contact' className="py-12 mb-48 sm:mt-8 ">
        <h2 className="text-5xl font-bold text-center text-[#164863]  mb-8">Feedback for us</h2>

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