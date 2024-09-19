import React from 'react'
import Image from 'next/image'


function Themecard({ image, title, description, backgroundColor }) {
    return (
      <div className=' w-full h-[32rem] space-y-3 p-5' style={{ backgroundColor }}>
        <div className='flex justify-center h-60'>
          <Image src={image}
            alt={title}
            width={400} 
            height={400} />
        </div>
        <h2 className='font-bold text-2xl'>{title}</h2>
        <p className='font-Satisfy text-xl'>{description}</p>
      </div>
    );
  }
export default Themecard