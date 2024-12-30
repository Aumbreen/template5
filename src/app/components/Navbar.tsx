"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// Define paths to images (ensure these files exist in your public folder)
// const userIcon = "/Vector (14).png";
// const searchIcon = "/Vector (20).png";
//  const cartIcon = "//icn settings icn-xs (2).png";
// const mail = "/mail.png";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the mobile menu state
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav className="w-full bg-white shadow-md">
      {/* Desktop Navbar */}
      <div className="hidden lg:flex justify-between items-center px-6 lg:px-16 h-16">
        {/* Logo */}
        <h3 className="font-Montserrat font-semibold text-xl">Bandage</h3>

        {/* Menu Links */}
        <ul className="flex space-x-6 font-Montserrat text-sm text-gray-600">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/Shop">Shop</Link></li>
          
          <li><Link href="/About">About</Link></li>
           <li><Link href="/Blog">Blog</Link></li> 
          <li><Link href="/Contact">Contact</Link></li>
          <li><Link href="/Pages">Pages</Link></li>
        </ul>

        {/* Icons Section */}
        <div className="flex space-x-4 items-center">
          <Image src="/Vector (14).png" alt="User" width={20} height={20} />
          <Image src="/Vector (20).png" alt="Search" width={20} height={20} />
           <Image src="/Vector (37).png" alt="Cart" width={20} height={20} /> 
          <Image src="/Vector (19).png" alt="heart" width={20} height={20} />
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="lg:hidden flex justify-between items-center px-4 py-3">
        {/* Logo */}
        <h3 className="font-Montserrat font-semibold text-xl">Bandage</h3>

        {/* Hamburger Menu Button */}
        <button
          onClick={toggleMenu}
          aria-label="Toggle Menu"
          className="text-gray-700"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="bg-gray-100 text-black flex flex-col items-center py-4 space-y-3">
          <ul className="space-y-2 font-Montserrat text-base">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/Shop">Shop</Link></li>
            
            <li><Link href="/About">About</Link></li>           
              <li><Link href="/Blog">Blog</Link></li> 
            <li><Link href="/Contact">Contact</Link></li>
            <li><Link href="/Pages">Pages</Link></li>
          </ul>
          <button
            onClick={toggleMenu}
            className="text-sm text-gray-600 font-Montserrat"
          >
            - Close Menu -
          </button>
        </div>
      )}
    </nav>
  );
}
