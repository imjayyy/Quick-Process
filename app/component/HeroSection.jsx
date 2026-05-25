"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { BiArrowFromRight } from "react-icons/bi";
import { FaArrowRightLong } from "react-icons/fa6";
import AnimatedButton from "./AnimatedButton";

const cards = [
  { 
    // Tech / Laptop (Top Left)
    src: "/products/9.webp", 
    style: "top-[5%] left-[2%] md:top-[8%] md:left-[8%] rotate-[-15deg]", 
    alt: "Modern laptop on a desk"
  },
  { 
    // Cosmetics / Skincare (Top Right)
    src: "/products/7.webp", 
    style: "top-[2%] right-[2%] md:top-[5%] md:right-[8%] rotate-[12deg]", 
    alt: "Skincare product bottle"
  },
  { 
    // Gadget / Smartwatch (Mid Left)
    src: "/products/3.webp", 
    style: "top-[40%] left-[-5%] md:left-[2%] rotate-[-10deg]", 
    alt: "Smartwatch with white background"
  },
  { 
    // Audio / Headphones (Mid Right)
    src: "/products/6.webp", 
    style: "top-[45%] right-[-5%] md:right-[2%] rotate-[8deg]", 
    alt: "Premium wireless headphones"
  },
  { 
    // Packaging / Coffee Cup (Bottom Left)
    src: "/products/4.webp", 
    style: "bottom-[5%] left-[5%] md:bottom-[8%] md:left-[12%] rotate-[6deg]", 
    alt: "Artisan coffee cup"
  },
  { 
    // Fashion / Sneaker (Bottom Right)
    src: "/products/2.webp", 
    style: "bottom-[2%] right-[5%] md:bottom-[5%] md:right-[12%] rotate-[-8deg]", 
    alt: "Red Nike sneaker"
  },
];

export default function HeroSection() {
  const { scrollY } = useScroll();
  
  // X aur Y axis par alag alag spread animation (0 se 500px scroll hone par)
  const spreadX = [
    useTransform(scrollY, [0, 500], [0, -150]), // Card 1 moves Left
    useTransform(scrollY, [0, 500], [0, 150]),  // Card 2 moves Right
    useTransform(scrollY, [0, 500], [0, -200]), // Card 3 moves Hard Left
    useTransform(scrollY, [0, 500], [0, 200]),  // Card 4 moves Hard Right
    useTransform(scrollY, [0, 500], [0, -150]), // Card 5 moves Left
    useTransform(scrollY, [0, 500], [0, 150]),  // Card 6 moves Right
  ];

  const spreadY = [
    useTransform(scrollY, [0, 500], [0, -150]), // Card 1 moves Up
    useTransform(scrollY, [0, 500], [0, -150]), // Card 2 moves Up
    useTransform(scrollY, [0, 500], [0, -20]),  // Card 3 stays relatively centered vertically
    useTransform(scrollY, [0, 500], [0, 20]),   // Card 4 stays relatively centered vertically
    useTransform(scrollY, [0, 500], [0, 150]),  // Card 5 moves Down
    useTransform(scrollY, [0, 500], [0, 150]),  // Card 6 moves Down
  ];

return (
<section className="relative flex flex-col items-center justify-center h-auto py-30 lg:h-screen lg:py-0 bg-[var(--color-creme)]">      
      {/* Floating & Spreading Cards */}
      {cards.map((card, i) => (
        <motion.div
          key={card.src}
          style={{ 
            x: spreadX[i], // X-axis spreading
            y: spreadY[i]  // Y-axis spreading
          }} 
          className={`hidden lg:flex absolute w-36 h-40 md:w-40 md:h-48 rounded-xl shadow-xl my-8 ${card.style} bg-white transition-shadow hover:shadow-2xl`}
        >
          <div className="relative w-full h-full p-1">
            <Image
              src={card.src}
              alt={card.alt}
              fill
              className="object-cover rounded-lg"
              sizes="(max-width: 768px) 144px, 176px"
              priority
            />
          </div>
        </motion.div>
      ))}

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center px-4">
        <div className="text-lg md:text-2xl font-bold text-[var(--color-primary)] mb-4 tracking-wide">
          Welcome to Quick Process
        </div>
      <h1 className="text-4xl md:text-6xl font-harmonie font-normal tracking-wide text-[var(--color-text-secondary)] text-center mb-8 drop-shadow-sm max-w-2xl">
  From Idea to Print —
  We’ve Got You Covered
</h1>
      <AnimatedButton
        text="Learn More"
        onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
      />
      </div>
    </section>
  );
}