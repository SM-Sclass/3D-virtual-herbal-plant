import React from 'react'
import medicinal from '../../../utils/medicinal'
import PlantCard from '../../../component/Plantcard'

function page() {
  console.log(medicinal[1])
  return (
    <div className="bg-white h-full rounded-md flex flex-col items-center">
      <h1 className="text-3xl md:text-4xl font-bold mt-6 mb-4 text-green-900">Medicinal Plant</h1>
      <div className="container my-6 py-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {Object.entries(medicinal).map((plant) => (
          <PlantCard key={plant[1].title} plant={plant[1].title} />
        ))}
      </div>
    </div>
  )
}

export default page