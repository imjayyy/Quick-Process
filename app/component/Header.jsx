
import Image from 'next/image';
import React from 'react';
import { FaArrowRightLong } from "react-icons/fa6";
const Header = () => (
  <header className="fixed top-0 left-0 w-full z-50">
    <div className="container flex justify-between items-center w-full mx-auto h-23 px-6 rounded-b-4xl shadow-lg bg-[var(--color-white)]">
      {/* Logo */}
      <Image
        src="/logo.png"
        alt="QuickProcess Logo"
        width={110}
        height={40}
        className="object-contain"
      />
      {/* Nav */}
      <nav className="flex gap-20 items-center">
        {['Home', 'About', 'Services', 'Pricing'].map((item) => (
          <a
            key={item}
            href="#"
            className="text-[17px] font-medium text-(--color-text-secondary) hover:text-(--color-secondary) transition-colors duration-200 font-sans"
          >
            {item}
          </a>
        ))}
      </nav>
      {/* Contact Button */}
      <a
        href="#"
        className="group relative flex items-center justify-start bg-(--color-secondary) text-white px-2 py-2 rounded-full font-semibold text-[17px] shadow-md hover:shadow-lg transition-all duration-300 h-12 w-38 overflow-hidden"
      >
        <div className="flex items-center gap-4 transition-all duration-500 ease-in-out group-hover:translate-x-full group-hover:opacity-0">
          <span className="flex justify-center items-center min-w-[32px] h-8 bg-(--color-primary) rounded-full text-white text-lg">
            <FaArrowRightLong />
          </span>
          <span className="whitespace-nowrap">Contact</span>
        </div>

        <div className="absolute inset-0 flex items-center gap-3 px-2 -translate-x-full opacity-0 transition-all duration-500 ease-in-out group-hover:translate-x-0 group-hover:opacity-100">
          <span className="flex justify-center items-center min-w-[32px] h-8 bg-(--color-primary) rounded-full text-white text-lg">
            <FaArrowRightLong />
          </span>
          <span className="whitespace-nowrap">Contact</span>
        </div>
      </a>
    </div>
  </header>
);

export default Header;