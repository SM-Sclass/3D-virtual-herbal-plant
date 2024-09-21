import React from 'react'
import medicinal from '../../../utils/medicinal'
import Plantcard from '../../../component/Plantcard'

function page() {
  console.log(medicinal)
  return (
    <div className="bg-white h-full rounded-md flex flex-col items-center">
      <div className="container my-6 py-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {Object.entries(medicinal).map((plant) => (
          <Plantcard key={plant.title} plant={plant} />
        ))}
      </div>
    </div>
  )
}

export default page