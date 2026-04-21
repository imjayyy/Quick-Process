"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaArrowRightLong } from "react-icons/fa6";
import { BiSolidQuoteAltLeft } from "react-icons/bi";
const galleryData = [
  {
    id: 1,
    title: "Custom Print Solutions",
    subtitle: "High-quality printing tailored to your specific brand needs.",
    image: "/brand-solutions/1.png",
  },
  {
    id: 2,
    title: "Branded Packaging Solutions.",
    subtitle: "High-quality printing and packaging solutions designed to strengthen your brand identity and leave a lasting impression.",
    image: "/brand-solutions/2.png",
  },
  {
    id: 3,
    title: "Packaging & Label Solutions",
    subtitle: "Creative labels and packaging to make your products stand out.",
    image: "/brand-solutions/3.png",
  },
  {
    id: 4,
    title: "Large Format Displays",
    subtitle: "Eye-catching banners and displays for events and storefronts.",
    image: "/brand-solutions/4.png",
  },
  {
    id: 5,
    title: "Premium Print Finishing",
    subtitle: "Foil stamping, embossing, and premium textures for print.",
    image: "/brand-solutions/5.png",
  },
  {
    id: 6,
    title: "Marketing Print Collateral",
    subtitle: "Brochures, flyers, and business cards crafted to perfection.",
    image: "/brand-solutions/6.png",
  },
];

export default function ExpandingGallery() {
  const [activeId, setActiveId] = useState(2);

  return (
    <section className="w-full py-16 md:py-20 px-4 md:px-12 lg:px-20 bg-white">

      {/* Header */}
      <div className="flex flex-col items-center text-center mb-10 md:mb-14">
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-serif font-normal text-[var(--color-text-secondary)] font-harmonie tracking-wider mb-4">
          Elevate Brand Solutions
        </h2>

        <p className="text-sm sm:text-base md:text-lg font-medium text-[var(--color-primary)] max-w-2xl leading-relaxed font-pogania tracking-tight">
          High-quality printing and packaging solutions designed to <br className="hidden md:block" />
          strengthen your brand identity and leave a lasting impression.
        </p>
      </div>

      {/* Cards */}
      <div className="flex flex-col lg:flex-row w-full max-w-[1300px] mx-auto gap-4">

        {galleryData.map((item) => {
          const isActive = activeId === item.id;

          return (
            <motion.div
              key={item.id}
              onClick={() => setActiveId(item.id)}
              className={`
                relative overflow-hidden rounded-[24px] cursor-pointer transition-all duration-500
                ${isActive 
                  ? "lg:flex-[4] h-[260px] sm:h-[300px] md:h-[350px] lg:h-[550px]" 
                  : "lg:flex-[1] h-[80px] sm:h-[100px] md:h-[120px] lg:h-[550px]"
                }
              `}
            >
              {/* Image */}
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />

              {/* Overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-500
                ${isActive ? "opacity-100" : "opacity-70 hover:opacity-50"}`}
              />

              {/* Collapsed */}
          <div
  className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300
  ${isActive ? "opacity-0 pointer-events-none" : "opacity-100"}`}
>
  <span
    className="text-white text-sm sm:text-base md:text-xl font-medium tracking-wide font-pogania text-center
    lg:[writing-mode:vertical-rl] lg:rotate-180"
  >
    {item.title}
  </span>
</div>

              {/* Expanded */}
              <div
                className={`absolute inset-0 p-4 md:p-6 flex flex-col justify-end transition-opacity duration-500
                ${isActive ? "opacity-100" : "opacity-0 pointer-events-none"}`}
              >
                <div className="flex justify-between gap-4">

                  <div className="flex-1 max-w-[400px]">
                    <h3 className="text-white text-lg sm:text-xl md:text-2xl font-light mb-2 leading-tight font-pogania">
                      {item.title}
                    </h3>

                    <p className="text-white text-xs sm:text-sm md:text-base leading-relaxed font-pogania font-light tracking-wide">
                      {item.subtitle}
                    </p>
                  </div>

                  {/* Arrow (hidden on small) */}
                  <button className="group relative hidden md:flex items-center justify-center w-14 h-14 cursor-pointer">
                    <div className="absolute w-6 h-12 bg-white rounded-full" />

                    <div className="absolute left-6 z-10 bg-[var(--color-primary)] rounded-full w-8 h-8 flex items-center justify-center shadow-2xl overflow-hidden">
                      <FaArrowRightLong className="absolute w-4 h-4 text-black transition-all duration-500 group-hover:translate-x-10 group-hover:opacity-0" />
                      <FaArrowRightLong className="absolute w-4 h-4 text-black -translate-x-10 opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100" />
                    </div>
                  </button>

                </div>
              </div>

            </motion.div>
          );
        })}
      </div>
    </section>
  );
}