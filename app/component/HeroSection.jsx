"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const cards = [
  { 
    // Tech / Laptop (Top Left)
    src: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=800&auto=format&fit=crop", 
    // CHANGE: top aur left ko screen ke edge ke qareeb kiya
    style: "top-[5%] left-[2%] md:top-[8%] md:left-[8%] rotate-[-15deg]", 
    alt: "Modern laptop on a desk"
  },
  { 
    // Cosmetics / Skincare (Top Right)
    src: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=800&auto=format&fit=crop", 
    // CHANGE: top aur right ko edge ke qareeb kiya
    style: "top-[2%] right-[2%] md:top-[5%] md:right-[8%] rotate-[12deg]", 
    alt: "Skincare product bottle"
  },
  { 
    // Gadget / Smartwatch (Mid Left)
    src: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800&auto=format&fit=crop", 
    // CHANGE: left ko edge ke qareeb kiya
    style: "top-[40%] left-[-5%] md:left-[2%] rotate-[-10deg]", 
    alt: "Smartwatch with white background"
  },
  { 
    // Audio / Headphones (Mid Right)
    src: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop", 
    // CHANGE: right ko edge ke qareeb kiya
    style: "top-[45%] right-[-5%] md:right-[2%] rotate-[8deg]", 
    alt: "Premium wireless headphones"
  },
  { 
    // Packaging / Coffee Cup (Bottom Left)
    src: "https://images.unsplash.com/photo-1559525839-b184a4d698c7?q=80&w=800&auto=format&fit=crop", 
    // CHANGE: bottom aur left ko edge ke qareeb kiya
    style: "bottom-[5%] left-[5%] md:bottom-[8%] md:left-[12%] rotate-[6deg]", 
    alt: "Artisan coffee cup"
  },
  { 
    // Fashion / Sneaker (Bottom Right)
    src: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800&auto=format&fit=crop", 
    // CHANGE: bottom aur right ko edge ke qareeb kiya
    style: "bottom-[2%] right-[5%] md:bottom-[5%] md:right-[12%] rotate-[-8deg]", 
    alt: "Red Nike sneaker"
  },
];

export default function HeroSection() {
  const { scrollY } = useScroll();
  
  // X aur Y axis par alag alag spread animation (0 se 500px scroll hone par)
  // Cards already door hain, toh spread hone par ye gracefully screen se thora bahar/aur edge par jayenge
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
    // YAHAN SE 'overflow-x-hidden' HATA DIYA HAI
    <section className="relative flex flex-col items-center justify-center h-screen bg-[var(--color-creme)]">
      
      {/* Floating & Spreading Cards */}
      {cards.map((card, i) => (
        <motion.div
          key={card.src}
          style={{ 
            x: spreadX[i], // X-axis spreading
            y: spreadY[i]  // Y-axis spreading
          }} 
          // z-50 add kiya hai taake ye niche wale component ke oopar nazar aayein
          className={`absolute w-36 h-40 md:w-44 md:h-48 rounded-xl shadow-xl my-8 ${card.style} bg-white transition-shadow hover:shadow-2xl`}
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
        {/* ... (Baqi text waisa hi rahega) ... */}
        <div className="text-lg md:text-2xl font-semibold text-[var(--color-orange)] mb-4 tracking-wide">
          Welcome to Quick Process
        </div>
        <h1 className="text-4xl md:text-6xl font-serif font-bold text-[var(--color-grey-dark)] text-center leading-tight mb-8 drop-shadow-sm">
          From Idea to Print —<br />
          We’ve Got You Covered
        </h1>
        <a
          href="#"
          className="flex items-center gap-3 bg-[var(--color-grey-medium)] text-[var(--color-white)] px-8 py-4 rounded-full font-semibold text-lg shadow-md hover:shadow-xl hover:bg-[var(--color-grey-dark)] transition duration-300"
        >
          <span className="flex justify-center items-center w-8 h-8 bg-[var(--color-orange)] rounded-full text-[var(--color-white)] text-xl leading-none">
            →
          </span>
          <span className="leading-tight">Learn More</span>
        </a>
      </div>
    </section>
  );
}