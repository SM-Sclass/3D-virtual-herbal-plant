"use client";
import React, { useState } from 'react';
import skincare from '../../../utils/skincare';
import PlantCard from '../../../component/Plantcard';

function Page() {
  const [searchTerm, setSearchTerm] = useState('');

  // Filter plants based on the search term
  const filteredSkincare = Object.entries(skincare).filter(([key, plant]) =>
    plant.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-white h-full rounded-md flex flex-col items-center">
      <h1 className="text-3xl md:text-4xl font-bold mt-6 mb-4 text-green-900">Skincare</h1>
      
      {/* Search Bar */}
      <div className="relative w-full max-w-3xl mb-6">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search plants..."
          className="w-full pl-12 pr-4 py-3 text-gray-800 placeholder-gray-500 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <svg
            className="svg-icon search-icon w-6 h-6 text-gray-400"
            aria-labelledby="title desc"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 19.9 19.7"
          >
            <title id="title">Search Icon</title>
            <desc id="desc">A magnifying glass icon.</desc>
            <g className="search-path" fill="none" stroke="#848F91">
              <path strokeLinecap="square" d="M18.5 18.3l-5.4-5.4" />
              <circle cx="8" cy="8" r="7" />
            </g>
          </svg>
        </div>
      </div>

      {/* Display Plant Cards */}
      <div className="container my-6 py-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {filteredSkincare.length > 0 ? (
          filteredSkincare.map(([key, plant]) => {
            const urlKey = plant.title.toLowerCase().replace(/\s+/g, ''); // URL-friendly format
            return (
              <PlantCard key={key} plant={plant} urlKey={urlKey} />
            );
          })
        ) : (
          <p className="text-gray-600 text-xl col-span-full text-center">No plants found</p>
        )}
      </div>
    </div>
  );
}

export default Page;
``
