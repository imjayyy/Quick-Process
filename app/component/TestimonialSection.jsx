"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

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
    <section className="w-full bg-[var(--color-white)] py-24 md:py-32">
      
      {/* Beige Strip */}
      <div className="w-full bg-[var(--color-grey-light)] relative">
        
        <div className="max-w-7xl mx-auto py-20 md:py-24 flex flex-col md:flex-row items-center justify-between gap-16 md:gap-45">
          
          {/* Left Column: Heading & Intro */}
          <div className="w-full md:w-5/12 flex flex-col">
            <h2 className="text-5xl md:text-[72px] font-serif font-medium text-[var(--color-grey-dark)] tracking-tight leading-none mb-6">
              Client Reviews.
            </h2>
            <p className="text-[var(--color-white)] text-[17px] leading-relaxed max-w-sm font-medium">
              Hear from our clients who trust us for precision, quality, and timely delivery in every project.
            </p>
          </div>

          {/* Right Column: Quote & Profiles */}
          <div className="w-full md:w-6/12 relative mt-10 md:mt-0 min-h-[220px] flex flex-col justify-between">
            
            {/* Giant Overlapping Quote Icon */}
            <div className="absolute -top-[100px] md:-top-[140px] left-0 md:-left-4 text-[var(--color-gray-medium)] pointer-events-none">
              <svg width="120" height="90" viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-24 md:w-32 h-auto">
                <path d="M38.5 0C28.5 0 20.3 3.5 13.5 10.5C6.7 17.5 3.3 26.3 3.3 37C3.3 44 5.3 50.3 9.3 56C13.3 61.7 18.7 64.5 25.5 64.5C31.5 64.5 36.3 62.5 40 58.5C43.7 54.5 45.5 49.5 45.5 43.5C45.5 37.5 43.7 32.5 40 28.5C36.3 24.5 31.5 22.5 25.5 22.5C24.5 22.5 23.5 22.7 22.5 23C25.2 16.3 30.5 13 38.5 13V0ZM93.5 0C83.5 0 75.3 3.5 68.5 10.5C61.7 17.5 58.3 26.3 58.3 37C58.3 44 60.3 50.3 64.3 56C68.3 61.7 73.7 64.5 80.5 64.5C86.5 64.5 91.3 62.5 95 58.5C98.7 54.5 100.5 49.5 100.5 43.5C100.5 37.5 98.7 32.5 95 28.5C91.3 24.5 86.5 22.5 80.5 22.5C79.5 22.5 78.5 22.7 77.5 23C80.2 16.3 85.5 13 93.5 13V0Z" fill="currentColor"/>
              </svg>
            </div>

            {/* Animated Testimonial Text */}
            <div className="relative z-10 min-h-[100px]">
              <AnimatePresence mode="wait">
                <motion.p
                  key={activeTestimonial.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="text-[19px] md:text-[21px] text-[var(--color-grey-dark)] font-medium leading-relaxed max-w-lg"
                >
                  {activeTestimonial.review}
                </motion.p>
              </AnimatePresence>
            </div>

            {/* User Profiles Selector */}
            <div className="flex flex-wrap items-center gap-4 mt-8">
              {testimonials.map((testimonial) => {
                const isActive = testimonial.id === activeId;

                // Render Active Pill
                if (isActive) {
                  return (
                    <motion.div 
                      key={testimonial.id}
                      layoutId="activePill"
                      className="flex items-center gap-3 bg-[var(--color-grey-medium)] p-1.5 pr-8 rounded-full shadow-md cursor-default"
                    >
                      <Image 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        width={44} 
                        height={44} 
                        className="rounded-full object-cover border-2 border-[var(--color-grey-medium)] w-[44px] h-[44px]"
                      />
                      <div className="flex flex-col">
                        <span className="text-white font-bold text-[15px] leading-tight">{testimonial.name}</span>
                        <span className="text-gray-300 text-[13px] font-medium leading-tight">{testimonial.role}</span>
                      </div>
                    </motion.div>
                  );
                }

                // Render Inactive Circles
                return (
                  <div 
                    key={testimonial.id}
                    onClick={() => setActiveId(testimonial.id)}
                    className="w-12 h-12 rounded-full overflow-hidden cursor-pointer hover:ring-2 ring-offset-2 ring-offset-[var(--color-grey-light)] ring-[var(--color-grey-dark)] transition-all opacity-80 hover:opacity-100"
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