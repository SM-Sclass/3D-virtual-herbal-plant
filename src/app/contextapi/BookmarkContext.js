"use client"
import React, { createContext, useState } from 'react';

export const BookmarkContext = createContext();

export const BookmarkProvider = ({ children }) => {
  const [bookmarks, setBookmarks] = useState([]);

  const addBookmark = (plant) => {
    if (!bookmarks.includes(plant)) {
      setBookmarks([...bookmarks, plant]); // Add plant if not already bookmarked
    }
  };
  const removeBookmark = (plant) => {
    setBookmarks((prev) => prev.filter((item) => item !== plant)); // Remove plant
  };

  return (
    <BookmarkContext.Provider value={{ bookmarks, addBookmark,removeBookmark }}>
      {children}
    </BookmarkContext.Provider>
  );
};
