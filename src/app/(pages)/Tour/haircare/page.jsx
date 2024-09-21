import React from 'react';
import haircare from '../../../utils/haircare';
import PlantCard from '../../../component/Plantcard';

function page() {
  return (
    <div className="bg-white h-full rounded-md flex flex-col items-center">
      <h1 className="text-3xl md:text-4xl font-bold mt-6 mb-4 text-green-900">Haircare Plants</h1>
      <div className="container my-6 py-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {Object.entries(haircare).map((plant) => (
          <PlantCard key={plant[0]} plant={plant[1].title} />
        ))}
      </div>
    </div>
  );
}

export default page;
