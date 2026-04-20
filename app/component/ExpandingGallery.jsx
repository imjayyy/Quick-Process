"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaArrowRightLong } from "react-icons/fa6";

const galleryData = [
  {
    id: 1,
    title: "Custom Print Solutions",
    subtitle: "High-quality printing tailored to your specific brand needs.",
    image: "https://images.unsplash.com/photo-1629904853716-f0bc54eea481?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Branded Packaging Solutions.",
    subtitle: "High-quality printing and packaging solutions designed to strengthen your brand identity and leave a lasting impression.",
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=1200&auto=format&fit=crop", // ✅ upgraded (clean luxury box packaging)
  },
  {
    id: 3,
    title: "Packaging & Label Solutions",
    subtitle: "Creative labels and packaging to make your products stand out.",
    image: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?q=80&w=1200&auto=format&fit=crop", // ✅ upgraded (modern label aesthetic)
  },
  {
    id: 4,
    title: "Large Format Displays",
    subtitle: "Eye-catching banners and displays for events and storefronts.",
    image: "https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "Premium Print Finishing",
    subtitle: "Foil stamping, embossing, and premium textures for print.",
    image: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 6,
    title: "Marketing Print Collateral",
    subtitle: "Brochures, flyers, and business cards crafted to perfection.",
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=800&auto=format&fit=crop",
  },
];

export default function ExpandingGallery() {
  // Start with the second card expanded (like the design image)
  const [activeId, setActiveId] = useState(2);

  return (
    <section className="w-full py-20 px-4 md:px-20 bg-white">
      
      {/* Header Section */}
      <div className="flex flex-col items-center text-center mb-12">
        <h2 className="text-4xl md:text-6xl font-serif font-normal text-[var(--color-text-secondary)] font-harmonie tracking-wider mb-4">
          Elevate Brand Solutions
        </h2>
        <p className="text-[15px] md:text-lg font-medium text-[var(--color-primary)] max-w-2xl leading-relaxed font-pogania tracking-tight">
          High-quality printing and packaging solutions designed to <br className="hidden md:block" /> 
          strengthen your brand identity and leave a lasting impression.
        </p>
      </div>

      {/* Expanding Cards Container */}
      <div className="flex flex-col md:flex-row w-full max-w-[1300px] mx-auto h-[700px] md:h-[550px] gap-4">
        
        {galleryData.map((item) => {
          const isActive = activeId === item.id;

          return (
            <motion.div
              key={item.id}
              onClick={() => setActiveId(item.id)}
              // Tailwind's flex-grow transition smoothly handles the expanding animation
              className={`relative overflow-hidden rounded-[28px] cursor-pointer transition-[flex-grow] duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]
                ${isActive ? "flex-[5] md:flex-[4]" : "flex-[1] min-h-[80px] md:min-h-0 md:min-w-[80px] lg:min-w-[100px]"}
              `}
            >
              {/* Background Image */}
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />

              {/* Gradient Overlay for Text Readability */}
              <div 
                className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-500
                  ${isActive ? "opacity-100" : "opacity-60 hover:opacity-40"}
                `} 
              />

              {/* ---------------- COLLAPSED STATE ---------------- */}
              <div
                className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300
                  ${isActive ? "opacity-0 pointer-events-none" : "opacity-100 delay-300"}
                `}
              >
                {/* Vertical Text (reads bottom to top) */}
                <span 
                  className="text-white text-lg lg:text-xl font-medium tracking-wide whitespace-nowrap hidden md:block"
                  style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
                >
                  {item.title}
                </span>
                
                {/* Horizontal Text for Mobile Collapsed State */}
                <span className="text-white text-lg font-medium tracking-wide md:hidden">
                  {item.title}
                </span>
              </div>

              {/* ---------------- EXPANDED STATE ---------------- */}
              <div
                className={`absolute inset-0 p-6 md:p-8 flex flex-col justify-end transition-opacity duration-500 delay-200
                  ${isActive ? "opacity-100" : "opacity-0 pointer-events-none"}
                `}
              >
                <div className="flex justify-between gap-4">
                  {/* Title & Subtitle */}
                  <div className="flex-1 max-w-[400px]">
                    <h3 className="text-white text-2xl md:text-3xl font-light mb-3 leading-tight font-pogania">
                      {item.title}
                    </h3>
                    <p className="text-white text-sm md:text-base leading-relaxed font-pogania font-light tracking-wide">
                      {item.subtitle}
                    </p>
                  </div>

                  {/* Arrow Button (White Pill with Orange Circle) */}
                <div className="group relative hidden sm:flex items-center justify-center w-16 h-16 cursor-pointer">
  {/* 1. Dark Capsule Background */}
  <div className="absolute w-6 h-12 bg-white rounded-full" />

  {/* 2. Orange Circle with Sliding Arrow Logic */}
  <div className="absolute left-6 z-10 bg-[var(--color-primary)] rounded-full w-8 h-8 flex items-center justify-center shadow-2xl overflow-hidden transition-transform duration-300 group-hover:scale-105">
    
    {/* Initial Icon (Sliding Out to Right) */}
    <FaArrowRightLong 
      className="absolute w-4 h-4 text-black transition-all duration-500 ease-in-out group-hover:translate-x-12 group-hover:opacity-0" 
    />

    {/* New Icon (Coming in from Left) */}
    <FaArrowRightLong 
      className="absolute w-4 h-4 text-black -translate-x-12 opacity-0 transition-all duration-500 ease-in-out group-hover:translate-x-0 group-hover:opacity-100" 
    />
    
  </div>
</div>
                </div>
              </div>

            </motion.div>
          );
        })}

      </div>
    </section>
  );
}