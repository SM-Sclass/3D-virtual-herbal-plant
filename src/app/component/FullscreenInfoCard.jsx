// component/FullscreenInfoCard.jsx
"use client";

import React from 'react';

const FullscreenInfoCard = ({ onFullScreen }) => {
  return (
    <div className="bg-white p-6 rounded-md shadow-lg text-center">
      <h2 className="text-2xl font-bold text-green-900 mb-4">Welcome to the Virtual Tour!</h2>
      <p className="mb-6 text-black">
        Explore the vibrant world of Herbal plants in our immersive 3D environment. 
        Get ready to learn about their properties and uses.
      </p>
      <button
        onClick={onFullScreen}
        className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition duration-200"
      >
        Enter
      </button>
    </div>
  );
};

export default FullscreenInfoCard;
