import React from "react";
import Image from "next/image";

export default function FeaturedSection() {
  return (
    <section className="w-full flex justify-center py-16 ">
      
      {/* Main Pill Container */}
      <div className="relative w-full h-[540px] bg-[#4b4743] rounded-[260px] overflow-hidden shadow-xl">
        
        {/* LEFT: Diagonal Capsules */}
        <div className="absolute left-25 top-0 w-[50%] h-full pointer-events-none">
          
          {/* Capsule 1 (Top) */}
          <div className="absolute left-[150px] top-[-120px] w-[140px] h-[580px] rotate-[40deg] rounded-[120px] overflow-hidden shadow-2xl z-20">
            <Image
              src="https://images.unsplash.com/photo-1580910051074-3eb694886505?q=80&w=800&auto=format&fit=crop"
              alt="ESG Book"
              fill
              className="object-cover scale-[1.3]"
            />
          </div>

          {/* Capsule 2 (Bottom) */}
          <div className="absolute left-[260px] top-[40px] w-[140px] h-[580px] rotate-[40deg] rounded-[120px] overflow-hidden shadow-2xl z-10">
            <Image
              src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=800&auto=format&fit=crop"
              alt="Oats Packaging"
              fill
              className="object-cover scale-[1.3]"
            />
          </div>

        </div>

        {/* RIGHT: Content */}
        <div className="absolute right-0 top-0 w-[50%] h-full flex flex-col justify-center pr-20 pl-10 text-left">
          
          <h2 className="text-[36px] leading-[1.2] text-[#f5f2ec] font-serif mb-5">
            Excellence In Printing <br />
            And Packaging.
          </h2>

          <p className="text-[15px] leading-relaxed text-[#ff7a2f] max-w-[420px] mb-10">
            Precision, quality, and creativity — crafted to elevate your brand presence. 
            Delivering high-end printing and packaging solutions.
          </p>

          {/* Trusted By */}
          <div>
            <h3 className="text-[#f5f2ec] text-[16px] mb-5">
              Trusted By:
            </h3>

            <div className="flex items-center gap-10 opacity-60">
              
              {/* Logo 1 */}
              <svg width="60" height="24" viewBox="0 0 60 24">
                <path d="M0 12L6 0H18L12 12H0Z" fill="#f5f2ec"/>
                <path d="M22 12L28 0H40L34 12H22Z" fill="#f5f2ec"/>
                <path d="M12 24L18 12H30L24 24H12Z" fill="#f5f2ec"/>
                <path d="M34 24L40 12H52L46 24H34Z" fill="#f5f2ec"/>
              </svg>

              {/* Logo 2 */}
              <div className="flex items-center gap-2">
                <svg width="20" height="20" viewBox="0 0 24 24">
                  <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" fill="#f5f2ec"/>
                </svg>
                <span className="text-[#f5f2ec] text-xl font-semibold">
                  Logoipsum
                </span>
              </div>

              {/* Logo 3 */}
              <svg width="26" height="26" viewBox="0 0 28 28">
                <circle cx="14" cy="14" r="14" fill="#f5f2ec"/>
                <path d="M0 28L28 0V8L8 28H0Z" fill="#4b4743"/>
              </svg>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}