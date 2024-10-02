// components/Footer.js
import React from 'react';
import Link from 'next/link';

function Footer() {
  return (
    <footer className="w-full bg-green-800 text-yellow-400 py-6">
      <div className="container mx-auto flex flex-col items-center justify-center space-y-4">
        <div className="text-center text-sm">
          &copy; Copyright <strong>Ministry of Ayush</strong>. All Rights Reserved
        </div>
        <div className="text-center text-sm">
          Created by <strong>Dora D. Developers</strong>
        </div>
        <div className="flex space-x-4">
          <Link href="https://twitter.com/moayush" aria-label="Twitter" className="hover:opacity-75">
            <i className="ri-twitter-line text-2xl text-yellow-400"></i>
          </Link>
          <Link href="https://www.facebook.com/moayush" aria-label="Facebook" className="hover:opacity-75">
            <i className="ri-facebook-line text-2xl text-yellow-400"></i>
          </Link>
          <Link href="https://www.instagram.com/ministryofayush/" aria-label="Instagram" className="hover:opacity-75">
            <i className="ri-instagram-line text-2xl text-yellow-400"></i>
          </Link>
          <Link href="https://www.youtube.com/@MinistryofAYUSHofficial/" aria-label="YouTube" className="hover:opacity-75">
            <i className="ri-youtube-line text-2xl text-yellow-400"></i>
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
