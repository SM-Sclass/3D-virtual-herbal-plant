import React from 'react'
import Image from 'next/image'

function Plantcard({ image, title, details }) {
  return (
    <div className='bg-green-950 p-10 pt-24 rounded-md relative w-full'>
      <Image
        src={image}
        alt={title}
        width={224} // width for w-56 (56 * 4)
        height={224}
        className='w-56 absolute -top-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 duration-500'
      />
      <h3 className='text-white text-xl font-bold mt-10'>{title}</h3>
      <p className='text-gray-300 mt-2'>{details}</p>
    </div>
  )
}

export default Plantcard
