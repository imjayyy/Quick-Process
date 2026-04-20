import React from "react";
import Image from "next/image";

export default function FeaturedSection() {
  return (
    <section className="w-full flex justify-center py-16 ">

      {/* Main Pill Container */}
      <div className="relative w-full h-[540px] bg-[var(--color-secondary)] rounded-[260px] overflow-hidden shadow-xl">

        {/* LEFT: Diagonal Capsules */}
        <div className="absolute left-25 top-0 w-[50%] h-full pointer-events-none">

          {/* Capsule 1 (Top) */}
     <div className="absolute left-[150px] top-[-120px] w-[140px] h-[580px] rotate-[40deg] rounded-[120px] overflow-hidden shadow-2xl z-20">
  
  <div className="relative w-full h-full scale-[1.3] translate-x-5 translate-y-8">
    <Image
      src="/packaging/package1.svg"
      alt="ESG Book"
      width={400}
      height={600}
      className="object-cover w-full h-full"
    />
  </div>

</div>

          {/* Capsule 2 (Bottom) */}
         <div className="absolute left-[260px] top-[40px] w-[140px] h-[580px] rotate-[40deg] rounded-[120px] overflow-hidden shadow-2xl z-10">
  
  <div className="relative w-full h-full scale-[1.3] translate-x-6 translate-y-2">
    <Image
      src="/packaging/package2.svg"
      alt="Oats Packaging"
      width={400}
      height={600}
      className="object-cover w-full h-full"
    />
  </div>

</div>

        </div>

        {/* RIGHT: Content */}
        <div className="absolute right-0 top-0 w-[50%] h-full flex flex-col justify-center pr-20 pl-10 text-left">

          <h2 className="text-4xl leading-[1.2] text-[var(--color-white)] font-harmonie mb-5">
            Excellence In Printing <br />
            And Packaging.
          </h2>

          <p className="font-pogania text-lg leading-relaxed text-[var(--color-primary)] mb-10 font-normal tracking-wide fobt[text-shadow:0_1px_3px_rgba(0,0,0,0.45)]">
            Precision, quality, and creativity — crafted to elevate your<br />
            brand presence. Delivering high-end printing and <br />
            packaging solutions.
          </p>

          {/* Trusted By */}
          <div>
            <h3 className="text-[var(--color-white)] text-xl font-pogania mb-5 font-normal tracking-wide">
              Trusted By:
            </h3>

            <div className="flex flex-wrap gap-8">
              {[1, 2, 3].map((num) => (
                <div
                  key={num}
                  // Sabke liye ek hi size ka container
                  className="relative w-28 h-12 md:w-36 md:h-20 flex items-center justify-center"
                >
                  <Image
                    src={`/logos/logo${num}.png`}
                    alt={`Partner Logo ${num}`}
                    fill
                    // p-2 ya p-4 add karne se bade logos ko thori saans milegi aur wo chote logos ke barabar lagenge
                    className="object-contain grayscale hover:grayscale-0 transition-all duration-300 py-2 md:py-3"
                    sizes="(max-width: 768px) 112px, 144px"
                  />
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}