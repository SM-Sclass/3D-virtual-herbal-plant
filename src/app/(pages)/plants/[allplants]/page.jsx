"use client";
import { useParams } from 'next/navigation';
import React, { useEffect, useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { Dialog } from '@headlessui/react';
import { plants } from '../../../utils/plantdata';

const PlantDetails = () => {
  const { allplants } = useParams();
  const [plantData, setPlantData] = useState(null);
  const [isFullView, setIsFullView] = useState(false);
  const [modelVisible, setModelVisible] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (allplants) {
      const plant = plants[allplants.toLowerCase()];
      if (plant) {
        setPlantData(plant);
        setModelVisible(true);
      } else {
        setPlantData(null);
      }
      setLoading(false);
    }
  }, [allplants]);

  const handleCloseFullView = () => {
    setIsFullView(false);
    setModelVisible(true);
  };

  if (loading) return <LoadingAnimation />;

  return (
    <div className="flex flex-col md:flex-row h-screen bg-[rgb(100, 200, 100)]"> {/* Updated to lighter green */}
      {/* Left section: Model */}
      <div className="md:w-1/3 p-5 relative flex flex-col items-center justify-center border-r-4 border-yellow-500">
        {modelVisible && (
          <Canvas
            className="h-[300px] md:h-[500px] bg-white rounded-lg shadow-lg"
            camera={{ position: [0, 0, 8], fov: 60 }}
          >
            <ambientLight />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            <Suspense fallback={null}>
              <Model url={plantData.modelUrl} scale={4} />
            </Suspense>
            <OrbitControls enableZoom={true} />
          </Canvas>
        )}
        <button
          onClick={() => {
            setIsFullView(true);
            setModelVisible(false);
          }}
          className="mt-4 bg-yellow-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-yellow-600 transition"
        >
          Full View
        </button>
      </div>

      {/* Right section: Scrollable plant info */}
      <div className="md:w-2/3 p-8 overflow-y-auto scrollable">
        <h1 className="text-4xl font-bold text-yellow-500">{plantData.title}</h1>
        <p className="mt-6 text-lg leading-relaxed">{plantData.description}</p>

        {/* Add separation using margins */}
        <div className="mt-8 border-t border-yellow-500 pt-4">
          <h2 className="text-2xl font-bold">Botanical Name</h2>
          <p>{plantData.botanicalName}</p>
        </div>

        <div className="mt-4 border-t border-yellow-500 pt-4">
          <h2 className="text-2xl font-bold">Common Names</h2>
          <p>{plantData.commonNames.join(', ')}</p>
        </div>

        <div className="mt-4 border-t border-yellow-500 pt-4">
          <h2 className="text-2xl font-bold">Habitat</h2>
          <p>{plantData.habitat}</p>
        </div>

        <div className="mt-4 border-t border-yellow-500 pt-4">
          <h2 className="text-2xl font-bold">Theme</h2>
          <p>{plantData.theme}</p>
        </div>

        <div className="mt-4 border-t border-yellow-500 pt-4">
          <h2 className="text-2xl font-bold">Mostly Used In</h2>
          <p>{plantData.mostlyUsedIn.join(', ')}</p>
        </div>

        <div className="mt-4 border-t border-yellow-500 pt-4">
          <h2 className="text-2xl font-bold">Medicinal Uses</h2>
          <p>{plantData.medicinalUses}</p>
        </div>

        <div className="mt-4 border-t border-yellow-500 pt-4">
          <h2 className="text-2xl font-bold">Methods of Cultivation</h2>
          <p>{plantData.methodsOfCultivation}</p>
        </div>
      </div>

    {/* Full View Modal */}
{isFullView && (
  <Dialog
    open={isFullView}
    onClose={handleCloseFullView}
    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
  >
    <div className="relative bg-white w-[calc(100%-400px)] h-[calc(100%-100px)] p-5 rounded-lg shadow-xl">
      <button
        onClick={handleCloseFullView}
        className="absolute top-2 right-2 w-8 h-8 flex items-center justify-center bg-red-500 text-white rounded-full hover:bg-red-600 z-10"
        aria-label="Close"
      >
        &times; {/* "X" symbol */}
      </button>
      <Canvas className="h-full w-full bg-white rounded-lg shadow-lg" camera={{ position: [0, 0, 10], fov: 60 }}>
        <ambientLight />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <Suspense fallback={null}>
          <Model url={plantData.modelUrl} scale={3} /> {/* Adjust scale if needed */}
        </Suspense>
        <OrbitControls enableZoom={true} />
      </Canvas>
    </div>
  </Dialog>
)}

    </div>
  );
};

// Loading Animation Component
const LoadingAnimation = () => (
  <div className="flex items-center justify-center h-screen bg-[rgb(100, 200, 100)]"> {/* Updated to lighter green */}
    <div className="loader"></div>
  </div>
);

// Model component to load GLTF models and control the scale
const Model = ({ url, scale = 1 }) => {
  const { scene } = useGLTF(url);
  return <primitive object={scene} scale={[scale, scale, scale]} />;
};

export default PlantDetails;
