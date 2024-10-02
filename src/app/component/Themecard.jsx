import React from "react";
import Image from "next/image"; // Import Image component from next/image

const Themecard = ({ image, title, description, backgroundColor }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4" style={{ backgroundColor }}>
      {/* Use the Image component instead of img */}
      <div className="relative w-full h-80"> {/* Container for the image */}
        <Image
          src={image}
          alt={title}
          layout="fill" // Use fill to cover the entire container
          objectFit="cover" // Keep the aspect ratio and cover the area
          className="rounded-t-lg" // Add rounded corners to the top
        />
      </div>
      <h3 className="text-xl font-semibold mt-2">{title}</h3>
      <p className="text-gray-700 mt-1" style={{ fontFamily: "'Poppins', sans-serif" }}>
        {description}
      </p>
    </div>
  );
};

export default Themecard;
