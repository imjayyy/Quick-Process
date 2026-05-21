"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import AnimatedButton from "./AnimatedButton";
import Image from "next/image";

const images = [
    { src: "/products/1.webp", rotate: "-5deg" }, { src: "/products/2.webp", rotate: "3deg" },
    { src: "/products/3.webp", rotate: "-2deg" }, { src: "/products/4.webp", rotate: "6deg" },
    { src: "/products/5.webp", rotate: "-4deg" }, { src: "/products/6.webp", rotate: "4deg" },
    { src: "/products/7.webp", rotate: "-6deg" }, { src: "/products/8.webp", rotate: "2deg" },
    { src: "/products/9.webp", rotate: "-3deg" }, { src: "/products/10.webp", rotate: "5deg" },
];

export default function WrapProducts() {
    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    // Smooth spring physics add ki hai taake scroll jhatke na le
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    // Range barha di hai taake movement zyada visible ho
    const xLeft = useTransform(smoothProgress, [0, 1], [0, -500]);
    const xRight = useTransform(smoothProgress, [0, 1], [-500, 0]);

    return (
        <section ref={containerRef} className="w-full py-16 md:py-24 px-6 md:px-10 bg-white overflow-hidden">

            <div className="flex flex-col items-center text-center mb-10 md:mb-14">
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-serif font-normal text-[var(--color-text-secondary)] font-harmonie tracking-wider mb-4">
          Wrap Your Product in <br /> Personality
        </h2>

        <p className="text-sm sm:text-base md:text-lg font-medium text-[var(--color-primary)] max-w-2xl leading-relaxed font-pogania tracking-tight">
         Your product has a personality—let it show. From quirky patterns to elegant finishes, we create packaging that feels as unique as what's inside.
        </p>
      </div>

            {/* Interactive Image Grid */}
            <div className="flex flex-col gap-12 md:gap-14">

                {/* Row 1: 5 Images */}
                <motion.div style={{ x: xLeft }} className="flex gap-8 whitespace-nowrap pl-10">
                    {images.slice(0, 5).map((img, i) => (
                        <ProductCard key={i} src={img.src} rotate={img.rotate} />
                    ))}
                </motion.div>

                {/* Row 2: 5 Images */}
                <motion.div style={{ x: xRight }} className="flex gap-8 whitespace-nowrap pr-10">
                    {images.slice(5, 10).map((img, i) => (
                        <ProductCard key={i} src={img.src} rotate={img.rotate} />
                    ))}
                </motion.div>

            </div>
        </section>
    );
}

function ProductCard({ src, rotate }) {
    return (
        <motion.div
            whileHover={{
                scale: 1.08,
                rotate: "0deg",
                zIndex: 50,
                transition: { type: "spring", stiffness: 300 }
            }}
            style={{ rotate }}
            className="relative w-[200px] h-[200px] md:w-[320px] md:h-[380px] shrink-0"
        >
            <Image
                src={src}
                alt="Packaging Design"
                fill
                className="object-contain p-2 md:p-10 transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 220px, 320px"
            />
        </motion.div>
    );
}