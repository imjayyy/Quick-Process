import React from 'react';
import Image from 'next/image';
import AnimatedButton from './AnimatedButton';

export default function PortfolioSection() {
  return (
    <section className="w-full bg-white py-16 md:py-20 overflow-hidden">
      <div className="w-full mx-auto flex flex-col items-center">
      
              <div className="flex flex-col items-center text-center mb-10 md:mb-14 px-6 md:px-0">
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-serif font-normal text-[var(--color-text-secondary)] font-harmonie tracking-wider mb-4">
          Portfolio, You Must See
        </h2>

        <p className="text-sm sm:text-base md:text-lg font-medium text-[var(--color-primary)] max-w-xl leading-relaxed font-pogania tracking-tight">
        Explore our work featuring high-quality prints and packaging designed to elevate brand presence.
        </p>
        <div className="mt-8">
          <AnimatedButton text="View Portfolio" />
        </div>
      </div>

       <div className="w-full bg-[var(--color-container)] rounded-[2rem] md:rounded-[12rem] py-10 md:py-20 relative overflow-hidden flex flex-col gap-6 md:gap-8">

  {/* ROW 1 → Mobile becomes stacked */}
  <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-6 w-full px-4 md:px-16 relative z-10">

    <div className="relative w-full md:w-[55%] h-24 lg:h-[180px] lg:h-[150px] rounded-full overflow-hidden shadow-xl group">
      <Image
        src="/portfolio/design1.svg"
        alt="Green Packaging Design"
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />
    </div>

    <div className="relative w-full md:w-[44%] h-24 lg:h-[180px] lg:h-[150px] rounded-full overflow-hidden shadow-xl group">
      <Image
        src="/portfolio/design2.svg"
        alt="Purple Branding Cards"
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />
    </div>

  </div>

  {/* ROW 2 → Mobile stacked instead of overflow row */}
  <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-6 w-full md:w-[110%] md:-ml-[5%] px-4 md:px-0 relative z-10">

    <div className="relative w-full md:w-[40%] h-24 lg:h-[180px] lg:h-[150px] rounded-full overflow-hidden shadow-xl group">
      <Image
        src="/portfolio/design4.svg"
        alt="Yellow Circular Packaging"
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />
    </div>

    <div className="relative w-full md:w-[40%] h-24 lg:h-[180px] lg:h-[150px] rounded-full overflow-hidden shadow-xl group">
      <Image
        src="/portfolio/design3.svg"
        alt="Catch Community Box"
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />
    </div>

    <div className="relative w-full md:w-[20%] h-24 lg:h-[180px] lg:h-[150px] rounded-full overflow-hidden shadow-xl group">
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