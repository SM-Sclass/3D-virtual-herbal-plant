// tour/medicinal/page.jsx
"use client";
import React, { useState } from 'react';
import ThreeDScene from '../../../component/ThreeDScene';
import FullscreenInfoCard from '../../../component/FullscreenInfoCard';
import { plants } from '../../../utils/plantdata';

function SkincarePage() {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const handleFullScreen = () => {
    setIsFullScreen(true);
  };

  const handleExitFullScreen = () => {
    setIsFullScreen(false);
  };

  // Filter plants belonging to the "Medicinal" theme
  const skincarePlants = Object.values(plants).filter(plant => plant.theme === "Skincare");

  return (
    <div className="bg-white h-full rounded-md flex flex-col items-center">
      <h1 className="text-3xl md:text-4xl font-bold mt-6 mb-4 text-green-900">Skincare Plants</h1>
      {!isFullScreen ? (
        <div className="w-full h-[80vh] flex items-center justify-center">
          <FullscreenInfoCard onFullScreen={handleFullScreen} />
        </div>
      ) : (
        <div className="relative w-full h-[80vh]">
          <ThreeDScene plants={skincarePlants} onExitFullScreen={handleExitFullScreen} />
        </div>
      )}
    </div>
  );
}

export default SkincarePage;
