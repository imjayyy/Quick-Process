"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { BiSolidQuoteAltLeft } from 'react-icons/bi';

// Testimonial Data Array
const testimonials = [
  {
    id: 1,
    name: "Ahmed Raza",
    role: "Business Owner",
    review: "Excellent quality and fast service! The printing was sharp, colors were perfect, and delivery was on time. Highly recommended for any business needs.",
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=150&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Sarah Jenkins",
    role: "Marketing Director",
    review: "Quick Process completely transformed our packaging. The premium finish and attention to detail elevated our brand presence overnight.",
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=150&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Michael Chen",
    role: "Startup Founder",
    review: "I was blown away by their customer support and turnaround time. The large format displays we ordered for our expo were absolutely flawless.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop"
  },
  {
    id: 4,
    name: "Elena Rodriguez",
    role: "Creative Lead",
    review: "Their custom print solutions are unmatched. They handled our complex die-cut requirements with ease, delivering a pixel-perfect final product.",
    image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=150&auto=format&fit=crop"
  }
];

export default function TestimonialSection() {
  // State to track which testimonial is currently active (defaults to the first one)
  const [activeId, setActiveId] = useState(testimonials[0].id);

  // Find the currently active testimonial object
  const activeTestimonial = testimonials.find((t) => t.id === activeId);

  return (
    // Outer container with white background
    <section className="w-full bg-white py-10 md:py-32">
      
      {/* Beige Strip */}
      <div className="w-full bg-[var(--color-container)] relative">
        
        <div className="max-w-7xl mx-auto py-20 px-6 md:py-24 flex flex-col md:flex-row items-center justify-between lg:gap-45">
          
          {/* Left Column: Heading & Intro */}
          <div className="flex flex-col items-center md:items-start md:mb-14">
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-serif font-normal text-[var(--color-text-secondary)] font-harmonie tracking-wide mb-4">
          Client Reviews 
        </h2>

        <p className="text-sm sm:text-base md:text-lg font-medium text-[var(--color-text-secondary)] max-w-2xl leading-relaxed font-pogania tracking-tight">
          Hear from our clients who trust us for precision, quality, and timely delivery in every project.
        </p>
      </div>

          {/* Right Column: Quote & Profiles */}
          <div className="w-full md:w-6/12 relative mt-10 md:mt-0 flex flex-col justify-between">
            
            {/* Giant Overlapping Quote Icon */}
            <div className="hidden lg:block absolute -top-[165px] left-0 md:-left-4 text-[var(--color-secondary)] pointer-events-none">
              <BiSolidQuoteAltLeft className="w-32 h-32 font-pogonia" />
            </div>

            {/* Animated Testimonial Text */}
            <div className="relative z-10 min-h-[112px]">
              <AnimatePresence mode="wait">
                <motion.p
                  key={activeTestimonial.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="text-base md:text-lg text-[var(--color-text-primary)] font-pogania font-normal leading-relaxed max-w-xl text-center md:text-left"
                >
                  {activeTestimonial.review}
                </motion.p>
              </AnimatePresence>
            </div>

            {/* User Profiles Selector */}
            <div className="flex flex-wrap items-center gap-4 mt-8 md:mt-0">
              {testimonials.map((testimonial) => {
                const isActive = testimonial.id === activeId;

                // Render Active Pill
                if (isActive) {
                  return (
                    <motion.div 
                      key={testimonial.id}
                      layoutId="activePill"
                      className="flex items-center gap-3 bg-[var(--color-secondary)] p-1.5 pr-8 rounded-full shadow-md cursor-default"
                    >
                      <Image 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        width={44} 
                        height={44} 
                        className="rounded-full object-cover border-2 border-[var(--color-grey-medium)] w-[44px] h-[44px]"
                      />
                      <div className="flex flex-col">
                        <span className="text-white font-bold text-md leading-tight">{testimonial.name}</span>
                        <span className="text-gray-200/80 text-sm font-medium leading-tight">{testimonial.role}</span>
                      </div>
                    </motion.div>
                  );
                }

                // Render Inactive Circles
                return (
                  <div 
                    key={testimonial.id}
                    onClick={() => setActiveId(testimonial.id)}
                    className="w-12 h-12 rounded-full overflow-hidden cursor-pointer hover:ring-2 ring-offset-2 ring-offset-[var(--color-primary)] ring-[var(--color-secondary)] transition-all opacity-80 hover:opacity-100"
                  >
                    <Image 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      width={48} 
                      height={48} 
                      className="object-cover w-full h-full"
                    />
                  </div>
                );
              })}
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}