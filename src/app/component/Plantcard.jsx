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

  const imagePath = `/assets/img/explore/${lowertitle}.png`;

  return (
    <div className='relative'>
      <Link href={`/plants/${lowertitle}`} className='cursor-pointer'>
        {/* Apply hover effect on the entire card */}
        <div className="bg-green-500 hover:bg-green-700 hover:shadow-2xl hover:-translate-y-1 duration-200 rounded-2xl relative w-full flex flex-col items-center justify-center">
          {/* Image container */}
          <div className="relative w-full h-64">
            <Image 
              src={imagePath} 
              alt={title} 
              layout="fill" // Use layout fill to cover the parent div
              objectFit="cover" // Adjust the image to cover the container
              className="rounded-t-2xl" // Rounded top corners of the image
            />
          </div>
          {/* Title below the image */}
          <div className="bg-green-500 w-full py-4 rounded-b-2xl flex items-center justify-center">
            <h3 className="text-white text-xl font-bold">{title}</h3>
          </div>
        </div>
      </Link>
      <span className='absolute top-2 right-2 bg-yellow-500 text-white p-2 rounded hover:bg-yellow-600 transition duration-200' onClick={handleBookmark}>
        {bookmarked ? <i className="ri-bookmark-fill"></i> : <i className="ri-bookmark-line"></i>}
      </span>
    </div>
  );
}

export default PlantCard;
