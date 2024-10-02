import React from "react";

const Themecard = ({ image, title, description, backgroundColor }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4" style={{ backgroundColor }}>
      <img src={image} alt={title} className="w-full h-80 object-cover rounded-t-lg" />
      <h3 className="text-xl font-semibold mt-2">{title}</h3>
      <p className="text-gray-700 mt-1" style={{ fontFamily: "'Poppins', sans-serif" }}>
        {description}
      </p>
    </div>
  );
};

export default Themecard;
