import React from 'react'
import Image from 'next/image'


function Themecard({ image, title, description, backgroundColor }) {
    return (
      <div className=' w-full h-[32rem] space-y-3 p-5'>
        <div className='flex justify-center h-60'>
          <Image src={image}
            alt={title}
            width={400} 
            height={400} />
        </div>
        <h2 className='font-bold text-2xl p-4 rounded-3xl' style={{backgroundColor}}>{title}</h2>
        <p className='font-Satisfy text-xl p-4 rounded-3xl' style={{backgroundColor}}>{description}</p>
      </div>
    );
  }
export default Themecard