"use client";
import React, { createContext, useState } from 'react';

export const BookmarkContext = createContext();

export const BookmarkProvider = ({ children }) => {
  const [bookmarks, setBookmarks] = useState([]); // Array of bookmarked plant keys
  const [notes, setNotes] = useState({}); // Object to store notes with plant keys

  const addBookmark = (plant) => {
    if (!bookmarks.includes(plant)) {
      setBookmarks([...bookmarks, plant]); // Add plant if not already bookmarked
      setNotes((prev) => ({ ...prev, [plant]: "" })); // Initialize note for the new bookmark
    }
  };

  const removeBookmark = (plant) => {
    setBookmarks((prev) => prev.filter((item) => item !== plant)); // Remove plant
    setNotes((prev) => {
      const { [plant]: removedNote, ...rest } = prev; // Remove note associated with the plant
      return rest;
    });
  };

  const updateNote = (plant, note) => {
    setNotes((prev) => ({ ...prev, [plant]: note })); // Update note for a specific plant
  };

  return (
    <BookmarkContext.Provider value={{ bookmarks, notes, addBookmark, removeBookmark, updateNote }}>
      {children}
    </BookmarkContext.Provider>
  );
};
