"use client";
import React, { useContext } from 'react';
import { BookmarkContext } from '../../contextapi/BookmarkContext'; // Adjust the path as necessary
import { plants } from '../../utils/plantdata';
import Plantcard from "../../component/Plantcard";

function Bookmark() {
  const { bookmarks } = useContext(BookmarkContext); // Access bookmarks from context
    
  return (
    <div className="bg-white h-full rounded-md flex flex-col items-center">
      <div className="container my-6 py-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            <Plantcard key="chamomile"  plant="chamomile" /> 
            
      </div>
    </div>
  );
}

export default Bookmark;
