"use client";
import React, { useState } from 'react';
import { plants } from '../../utils/plantdata';
import PlantCard from "../../component/Plantcard";

function Explore() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedHabitat, setSelectedHabitat] = useState('');
  const [selectedTheme, setSelectedTheme] = useState('');
  const [selectedUse, setSelectedUse] = useState('');

  // Get unique filter values from plants data
  const habitats = [...new Set(Object.values(plants).map((plant) => plant.habitat))];
  const themes = [...new Set(Object.values(plants).map((plant) => plant.theme))];
  const medicinalUses = [...new Set(Object.values(plants).flatMap((plant) => plant.mostlyUsedIn))];

  // Filter plants based on the search term and selected filters
  const filteredPlants = Object.entries(plants).filter(([key, plant]) => {
    const matchesSearchTerm = plant.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesHabitat = selectedHabitat ? plant.habitat === selectedHabitat : true;
    const matchesTheme = selectedTheme ? plant.theme === selectedTheme : true;
    const matchesMedicinalUse = selectedUse ? plant.mostlyUsedIn.includes(selectedUse) : true;

    return matchesSearchTerm && matchesHabitat && matchesTheme && matchesMedicinalUse;
  });

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center">
      {/* Search and Filters */}
      <div className="w-full max-w-3xl mt-10 mb-6 flex flex-col items-center">
        {/* Search bar */}
        <div className="relative w-full mb-6">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search plants..."
            className="w-full pl-12 pr-4 py-3 text-gray-800 placeholder-gray-500 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          {/* Your Custom Search Icon */}
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

        {/* Filters */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {/* Habitat Filter */}
          <div>
            <select
              value={selectedHabitat}
              onChange={(e) => setSelectedHabitat(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-500"
            >
              <option value="">All Habitats</option>
              {habitats.map((habitat, index) => (
                <option key={index} value={habitat}>
                  {habitat}
                </option>
              ))}
            </select>
          </div>

          {/* Theme Filter */}
          <div>
            <select
              value={selectedTheme}
              onChange={(e) => setSelectedTheme(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-500"
            >
              <option value="">All Themes</option>
              {themes.map((theme, index) => (
                <option key={index} value={theme}>
                  {theme}
                </option>
              ))}
            </select>
          </div>

          {/* Medicinal Use Filter */}
          <div>
            <select
              value={selectedUse}
              onChange={(e) => setSelectedUse(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-500"
            >
              <option value="">All Uses</option>
              {medicinalUses.map((use, index) => (
                <option key={index} value={use}>
                  {use}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Plant Cards */}
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-6 py-6">
        {filteredPlants.length > 0 ? (
          filteredPlants.map(([key, plant]) => (
            <PlantCard key={key} plant={plant} urlKey={key} />
          ))
        ) : (
          <p className="text-gray-600 text-xl col-span-full text-center">No plants found</p>
        )}
      </div>
    </div>
  );
}

export default Explore;
