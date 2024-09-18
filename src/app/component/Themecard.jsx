import React from 'react'
import Image from 'next/image'


function Themecard({ image, title, description, backgroundColor }) {
    return (
      <div className='-10 pt-24 rounded-md w-full' style={{ backgroundColor }}>
        <Image src={image}
        alt={title}
        width={224} 
        height={224} />
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    );
  }
export default Themecard