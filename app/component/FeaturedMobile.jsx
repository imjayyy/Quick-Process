// components/FeaturedMobile.jsx
import React from "react";
import Image from "next/image";

export default function FeaturedMobile() {
  return (
    <div className="relative w-full flex flex-col items-center text-center px-6 py-12 overflow-hidden">

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
       <Image
  src="/Logo_QP.png"
  alt="Background Logo"
  width={400}
  height={400}
  className="object-contain invert brightness-0 invert-[1] opacity-7 transition-opacity duration-300 hover:opacity-100"
/>
      </div>

      {/* Content */}
      <div className="relative z-10">

        <h2 className="text-3xl leading-[1.2] text-[var(--color-white)] font-harmonie mb-4">
          Excellence In Offset Printing <br />
          And Packaging.
        </h2>

        <p className="font-pogania text-sm leading-relaxed text-white mb-8 tracking-wide [text-shadow:0_1px_3px_rgba(0,0,0,0.45)]">
          Precision, quality, and creativity — crafted to elevate your
          brand presence. Delivering high-end offset printing and packaging
          solutions.
        </p>

        {/* Trusted By */}
        <div>
          <h3 className="text-[var(--color-white)] text-lg font-pogania mb-4 tracking-wide">
            Trusted By:
          </h3>

          <div className="flex flex-wrap justify-center gap-6">
            {[1, 2, 3].map((num) => (
              <div
                key={num}
                className="relative w-24 h-10 flex items-center justify-center"
              >
                <Image
                  src={`/logos/logo${num}.png`}
                  alt={`Partner Logo ${num}`}
                  fill
                  className="object-contain grayscale"
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}