"use client";
import React, { useContext, useState, useEffect } from 'react';
import Link from 'next/link';
import { BookmarkContext } from '../contextapi/BookmarkContext'; 
import Image from 'next/image'; 

function PlantCard({ plant, urlKey }) {
  const { title, modelUrl } = plant;
  const { bookmarks, addBookmark, removeBookmark, notes, updateNote } = useContext(BookmarkContext); 
  const [bookmarked, setBookmark] = useState(false);
  const [note, setNote] = useState(""); // State for the note

  useEffect(() => {
    setBookmark(bookmarks.includes(urlKey));
    setNote(notes[urlKey] || ""); // Set the note from context if it exists
  }, [bookmarks, urlKey, notes]);

  const handleBookmark = () => {
    if (bookmarked) {
      removeBookmark(urlKey);
    } else {
      addBookmark(urlKey);
    }
    setBookmark(!bookmarked);
  };

  const handleNoteChange = (e) => {
    const newNote = e.target.value;
    setNote(newNote);
    updateNote(urlKey, newNote); // Update note in context
  };

  const imagePath = `/assets/img/${urlKey}/${urlKey}.png`;

  return (
    <div className="relative">
      <Link href={`/plants/${urlKey}`} className="cursor-pointer">
        <div className="bg-green-500 hover:bg-green-700 hover:shadow-2xl hover:-translate-y-1 duration-200 rounded-2xl relative w-full flex flex-col items-center justify-center">
          <div className="relative w-full h-64">
            <Image
              src={imagePath}
              alt={title}
              fill // Use fill for a responsive image
              className="rounded-t-2xl object-cover" // Apply object-cover class here
            />
          </div>
          <div className="w-full py-4 flex items-center justify-center">
            <h3 className="text-white text-xl font-bold">{title}</h3>
          </div>
        </div>
      </Link>
      <span
        className="absolute top-2 right-2 bg-yellow-500 text-white p-2 rounded hover:bg-yellow-600 transition duration-200"
        onClick={handleBookmark}
      >
        {bookmarked ? <i className="ri-bookmark-fill"></i> : <i className="ri-bookmark-line"></i>}
      </span>
      {bookmarked && ( // Show notes only for bookmarked plants
        <div className="mt-4 p-2">
          <textarea
            value={note}
            onChange={handleNoteChange}
            placeholder="Take your notes here..."
            className="w-full h-24 p-2 border text-black rounded-md"
          />
        </div>
      )}
    </div>
  );
}

export default PlantCard;
