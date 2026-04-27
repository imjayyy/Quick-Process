"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const clients = [
  {
    name: "Client One",
    logo: "/logos/logo1.png",
    description:
      "Quick Process delivered exceptional offset-printed packaging that truly elevated our product line. The print quality and colour accuracy were outstanding.",
  },
  {
    name: "Client Two",
    logo: "/logos/logo2.png",
    description:
      "Outstanding quality and attention to detail. Our offset packaging has never looked better — every batch is consistent and premium.",
  },
  {
    name: "Client Three",
    logo: "/logos/logo3.png",
    description:
      "Reliable, fast, and premium results every time. Quick Process is our go-to offset printing and packaging partner for all our brand needs.",
  },
];
const variants = {
  enter: (dir) => ({ x: dir > 0 ? 80 : -80, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir) => ({ x: dir > 0 ? -80 : 80, opacity: 0 }),
};


export default function ClientsCarousel() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const go = (dir) => {
    setDirection(dir);
    setIndex((prev) => (prev + dir + clients.length) % clients.length);
  };
  const client = clients[index];


  return (
    <section className="w-full bg-[var(--color-container)] py-16 md:py-24 px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-harmonie font-normal text-[var(--color-text-secondary)] tracking-wide mb-3">Our Clients</h2>
        <p className="text-sm sm:text-base font-pogania text-[var(--color-primary)] tracking-tight">
          Trusted by businesses that demand the best in offset printing &amp; packaging.
        </p>
      </div>
      <div className="relative max-w-2xl mx-auto">
        <div className="overflow-hidden rounded-[32px] bg-white shadow-xl px-8 py-10 md:px-14 md:py-14 flex flex-col items-center text-center min-h-[320px] justify-center">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={index}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="flex flex-col items-center w-full">
              <div className="relative w-32 h-16 md:w-40 md:h-20 mb-6">
                <Image
                  src={client.logo}
                  alt={client.name}
                  fill
                  className="object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  sizes="160px"
                />
              </div>
              <p className="font-pogania text-sm md:text-base leading-relaxed text-[var(--color-text-secondary)] mb-6 max-w-md">
                &ldquo;{client.description}&rdquo;
              </p>
              <span className="font-harmonie text-lg md:text-xl text-[var(--color-primary)] tracking-wide">{client.name}</span>
            </motion.div>
          </AnimatePresence>
        </div>
        <button
          onClick={() => go(-1)}
          aria-label="Previous client"
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-7 w-11 h-11 rounded-full bg-white shadow-md flex items-center justify-center text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white transition-all duration-200">
          <FaChevronLeft className="text-sm" />
        </button>

        <button
          onClick={() => go(1)}
          aria-label="Next client"
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-7 w-11 h-11 rounded-full bg-white shadow-md flex items-center justify-center text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white transition-all duration-200">
          <FaChevronRight className="text-sm" />
        </button>
      </div>
      <div className="flex justify-center gap-2 mt-8">
        {clients.map((_, i) => (
          <button
            key={i}
            onClick={() => { setDirection(i > index ? 1 : -1); setIndex(i); }}
            aria-label={`Go to client ${i + 1}`}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              i === index ? "bg-[var(--color-primary)] w-6" : "bg-[var(--color-primary)] opacity-30" }`}
          />
        ))}
      </div>
    </section>
  );
}
