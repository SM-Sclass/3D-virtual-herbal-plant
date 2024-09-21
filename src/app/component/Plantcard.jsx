"use client"
import React, { useContext } from 'react';
import Link from 'next/link';
import { BookmarkContext } from '../contextapi/BookmarkContext'; // Import your bookmark context

function PlantCard({ plant }) {
  const title = plant[0];
  const lowertitle = title.toLowerCase();
  const { bookmarks, addBookmark } = useContext(BookmarkContext); // Access context

  const handleBookmark = () => {
    addBookmark(lowertitle); // Add the plant title to bookmarks
  };

  return (
    <div className='relative'>
      <Link href={`/plants/${lowertitle}`} className='hover:shadow-2xl hover:-translate-y-1 duration-200 cursor-pointer'>
        <div className="bg-green-700 p-20 h-80 rounded-2xl relative w-full flex items-start justify-center">
          <h3 className="text-white text-xl font-bold">{title}</h3>
        </div>
      </Link>
      <button 
        onClick={handleBookmark} 
        className='absolute top-2 right-2 bg-yellow-500 text-white p-2 rounded hover:bg-yellow-600 transition duration-200'
        aria-label="Bookmark Plant"
      >
        Bookmark
      </button>
    </div>
  );
}

export default PlantCard;
