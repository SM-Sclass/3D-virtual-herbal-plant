import React, { useState, useEffect, useRef } from 'react';

const ImageCarousel = ({ folderPath }) => {
  const [images, setImages] = useState([]);
  const carouselRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fetch images from the folder
  useEffect(() => {
    const fetchImages = async () => {
      const imagePaths = [];
      for (let i = 1; i <= 4; i++) { // Adjust this based on expected number of images
        const imgPath = `${folderPath}/${i}.png`;
        imagePaths.push(imgPath);
      }
      setImages(imagePaths);
    };

    fetchImages();
  }, [folderPath]);

  const scrollLeft = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      carouselRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
      carouselRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative w-full overflow-hidden">
      {/* Left Arrow */}
      {currentIndex > 0 && (
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-500 text-white p-2 z-10"
          onClick={scrollLeft}
        >
          &lt;
        </button>
      )}

      {/* Carousel */}
      <div
        className="flex space-x-4 overflow-x-scroll"
        ref={carouselRef}
        style={{
          scrollbarWidth: 'none',  // For Firefox
          msOverflowStyle: 'none', // For Internet Explorer and Edge
        }}
      >
        {images.length >= 3 ? (
          images.map((image, index) => (
            <div
              key={index}
              className="relative min-w-[200px] h-[200px] flex-shrink-0 bg-gray-200 rounded-lg overflow-hidden"
            >
              <Image
                src={image}
                alt={`Image ${index}`}
                layout="fill" // Use layout fill to make the image cover the container
                objectFit="cover" // Keep the image aspect ratio
                className="absolute inset-0" // Position the image within the parent div
              />
            </div>
          ))
        ) : (
          <p className="text-gray-500">Not enough images in the folder</p>
        )}
      </div>

      {/* Right Arrow */}
      {currentIndex < images.length - 1 && (
        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-500 text-white p-2 z-10"
          onClick={scrollRight}
        >
          &gt;
        </button>
      )}

      {/* Inline CSS to hide the scrollbar */}
      <style jsx>{`
        /* Hide scrollbar for Chrome, Safari, and Opera */
        div::-webkit-scrollbar {
          display: none;
        }
        /* Hide scrollbar for Internet Explorer and Edge */
        div {
          -ms-overflow-style: none;
        }
        /* Hide scrollbar for Firefox */
        div {
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default ImageCarousel;
