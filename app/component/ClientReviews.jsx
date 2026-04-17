import React from 'react';
import Image from 'next/image';

export default function PortfolioSection() {
  return (
    <section className="w-full bg-white py-20 overflow-hidden">
      <div className="w-full mx-auto flex flex-col items-center">
        
        {/* =========================================
            HEADER SECTION
            ========================================= */}
        <div className="text-center space-y-5 mb-16 md:mb-20">
          <h2 className="text-5xl md:text-[64px] font-serif font-medium text-[#1c1c1c] tracking-tight leading-tight">
            Portfolio, You Must See
          </h2>
          <p className="text-[#e65c3d] font-medium text-[15px] md:text-[17px] max-w-xl mx-auto leading-relaxed">
            Explore our work featuring high-quality prints and packaging designed to elevate brand presence.
          </p>

          {/* Custom Animated Button */}
          <div className="flex items-center justify-center gap-3 mt-8 cursor-pointer group w-fit mx-auto">
            <div className="relative w-14 h-10 flex items-center">
              {/* Dark Back Shape */}
              <div className="absolute left-0 w-8 h-10 bg-[#2d2d2d] rounded-[20px] transition-transform duration-300 group-hover:-translate-x-1"></div>
              {/* Orange Front Icon */}
              <div className="absolute right-0 w-9 h-9 bg-[#e65c3d] rounded-full flex items-center justify-center z-10 transition-transform duration-300 group-hover:translate-x-1 shadow-md">
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 12h14m0 0l-6-6m6 6l-6 6" />
                </svg>
              </div>
            </div>
            <span className="font-semibold text-sm text-[#1c1c1c] tracking-wide">Explore</span>
          </div>
        </div>

        {/* =========================================
            SHOWCASE CAPSULE CONTAINER
            ========================================= */}
        {/* Outer Beige Container with massive rounded corners */}
        <div className="w-full bg-[#dcd7ce] rounded-[3rem] md:rounded-[12rem] py-10 md:py-20 relative overflow-hidden flex flex-col gap-4 md:gap-8 shadow-sm">

          {/* ROW 1: Centered Items */}
          <div className="flex justify-center gap-4 md:gap-6 w-full px-4 md:px-16 relative z-10">
            
            {/* Image 1 (Green Design) */}
            <div className="relative w-[55%] md:w-[55%] h-28 md:h-[180px] lg:h-[150px] rounded-full overflow-hidden shadow-xl group">
              <Image 
                src="https://images.unsplash.com/photo-1628102491629-778571d893a3?q=80&w=1000&auto=format&fit=crop" 
                alt="Green Packaging Design" 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105" 
              />
            </div>

            {/* Image 2 (Purple Design) */}
            <div className="relative w-[45%] md:w-[44%] h-28 md:h-[180px] lg:h-[150px] rounded-full overflow-hidden shadow-xl group">
              <Image 
                src="https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1000&auto=format&fit=crop" 
                alt="Purple Branding Cards" 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105" 
              />
            </div>
            
          </div>

          {/* ROW 2: Bleeding Edges (Wider than container) */}
          {/* w-[110%] aur -ml-[5%] use kiya hai taake ye container ke boundaries se bahar nikal jaye */}
          <div className="flex justify-center gap-4 md:gap-6 w-[115%] md:w-[110%] -ml-[7.5%] md:-ml-[5%] relative z-10">
            
            {/* Image 3 (Yellow Design - Cut off on left) */}
            <div className="relative w-[30%] md:w-[40%] h-28 md:h-[180px] lg:h-[150px] rounded-full overflow-hidden shadow-xl group">
              <Image 
                src="https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?q=80&w=1000&auto=format&fit=crop" 
                alt="Yellow Circular Packaging" 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105" 
              />
            </div>

            {/* Image 4 (Black & Orange Box - Center Focus) */}
            <div className="relative w-[45%] md:w-[40%] h-28 md:h-[180px] lg:h-[150px] rounded-full overflow-hidden shadow-xl group">
              <Image 
                src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop" 
                alt="Catch Community Box" 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105" 
              />
            </div>

            {/* Image 5 (White Bag - Cut off on right) */}
            <div className="relative w-[25%] md:w-[20%] h-28 md:h-[180px] lg:h-[150px] rounded-full overflow-hidden shadow-xl group">
              <Image 
                src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1000&auto=format&fit=crop" 
                alt="White Bag Packaging" 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105" 
              />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}