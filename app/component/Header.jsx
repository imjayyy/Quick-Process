"use client";
import Image from 'next/image';
import React, { useState } from 'react';
import { FaArrowRightLong, FaBars, FaXmark } from "react-icons/fa6";
import { useContactModal } from "../context/ContactModalContext";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { openModal } = useContactModal();

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Pricing', href: '#workflow' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-0 md:px-4">
      {/* Main Navbar Container */}
      <div className="relative max-w-7xl flex justify-between items-center mx-auto h-[70px] md:h-[92px] px-6 rounded-b-none md:rounded-b-[2.5rem] shadow-lg bg-white transition-all duration-300">

        {/* 1. Logo Section */}
        <div className="flex items-center shrink-0">
          <Image
            src="/Logo_QP.png"
            alt="QuickProcess Logo"
            width={180}
            height={65}
            style={{ height: 'auto', width: 'clamp(165px, 14vw, 200px)' }}
            className="object-contain"
            priority
          />
        </div>

        {/* 2. Desktop Navigation (Hidden on Mobile) */}
        <nav className="hidden lg:flex gap-12 xl:gap-20 items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[16px] xl:text-[17px] font-medium text-[#1e1c1b] hover:text-[#00a99d] transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* 3. Action Area (Contact Button + Mobile Toggle) */}
        <div className="flex items-center gap-4">
          {/* Desktop Contact Button */}
          <button
            onClick={openModal}
            className="group relative hidden lg:flex items-center justify-start bg-[var(--color-secondary)] text-white px-2 py-2 rounded-full font-semibold text-[15px] md:text-[17px] shadow-md transition-all duration-300 h-10 md:h-12 w-32 md:w-40 overflow-hidden cursor-pointer"
          >
            <div className="flex items-center gap-3 md:gap-4 transition-all duration-500 ease-in-out group-hover:translate-x-full group-hover:opacity-0">
              <span className="flex justify-center items-center min-w-[28px] md:min-w-[32px] h-7 md:h-8 bg-[var(--color-primary)] rounded-full text-white">
                <FaArrowRightLong className="text-xs md:text-base" />
              </span>
              <span className="whitespace-nowrap">Contact</span>
            </div>
            <div className="absolute inset-0 flex items-center gap-3 px-2 -translate-x-full opacity-0 transition-all duration-500 ease-in-out group-hover:translate-x-0 group-hover:opacity-100">
              <span className="flex justify-center items-center min-w-[28px] md:min-w-[32px] h-7 md:h-8 bg-[var(--color-primary)] rounded-full text-white">
                <FaArrowRightLong className="text-xs md:text-base" />
              </span>
              <span className="whitespace-nowrap">Contact</span>
            </div>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-2xl text-[#1e1c1b] p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaXmark /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* 4. Mobile Menu Overlay */}
      <div className={`absolute top-[70px] left-0 w-full bg-white shadow-xl transition-all duration-500 lg:hidden overflow-hidden ${isOpen ? 'max-h-[400px] py-8 border-t border-gray-200' : 'max-h-0'}`}>
        <nav className="flex flex-col items-center gap-6">
          <Image
            src="/Logo_QP.png"
            alt="QuickProcess Logo"
            width={180}
            height={65}
            style={{ height: 'auto', width: '160px' }}
            className="object-contain mb-2"
          />
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-xl font-medium text-[#1e1c1b]"
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={() => { openModal(); setIsOpen(false); }}
            className="mt-4 bg-[var(--color-primary)] text-white px-8 py-3 rounded-full font-semibold shadow-md transition-all duration-300 cursor-pointer"
          >
            Get In Touch
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
