"use client";
import Image from "next/image";

const svgLogos = new Set([3, 41]);
const jpgLogos = new Set([4]);

const allLogos = Array.from({ length: 41 }, (_, i) => {
  const n = i + 1;
  const ext = svgLogos.has(n) ? "svg" : jpgLogos.has(n) ? "jpg" : "png";
  return { src: `/logos/logo${n}.${ext}`, alt: `Client logo ${n}` };
});

const row1 = allLogos.slice(2, 21); 
const row2 = allLogos.slice(21, 40); 

function MarqueeRow({ logos, direction }) {
  const doubled = [...logos, ...logos];
  return (
    <div className="overflow-hidden w-full">
      <div
        style={{
          display: "flex",
          width: "max-content",
          animation: `${direction === "left" ? "marquee-left" : "marquee-right"} 40s linear infinite`,
        }}
        className="marquee-row"
      >
        {doubled.map((logo, i) => (
          <div
            key={i}
            className="flex items-center justify-center mx-3 shrink-0 bg-white rounded-2xl shadow-sm px-4 py-3"
            style={{ width: 140, height: 70 }}
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={120}
              height={50}
              className="object-contain w-full h-full  hover:grayscale-0 transition-all duration-300"
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
        .marquee-row:hover {
          animation-play-state: paused;
        } `}</style>

      <div className="text-center mb-10 md:mb-14 px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-harmonie font-normal text-[var(--color-text-secondary)] tracking-wide mb-3">
          Our Clients
        </h2>
        <p className="text-sm sm:text-base font-pogania text-[var(--color-primary)] tracking-tight">
          Trusted by 40+ businesses across Pakistan and beyond.
        </p>
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