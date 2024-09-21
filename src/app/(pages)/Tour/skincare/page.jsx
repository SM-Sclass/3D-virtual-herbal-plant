import React from 'react'
import skincare from '../../../utils/skincare'
import PlantCard from '../../../component/Plantcard'

function page() {
  console.log(skincare)
  return (
    <div className="bg-white h-full rounded-md flex flex-col items-center">
      <h1 className="text-3xl md:text-4xl font-bold mt-6 mb-4 text-green-900">Skincare</h1>
      <div className="container my-6 py-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {Object.entries(skincare).map(([key, plant]) => (
          <PlantCard key={key} plant={plant.title} /> // Pass the plant object directly
        ))}
      </div>
    </div>
  );
}


export default page