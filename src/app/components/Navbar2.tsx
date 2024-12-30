"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";


// Define paths to images (ensure these files exist in your public folder
<Image src="/Vector (37).png" width={10} height={10} alt="text" />
export default function Navbar2() {
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
        <ul className="flex space-x-6 font-Montserrat text-sm text-gray-600 font-semibold">
          <li><Link href="/">Home</Link></li>
     <li><Link href="/Product">Product</Link></li>
          <li><Link href="/Pricing">Pricing</Link></li>
          <li><Link href="/Contact">Contact</Link></li>
          
        </ul>

        {/* Icons Section */}
        {/* Icons Section */}
<div className="flex items-center space-x-4">
  {/* Login Section */}
  <h4 className="bg-white text-blue-400 text-center font-semibold">Login</h4>

  {/* Become a Member Button */}
  <button className="w-[214px] h-[52px] bg-blue-400 rounded-lg flex items-center justify-between px-4 py-2 text-white font-semibold">
    Become a Member
    <Image
      src="/Vector (39).png"
      width={10}
      height={16}
      alt="arrow"
      className="ml-2"
    />
  </button>


            
          
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
            <li><Link href="/Product">Product</Link></li>
            
            <li><Link href="/Pricing">Pricing</Link></li>           
            <li><Link href="/Contact">Contact</Link></li>
            
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
