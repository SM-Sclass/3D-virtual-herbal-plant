"use client";
import React from "react";
import Link from "next/link";
import { blogs } from "../../utils/blogs"; // Import the blogs from utils

function Blogs() {
  return (
    <div className="container mx-auto my-6 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Blogs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.entries(blogs).map(([key, blog]) => (
          <div key={key} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            {/* Title */}
            <h2 className="text-xl font-semibold text-blue-600 mb-2">{blog.title}</h2>

            {/* Partial content */}
            <p className="text-gray-700 mb-4">
              {blog.content.props.children[2].props.children.substring(0, 150)}...
            </p>

            {/* "Learn More" link without <a> */}
            <Link href={`/Blogs/${key}`} className="text-blue-500 hover:underline font-bold">
              Learn More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blogs;
