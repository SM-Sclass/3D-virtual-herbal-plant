"use client";
import React, { useContext } from 'react';
import { BookmarkContext } from '../../contextapi/BookmarkContext'; // Adjust the path as necessary
import { plants } from '../../utils/plantdata';
import PlantCard from "../../component/Plantcard";

function Bookmark() {
  const { bookmarks } = useContext(BookmarkContext); // Access bookmarks from context

  return (
    <div className="bg-white h-full rounded-md flex flex-col items-center">
      <div className="container my-6 py-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {bookmarks.length > 0 ? ( // Check if there are any bookmarks
          bookmarks.map((urlKey) => {
            const plant = plants[urlKey]; // Access the plant data using the urlKey
            if (!plant) return null; // Ensure the plant exists before rendering
            return (
              <PlantCard 
                key={urlKey} // Use urlKey as the key for each PlantCard
                plant={plant} 
                urlKey={urlKey} 
              />
            );
          })
        ) : (
          <p className="text-center text-green-600">No bookmarks found.</p> // Message when there are no bookmarks
        )}
      </div>
    </div>
  );
}

export default Bookmark;
