"use client"
import { useParams } from 'next/navigation';
import Feact, { useEffect, useState, Suspense, useMemo } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { Dialog } from '@headlessui/react';
import { plants } from '../../../utils/plantdata';

const PlantDetails = () => {
  const { allplants } = useParams(); // Get the dynamic segment (plant name)
  const [plantData, setPlantData] = useState(null); // State for plant data
  const [isFullView, setIsFullView] = useState(false); // State for full view

  const modelUrls = {
    giloy: '/assets/models/chamomile.glb',
    turmeric: '/assets/models/turmeric.glb',
    amla: '/assets/models/amla.glb',
    moringa: '/assets/models/moringa.glb',
  };

  useEffect(() => {
    if (allplants) {
      const plant = plants[allplants.toLowerCase()];
      if (plant) {
        setPlantData(plant);
      } else {
        setPlantData(null); // Reset if plant not found
      }
    }
  }, [allplants]);

  if (!plantData) return <div>Loading...</div>; // Loading or invalid plant message

  return (
    <div className="flex flex-col md:flex-row h-screen bg-[rgb(21,128,61)]">
      {/* Left section: Model */}
      <div className="md:w-1/3 p-5 relative flex flex-col items-center justify-center border-r-4 border-yellow-500">
        <Canvas
          className="h-[300px] md:h-[500px] bg-white rounded-lg shadow-lg"
          camera={{ position: [0, 0, 8], fov: 60 }} // Adjusted camera position
        >
          <ambientLight />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <Suspense fallback={null}>
            <MemoizedModel url={plantData.modelUrl} scale={4} /> {/* Use memoized model */}
          </Suspense>
          <OrbitControls enableZoom={true} />
        </Canvas>
        {/* Full View Button */}
        <button
          onClick={() => setIsFullView(true)}
          className="mt-4 bg-yellow-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-yellow-600 transition"
        >
          Full View
        </button>
      </div>

      {/* Right section: Scrollable plant info */}
      <div className="md:w-2/3 p-8 overflow-y-auto text-white">
        <h1 className="text-4xl font-bold text-yellow-500">
          {plantData.title} {/* Use title from plantData */}
        </h1>
        <p className="mt-6 text-lg leading-relaxed">
          {plantData.description} {/* Use description from plantData */}
        </p>
        {/* Add more detailed info here */}
      </div>

      {/* Full View Modal */}
      {isFullView && (
        <Dialog
          open={isFullView}
          onClose={() => setIsFullView(false)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
        >
          <div className="relative bg-white w-[calc(100%-700px)] h-[calc(100%-200px)] p-5 rounded-lg shadow-xl">
            {/* Close Button */}
            <button
              onClick={() => setIsFullView(false)}
              className="absolute top-2 right-2 text-gray-700 hover:text-gray-900"
            >
              Close
            </button>
            {/* Full View Model */}
            <Canvas className="h-full w-full bg-white rounded-lg shadow-lg" camera={{ position: [0, 0, 10], fov: 60 }}>
              <ambientLight />
              <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
              <Suspense fallback={null}>
                <MemoizedModel url={plantData.modelUrl} scale={5} /> {/* Use memoized model */}
              </Suspense>
              <OrbitControls enableZoom={true} />
            </Canvas>
          </div>
        </Dialog>
      )}
    </div>
  );
};

// Memoized Model component to load GLTF models and control the scale
const MemoizedModel = ({ url, scale = 1 }) => {
  const scene = useMemo(() => {
    const { scene } = useGLTF(url);
    return scene;
  }, [url]);}
export default PlantDetails;
