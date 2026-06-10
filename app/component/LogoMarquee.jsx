"use client";
import Image from "next/image";

const allLogos = [
  "/logos/Logo01.png",
  "/logos/Logo2.png",
  "/logos/logo3.png",
  "/logos/Logo4.jpg",
  "/logos/Logo5.png",
  "/logos/Logo6.png",
  "/logos/Logo7.png",
  "/logos/Logo8.png",
  "/logos/Logo10.png",
  "/logos/logo11.webp",
  "/logos/Logo12.png",
  "/logos/Logo13.png",
  "/logos/logo14.jpg",
  "/logos/Logo15.png",
  "/logos/Logo16.png",
  "/logos/Logo17.png",
  "/logos/Logo18.png",
  "/logos/Logo19.png",
  "/logos/logo20.gif",
  "/logos/Logo21.png",
  "/logos/Logo22.png",
  "/logos/Logo23.png",
  "/logos/Logo24.png",
  "/logos/Logo25.png",
  "/logos/Logo26.png",
  "/logos/Logo27.png",
  "/logos/Logo28.png",
  "/logos/Logo29.png",
  "/logos/Logo30.png",
  "/logos/Logo31.png",
  "/logos/Logo32.png",
  "/logos/Logo33.png",
  "/logos/Logo34.png",
  "/logos/Logo35.png",
  "/logos/Logo36.png",
  "/logos/Logo37.png",
  "/logos/Logo38.png",
  "/logos/Logo39.png",
  "/logos/Logo40.png",
].map((src) => ({ src, alt: "Client logo" }));

const mid = Math.ceil(allLogos.length / 2);
const row1 = allLogos.slice(0, mid);
const row2 = allLogos.slice(mid); 

function MarqueeRow({ logos, direction }) {
  const doubled = [...logos, ...logos];
  return (
    <div className="overflow-hidden w-full">
      <div className={direction === "left" ? "marquee-left" : "marquee-right"}>
        {doubled.map((logo, i) => (
          <div
            key={i}
            className="flex items-center justify-center mx-3 shrink-0  bg-white rounded-2xl shadow-sm px-2 py-2"
            style={{ width: 140, height: 70 }}>
            <Image
              src={logo.src}
              alt={logo.alt}
              width={120}
              height={50}
              unoptimized
              className="object-contain w-full h-full transition-all duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  ); 
}

export default function LogoMarquee() {
  return (
    <section className="w-full py-16 md:py-20 bg-[var(--color-container)] overflow-hidden">
      <style>{`
        @keyframes marquee-left {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          from { transform: translateX(-50%); }
          to   { transform: translateX(0); }
        }
        .marquee-left  { animation: marquee-left  100s linear infinite; display: flex; width: max-content; }
        .marquee-right { animation: marquee-right 100s linear infinite; display: flex; width: max-content; }
        .marquee-left:hover,
        .marquee-right:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="text-center mb-10 md:mb-14 px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-harmonie font-normal text-[var(--color-text-secondary)] tracking-wide mb-3">
          Our Clients
        </h2>
        <p className="text-sm sm:text-base font-pogania text-[var(--color-primary)] tracking-tight">
Trusted by 40+ business across Pakistan , UK and beyond        </p>
      </div>

      <div
        style={{
          maskImage: "linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)",
        }}>
        <div className="flex flex-col gap-5">
          <MarqueeRow logos={row1} direction="left" />
          <MarqueeRow logos={row2} direction="right" />
        </div>
      </div>
    </section>
  );
}