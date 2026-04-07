
import Image from 'next/image';
import React from 'react';

const Header = () => (
  <header className="fixed top-0 left-0 w-full z-50">
      <div className="flex justify-between items-center w-full max-w-[1200px] mx-auto h-[90px] px-12 rounded-b-3xl shadow-[0_6px_32px_0_rgba(0,0,0,0.04)] bg-(--color-white)">
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
              className="text-[17px] font-medium text-(--color-grey-dark) hover:text-(--color-orange) transition-colors duration-200 font-sans"
          >
            {item}
          </a>
        ))}
      </nav>
      {/* Contact Button */}
      <a
        href="#"
          className="flex items-center gap-3 bg-(--color-grey-medium) text-(--color-white) px-6 py-2 rounded-full font-semibold text-[17px] shadow-md hover:shadow-lg transition duration-200 h-12"
      >
        <span className="flex justify-center items-center w-8 h-8 bg-[var(--color-orange)] rounded-full text-[var(--color-white)] text-xl -mt-0.5">→</span>
        <span className="leading-tight">Contact</span>
      </a>
    </div>
  </header>
);

export default Header;