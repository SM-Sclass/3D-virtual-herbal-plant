import React from 'react'
import haircare from '../../../utils/haircare'
import PlantCard from '../../../component/Plantcard'

function page() {
  return (
    <div className="bg-white h-full rounded-md flex flex-col items-center">
      <div className="container my-6 py-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {Object.entries(haircare).map((plant) => (
          <PlantCard key={plant.title} plant={plant[1].title} />
        ))}
      </div>
    </div>
  )
}

export default page