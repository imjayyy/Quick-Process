import { FaArrowRightLong } from "react-icons/fa6";
import React from 'react';

export default function AnimatedButton({ text, onClick, className = "" }) {
  return (
   <button className="group flex items-center gap-4 bg-transparent cursor-pointer overflow-hidden">
  {/* Circle and Capsule Container */}
  <div className="relative flex items-center justify-center w-16 h-16">
    {/* Dark Capsule Background - Remains Static */}
    <div className="absolute w-10 h-16 bg-[var(--color-grey-dark)] rounded-full" />
    
    {/* Orange Circle Container with Sliding Arrow */}
    <div className="absolute z-10 flex items-center justify-center w-12 h-12 ml-6 bg-[var(--color-orange)] rounded-full shadow-lg overflow-hidden">
      {/* Initial Arrow (Sliding Right) */}
      <FaArrowRightLong className="absolute w-5 h-5 text-white transition-all duration-500 ease-in-out group-hover:translate-x-12 group-hover:opacity-0" />
      {/* New Arrow (Entering from Left) */}
      <FaArrowRightLong className="absolute w-5 h-5 text-white -translate-x-12 opacity-0 transition-all duration-500 ease-in-out group-hover:translate-x-0 group-hover:opacity-100" />
    </div>
  </div>

  {/* Text Container with Sliding Logic */}
  <div className="relative h-8 overflow-hidden flex items-center">
    {/* Initial Text (Sliding Right) */}
    <span className="text-[var(--color-grey-medium)] text-xl font-semibold tracking-tight transition-all duration-500 ease-in-out group-hover:translate-x-full group-hover:opacity-0">
      Learn More
    </span>
    {/* New Text (Entering from Left) */}
    <span className="absolute text-[var(--color-grey-medium)] text-xl font-semibold tracking-tight -translate-x-full opacity-0 transition-all duration-500 ease-in-out group-hover:translate-x-0 group-hover:opacity-100">
      Learn More
    </span>
  </div>
</button>
  );
}