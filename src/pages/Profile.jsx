import React from 'react';

const Profile = () => {

  return (
    <div className="bg-[#579fc5]  h-screen flex justify-center items-center">
      <div className=" w-screen -mt-12 rounded-lg p-8 flex flex-col items-center space-y-4">
        {/* Profile Details */}
        <div class="bg-blue-200 w-full bg-opacity-70 rounded-lg p-10 flex flex-col items-center space-y-6 shadow-lg">
            <img class="w-32 h-32 rounded-full object-cover border-4 border-gray-200" src="https://via.placeholder.com/150" alt="Profile Picture" />
            <h1 class="text-5xl font-extrabold text-black">Kartikay</h1>
            <p class="text-xl text-gray-100">email@example.com</p>
            <p class="text-xl text-gray-100">123-456-7890</p>
        </div>


        <hr className="border-gray-300 w-full" />
        {/* Eco Points and Global Eco Points */}
        <div class='w-1/3 bg-blue-200 h-auto flex flex-col rounded-md shadow-md'>
          <div class='flex flex-row justify-between items-center py-4 px-6'>
            <p class='text-3xl  text-blue-700'>Ecopoints</p>
            <p class='bg-white text-blue-700 px-24 py-6 rounded-md'>100</p>
          </div>
          <div class='flex flex-row justify-between items-center py-4 px-6'>
            <p class='text-3xl  text-blue-700'>Global Ecorank</p>
            <p class='bg-white text-blue-700 px-24 py-6 rounded-md  '>200</p>
          </div>
          {/* <div class='flex flex-row justify-between items-center py-4 px-6'>
            <p class='text-3xl font-semibold text-blue-700'>Category 3</p>
            <p class='bg-white text-blue-700 px-4 py-1 rounded-full'>300</p>
          </div>
          <div class='flex flex-row justify-between items-center py-4 px-6'>
            <p class='text-3xl font-semibold text-blue-700'>Category 4</p>
            <p class='bg-white text-blue-700 px-4 py-1 rounded-full'>400</p>
          </div> */}
        </div>


      </div>
    </div>  
  );
};

export default Profile;
