"use client";
import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const ThreeDScene = ({ plants, onExitFullScreen }) => {
  const mountRef = useRef(null);
  const [currentPlantIndex, setCurrentPlantIndex] = useState(0);
  const loader = new GLTFLoader();
  let groundModel = null;
  let plantModel = null;

  const currentPlant = plants[currentPlantIndex]; // Get the current plant's details

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x87CEEB, 1);
    mountRef.current.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(1, 3, 2);
    scene.add(directionalLight);

    camera.position.set(0, 3.5, 5);

    // Load ground model
    loader.load('/assets/models/grass.glb', (gltf) => {
      groundModel = gltf.scene;
      groundModel.scale.set(10, 1, 10);
      scene.add(groundModel);

      // Load the first plant model
      loadPlantModel(currentPlantIndex);
    }, undefined, (error) => {
      console.error('An error happened loading the ground model:', error);
    });

    const loadPlantModel = (index) => {
      const plant = plants[index];
      if (plantModel) {
        scene.remove(plantModel); // Remove the previous plant model if it exists
      }

      loader.load(plant.modelUrl, (gltf) => {
        plantModel = gltf.scene;

        // Calculate the bounding box of the plant model
        const box = new THREE.Box3().setFromObject(plantModel);
        const height = box.max.y - box.min.y;

        const targetHeight = 4;

        // Calculate scale factor
        const scaleFactor = targetHeight / height;
        plantModel.scale.set(scaleFactor, scaleFactor, scaleFactor);

        plantModel.position.set(0, ((scaleFactor * height) / 2) - 2.2, 0);
        scene.add(plantModel);
      }, undefined, (error) => {
        console.error('An error happened loading the plant model:', error);
      });
    };

    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };

    animate();

    window.addEventListener('resize', () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    });

    return () => {
      if (mountRef.current && renderer.domElement) {
        try {
          mountRef.current.removeChild(renderer.domElement);
        } catch (err) {
          console.warn("Error removing renderer element:", err);
        }
      }
      renderer.dispose();
    };
  }, [currentPlantIndex, plants]);

  const handleNextPlant = () => {
    // Stop ongoing speech when changing plants
    speechSynthesis.cancel();

    // Move to the next plant
    setCurrentPlantIndex((prevIndex) => (prevIndex + 1) % plants.length);
  };

  // Function to read out the plant information
  const readOutPlantInfo = (plant) => {
    // Stop any ongoing speech before starting the new one
    speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(
      `Here is the information for the plant ${plant.title}. 
       The botanical name is ${plant.botanicalName}. 
       Common names include ${plant.commonNames.join(", ")}. 
       It is found in the ${plant.habitat} habitat. 
       It is mostly used in ${plant.mostlyUsedIn.join(", ")}. 
       Its medicinal uses are as follows: ${plant.medicinalUses}. 
       Methods of cultivation include ${plant.methodsOfCultivation}.`
    );
    // Optional: Set properties like voice, pitch, and rate
    utterance.pitch = 1;
    utterance.rate = 1;
    speechSynthesis.speak(utterance);
  };

  const enterFullScreen = () => {
    if (mountRef.current.requestFullscreen) {
      mountRef.current.requestFullscreen();
    } else if (mountRef.current.mozRequestFullScreen) {
      mountRef.current.mozRequestFullScreen();
    } else if (mountRef.current.webkitRequestFullscreen) {
      mountRef.current.webkitRequestFullscreen();
    } else if (mountRef.current.msRequestFullscreen) {
      mountRef.current.msRequestFullscreen();
    }

    document.body.style.overflow = 'hidden';
  };

  const exitFullScreen = () => {
    // Stop ongoing speech when exiting full screen
    speechSynthesis.cancel();
  
    if (document.fullscreenElement) {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(err => {
          console.error("Failed to exit full screen:", err);
        });
      }
    }
    document.body.style.overflow = 'auto';
    if (onExitFullScreen) onExitFullScreen();
  };
  

  return (
    <div ref={mountRef} style={{ width: '100%', height: '100vh', position: 'relative' }}>
      {/* 3D Scene container */}
      <div style={{ position: 'absolute', top: '10%', left: '5%', backgroundColor: 'rgba(255, 255, 255, 0.8)', padding: '20px', borderRadius: '8px', maxWidth: '400px', color:"black" }}>
        <h2>{currentPlant.title}</h2>
        <p><strong>Botanical Name:</strong> {currentPlant.botanicalName}</p>
        <p><strong>Common Names:</strong> {currentPlant.commonNames.join(", ")}</p>
        <p><strong>Habitat:</strong> {currentPlant.habitat}</p>
        <p><strong>Theme:</strong> {currentPlant.theme}</p>
        <p><strong>Mostly Used In:</strong> {currentPlant.mostlyUsedIn.join(", ")}</p>
        <p><strong>Medicinal Uses:</strong> {currentPlant.medicinalUses}</p>
        <p><strong>Methods of Cultivation:</strong> {currentPlant.methodsOfCultivation}</p>
      </div>

      {/* Control buttons */}
      <button
        onClick={handleNextPlant}
        className="absolute bottom-4 right-4 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
      >
        Next Plant
      </button>

      {/* Button to trigger speech synthesis */}
      <button
        onClick={() => readOutPlantInfo(currentPlant)}
        className="absolute top-16 right-4 bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition duration-200"
      >
        Read Out
      </button>

      <button
        onClick={enterFullScreen}
        className="absolute top-4 right-4 bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition duration-200"
      >
        Fullscreen
      </button>
      <button
        onClick={exitFullScreen}
        className="absolute top-4 left-4 bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition duration-200"
      >
        Exit Fullscreen
      </button>
    </div>
  );
};

export default ThreeDScene;
