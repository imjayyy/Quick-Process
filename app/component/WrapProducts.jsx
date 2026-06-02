"use client";
import React, { useRef, useCallback } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValue, animate } from "framer-motion";
import Image from "next/image";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

const images = [
    { src: "/products/1.webp",  rotate: "-5deg" }, { src: "/products/2.webp",  rotate: "3deg"  },
    { src: "/products/3.webp",  rotate: "-2deg" }, { src: "/products/4.webp",  rotate: "6deg"  },
    { src: "/products/5.webp",  rotate: "-4deg" }, { src: "/products/6.webp",  rotate: "4deg"  },
    { src: "/products/7.webp",  rotate: "-6deg" }, { src: "/products/8.webp",  rotate: "2deg"  },
    { src: "/products/9.webp",  rotate: "-3deg" }, { src: "/products/10.webp", rotate: "5deg"  },
];

const STEP   = 280;
const SPRING = { type: "spring", stiffness: 100, damping: 25 };

export default function WrapProducts() {
    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });
    const smooth = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

    const xScrollLeft  = useTransform(smooth, [0, 1], [0,    -500]);
    const xScrollRight = useTransform(smooth, [0, 1], [-500, 0   ]);

    const offset1 = useMotionValue(0);
    const offset2 = useMotionValue(0);

    return (
        <section ref={containerRef} className="w-full py-16 md:py-24 px-6 md:px-10 bg-white overflow-hidden">

            <div className="flex flex-col items-center text-center mb-10 md:mb-14">
                <h2 className="text-3xl sm:text-4xl md:text-6xl font-serif font-normal text-[var(--color-text-secondary)] font-harmonie tracking-wider mb-4">
                    Wrap Your Product in <br /> Personality
                </h2>
                <p className="text-sm sm:text-base md:text-lg font-medium text-[var(--color-primary)] max-w-2xl leading-relaxed font-pogania tracking-tight">
                    Your product has a personality—let it show. From quirky patterns to elegant finishes, we create
                    packaging that feels as unique as what's inside.
                </p>
            </div>

            <div className="flex flex-col gap-12 md:gap-14">
                <CarouselRow imgs={images.slice(0, 5)} xScroll={xScrollLeft}  offset={offset1} pl="pl-10" />
                <CarouselRow imgs={images.slice(5, 10)} xScroll={xScrollRight} offset={offset2} pl="pr-10" />
            </div>
        </section>
    );
}

function CarouselRow({ imgs, xScroll, offset, pl }) {
    const outerRef = useRef(null);
    const innerRef = useRef(null);

    // Compute valid offset range accounting for current scroll position
    const getBounds = useCallback(() => {
        if (!outerRef.current || !innerRef.current) return { min: -800, max: 0 };
        const outerW = outerRef.current.offsetWidth;
        const innerW = innerRef.current.offsetWidth;
        const scrollX = xScroll.get();
        return {
            min: -(Math.max(0, innerW - outerW)) - scrollX,
            max: Math.max(0, -scrollX),
        };
    }, [xScroll]);

    const onDragEnd = (_, info) => {
        const cur = offset.get();
        const { min, max } = getBounds();
        let target = cur;
        if (info.offset.x < -50) target = cur - STEP;
        else if (info.offset.x > 50) target = cur + STEP;
        animate(offset, Math.max(min, Math.min(max, target)), SPRING);
    };

    return (
        <div className="relative group">

            <button
                onClick={() => {
                    const { min, max } = getBounds();
                    animate(offset, Math.max(min, Math.min(max, offset.get() + STEP)), SPRING);
                }}
                className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-[var(--color-text-secondary)] items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 hover:bg-[var(--color-primary)] transition-all duration-300"
            >
                <FaArrowLeftLong className="w-3.5 h-3.5 text-white" />
            </button>

            <div ref={outerRef} className="overflow-hidden">
                <motion.div style={{ x: xScroll }}>
                    <motion.div
                        ref={innerRef}
                        style={{ x: offset, width: "max-content", touchAction: "pan-x" }}
                        drag="x"
                        dragConstraints={outerRef}
                        dragElastic={0.08}
                        onDragEnd={onDragEnd}
                        className={`flex gap-6 md:gap-8 cursor-grab active:cursor-grabbing ${pl}`}
                    >
                        {imgs.map((img, i) => (
                            <ProductCard key={i} src={img.src} rotate={img.rotate} />
                        ))}
                    </motion.div>
                </motion.div>
            </div>

            <button
                onClick={() => {
                    const { min, max } = getBounds();
                    animate(offset, Math.max(min, Math.min(max, offset.get() - STEP)), SPRING);
                }}
                className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-[var(--color-text-secondary)] items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 hover:bg-[var(--color-primary)] transition-all duration-300"
            >
                <FaArrowRightLong className="w-3.5 h-3.5 text-white" />
            </button>

        </div>
    );
}

function ProductCard({ src, rotate }) {
    return (
        <motion.div
            whileHover={{ scale: 1.08, rotate: "0deg", zIndex: 50, transition: { type: "spring", stiffness: 300 } }}
            style={{ rotate }}
            className="relative w-[200px] h-[200px] md:w-[320px] md:h-[380px] shrink-0"
        >
            <Image
                src={src}
                alt="Packaging Design"
                fill
                className="object-contain p-2 md:p-10"
                sizes="(max-width: 768px) 200px, 320px"
            />
        </motion.div>
    );
}
