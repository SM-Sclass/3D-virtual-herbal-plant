"use client";
import React, { useContext, useState, useEffect } from 'react';
import Link from 'next/link';
import { BookmarkContext } from '../contextapi/BookmarkContext'; // Import your bookmark context
import Image from 'next/image'; // Import Image from next/image

function PlantCard({ plant }) {
  const title = plant;
  const lowertitle = title.toLowerCase();
  const { bookmarks, addBookmark, removeBookmark } = useContext(BookmarkContext); // Access context
  const [bookmarked, setBookmark] = useState(false);

  useEffect(() => {
    // Check if the plant is already bookmarked on component mount
    setBookmark(bookmarks.includes(lowertitle));
  }, [bookmarks, lowertitle]);

  const handleBookmark = () => {
    if (bookmarked) {
      removeBookmark(lowertitle);
    } else {
      addBookmark(lowertitle);
      console.log(bookmarks);
    }
    setBookmark(!bookmarked);
  };

  const imagePath = `/img/explore/${lowertitle}.png`; // Construct the image path

  return (
    <div className='relative'>
      <Link href={`/plants/${lowertitle}`} className='hover:shadow-2xl hover:-translate-y-1 duration-200 cursor-pointer'>
        <div className="bg-green-700 hover:bg-green-900 p-20 h-80 rounded-2xl relative w-full flex items-start justify-center">
          <Image 
            src={imagePath} 
            alt={title} 
            layout="fill" // Use layout fill to cover the parent div
            objectFit="cover" // Adjust the image to cover the container
            className="rounded-2xl" // Optional: round the corners of the image
          />
          <h3 className="text-white text-xl font-bold z-10">{title}</h3> {/* Add z-index to show title above image */}
        </div>
      </Link>
      <span className='absolute top-2 right-2 bg-yellow-500 text-white p-2 rounded hover:bg-yellow-600 transition duration-200' onClick={handleBookmark}>
        {bookmarked ? <i className="ri-bookmark-fill"></i> : <i className="ri-bookmark-line"></i>}
      </span>
    </div>
  );
}

export default PlantCard;
