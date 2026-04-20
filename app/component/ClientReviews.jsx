import React from 'react';
import Image from 'next/image';
import AnimatedButton from './AnimatedButton';

export default function PortfolioSection() {
  return (
    <section className="w-full bg-white py-20 overflow-hidden">
      <div className="w-full mx-auto flex flex-col items-center">
      
             <div className="flex flex-col items-center text-center mb-12">
                <h2 className="text-4xl md:text-6xl font-serif font-normal text-[var(--color-text-secondary)] font-harmonie tracking-wider mb-4">
                    Portfolio, You Must See
                </h2>
                <p className="text-[15px] md:text-lg font-medium text-[var(--color-primary)] max-w-2xl leading-relaxed font-pogania tracking-tight">
                   Explore our work featuring high-quality prints and packaging <br /> designed to elevate brand presence.
                </p>
                <div className='mt-8'>
                    <AnimatedButton text="Explore" />
                </div>
            </div>
        <div className="w-full bg-[var(--color-container)] rounded-[3rem] md:rounded-[12rem] py-10 md:py-20 relative overflow-hidden flex flex-col gap-4 md:gap-8">
            {/* Section Header */}
          {/* ROW 1: Centered Items */}
          <div className="flex justify-center gap-4 md:gap-6 w-full px-4 md:px-16 relative z-10">
            
            {/* Image 1 (Green Design) */}
            <div className="relative w-[55%] md:w-[55%] h-28 md:h-[180px] lg:h-[150px] rounded-full overflow-hidden shadow-xl group">
              <Image 
                src="/portfolio/design1.svg" 
                alt="Green Packaging Design" 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105" 
              />
            </div>

            {/* Image 2 (Purple Design) */}
            <div className="relative w-[45%] md:w-[44%] h-28 md:h-[180px] lg:h-[150px] rounded-full overflow-hidden shadow-xl group">
              <Image 
                src="/portfolio/design2.svg" 
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
                src="/portfolio/design4.svg" 
                alt="Yellow Circular Packaging" 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105" 
              />
            </div>

            {/* Image 4 (Black & Orange Box - Center Focus) */}
            <div className="relative w-[45%] md:w-[40%] h-28 md:h-[180px] lg:h-[150px] rounded-full overflow-hidden shadow-xl group">
              <Image 
                src="/portfolio/design3.svg" 
                alt="Catch Community Box" 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105" 
              />
            </div>

            {/* Image 5 (White Bag - Cut off on right) */}
            <div className="relative w-[25%] md:w-[20%] h-28 md:h-[180px] lg:h-[150px] rounded-full overflow-hidden shadow-xl group">
              <Image 
                src="/portfolio/design1.svg" 
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