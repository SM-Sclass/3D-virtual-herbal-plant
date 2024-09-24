import React from 'react';
import Image from 'next/image';

function LowerSection() {
  return (
    <div className="w-full bg-green-900 text-white py-16 px-4 lg:px-20">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ministry of AYUSH</h2>
          <p className="text-lg font-light">
            The Ministry of Ayush is a government ministry in India that promotes and coordinates research and development in the traditional and non-conventional systems of health care and healing known as Ayush. The ministry was established on November 9, 2014.
          </p>
        </div>
        <div className="lg:w-1/2">
          <Image 
            src="/assets/img/ayush.png" 
            alt="Ministry of AYUSH" 
            width={400} 
            height={100} 
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default LowerSection;
