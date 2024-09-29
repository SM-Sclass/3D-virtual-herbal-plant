"use client";
import React from 'react';
import immunityBoosterPlants from '../../../utils/immunitybooster';
import PlantCard from '../../../component/Plantcard';

function page() {
  return (
    <div className="bg-white h-full rounded-md flex flex-col items-center">
      <h1 className="text-3xl md:text-4xl font-bold mt-6 mb-4 text-green-900">Immunity Booster Plants</h1>
      <div className="container my-6 py-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {Object.entries(immunityBoosterPlants).map(([key, plant]) => {
          const urlKey = plant.title.toLowerCase().replace(/\s+/g, ''); // URL-friendly format
          return (
            <PlantCard key={key} plant={plant} urlKey={urlKey} />
          );
        })}
      </div>
    </div>
  );
}

export default page;
