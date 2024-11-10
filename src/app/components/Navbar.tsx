"use client";

// src/app/components/Navbar.tsx

import Link from "next/link";
import { useState } from "react";
import { FaBars } from "react-icons/fa";

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <nav className="relative z-50 mb-20 flex items-center justify-between py-6 px-4 bg-transparent">
      {/* Logo */}
      <div className="flex items-center text-2xl">
        RH
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex justify-center items-center gap-8 text-xl">
        <Link href="/" className="hover:text-cyan-300">
          HOME
        </Link>
        <Link href="/about" className="hover:text-cyan-300">
          ABOUT
        </Link>
        <Link href="/contact" className="hover:text-cyan-300">
          CONTACT
        </Link>
      </div>

      {/* Mobile Menu Icon */}
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="text-white text-2xl focus:outline-none"
        >
          <FaBars />
        </button>
      </div>

      {/* Mobile Menu and Overlay */}
      {/* Keep the menu and overlay in the DOM, but control visibility with classes */}
      <div
        className={`fixed inset-0 bg-black transition-opacity duration-500 ease-in-out z-40 ${
          open ? "opacity-50" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleMenu}
      ></div>

      <div
        className={`fixed top-0 right-0 w-3/4 h-full bg-gray-800 z-50 p-6 flex flex-col text-white transition-transform duration-500 ease-in-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          onClick={toggleMenu}
          className="text-white text-2xl mb-4 self-end focus:outline-none"
        >
          &times; {/* Close icon */}
        </button>
        <Link href="/" className="py-4 hover:text-cyan-300" onClick={toggleMenu}>
          HOME
        </Link>
        <Link href="/contact" className="py-4 hover:text-cyan-300" onClick={toggleMenu}>
          CONTACT
        </Link>
        <Link href="/about" className="py-4 hover:text-cyan-300" onClick={toggleMenu}>
          ABOUT
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
