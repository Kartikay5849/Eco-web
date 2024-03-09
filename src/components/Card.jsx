import React from 'react';

const Card = ({ title, description, imageUrl, buttonText }) => {
  return (
    <div className="card relative rounded-xl overflow-hidden bg-blue-200 shadow-lg group">
      <div className="absolute inset-0 bg-cover transition-transform duration-500 ease-in-out group-hover:transform group-hover:-translate-y-full" style={{ backgroundImage: `url(${imageUrl})` }}></div>
      <div className="relative z-10 flex flex-col items-center justify-end w-full h-full p-12 text-[#1a1a1d] opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100 group-hover:translate-y-0">
        <h2 className="title text-2xl font-bold">{title}</h2>
        <p className="copy text-base font-serif ">{description}</p>
        <button className="btn mt-6 px-4 py-2 rounded-full text-white text-xs font-bold tracking-wide uppercase bg-[#164863]">{buttonText}</button>
      </div>
    </div>
  );
};

export default Card;
