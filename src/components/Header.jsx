import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div>
        <div className='flex' >   
            <ul className='  mx-auto rounded-xl mt-8  bg-[#ddf2fd]  bg-opacity-30 flex text-xl md:text-2xl px-1 sm:px-12 md:px-40 py-7 gap-16 justify-center'> 
                <Link to="/aboutus"><li className='hover:cursor-pointer hover:text-white delay-125 duration-500'>About Us</li></Link>
                <Link to="/learn"> <li className='hover:cursor-pointer hover:text-white delay-125 duration-500'>Learn</li></Link>
                <Link to="/contact"> <li className='hover:cursor-pointer hover:text-white delay-125 duration-500 '>Contact</li></Link>
                <Link to="/rewards"> <li className='hover:cursor-pointer hover:text-white delay-125 duration-500'> Rewards</li></Link>
                
            </ul>
            <Link to="/profile">
              <button className="bg-[#ddf2fd] bg-opacity-60  invisible md:visible md:m-8  md:px-8 py-5 rounded-md hover:bg-opacity-100 transition duration-300">Login</button>
            </Link>
            {/* <Link className="bg-[#ddf2fd] bg-opacity-60  invisible md:visible md:m-8  md:px-8 py-5 rounded-md hover:bg-opacity-100 transition duration-300 " to="/profile">
              <button>
                  <Profile/>
              </button>
            </Link> */}

        </div>
    </div>
  )
}

export default Header