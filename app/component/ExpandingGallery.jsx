"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

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
    <section className="w-full py-20 px-4 md:px-20 bg-[var(--color-white)]">
      
      {/* Header Section */}
      <div className="flex flex-col items-center text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-[var(--color-grey-dark)] tracking-tight mb-4">
          Elevate Brand Solutions
        </h2>
        <p className="text-[15px] md:text-[16px] font-medium text-[var(--color-orange)] max-w-2xl leading-relaxed">
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
                <div className="flex justify-between items-end gap-4">
                  {/* Title & Subtitle */}
                  <div className="flex-1 max-w-[400px]">
                    <h3 className="text-white text-2xl md:text-3xl font-bold mb-3 leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-white/80 text-sm md:text-base leading-relaxed">
                      {item.subtitle}
                    </p>
                  </div>

                  {/* Arrow Button (White Pill with Orange Circle) */}
                  <div className="hidden sm:flex bg-white rounded-full p-1 items-center justify-center shrink-0 w-[60px] h-[36px]">
                    <div className="bg-[var(--color-orange)] rounded-full w-7 h-7 flex items-center justify-center ml-auto">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
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