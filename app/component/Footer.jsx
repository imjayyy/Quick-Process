import Link from "next/link";
import AnimatedButton from "./AnimatedButton";
import { FaArrowRightLong } from "react-icons/fa6";

const navLinks = ["Home", "About", "Services", "Pricing", "Contact"];

export default function ContactSection() {
  return (

    <div className="bg-white">
      <section className="bg-[var(--color-text-secondary)] relative flex flex-col px-8 md:px-20 pt-10 pb-5 md:pt-16 md:pt-8 gap-10 md:gap-16">

        {/* ── Main Body ──────────────────────────────────────────── */}
        <div className="flex flex-col md:flex-row justify-between">

          {/* LEFT COLUMN */}
          <div className="flex flex-col w-full md:w-auto">

            {/*
              Image — negative top margin pulls it UP above the dark section,
              overlapping the white area above. Adjust -mt-XX to taste.
            */}
            <div className="w-[260px] sm:w-[300px] md:w-[330px] overflow-hidden flex-shrink-0 -mt-16 md:-mt-40 relative z-10">
              <img
                src="/footer.svg"
                alt="Professional woman smiling at a desk"
                className="w-full h-auto object-cover object-top rounded-3xl shadow-2xl"
                style={{ aspectRatio: "3/4" }}
              />
            </div>

            {/* Headline + CTA */}
            <div className=" pt-6 pb-6 flex flex-col gap-5">
              <h2
                className="text-[var(--color-white)] text-[2.6rem] sm:text-5xl md:text-[3.2rem] leading-[1.1] tracking-wide font-harmonie"
  
              >
                Let&apos;s Discuss Brands.
              </h2>
                <button className="group flex items-center gap-4 bg-transparent cursor-pointer overflow-hidden">
                  {/* Circle and Capsule Container */}
                  <div className="relative flex items-center justify-center w-16 h-16">
                    {/* Dark Capsule Background - Remains Static */}
                    <div className="absolute w-10 h-16 bg-[var(--color-secondary)] rounded-full" />
                    
                    {/* Orange Circle Container with Sliding Arrow */}
                    <div className="absolute z-10 flex items-center justify-center w-12 h-12 ml-6 bg-[var(--color-primary)] rounded-full shadow-lg overflow-hidden">
                      {/* Initial Arrow (Sliding Right) */}
                      <FaArrowRightLong className="absolute w-5 h-5 text-white transition-all duration-500 ease-in-out group-hover:translate-x-12 group-hover:opacity-0" />
                      {/* New Arrow (Entering from Left) */}
                      <FaArrowRightLong className="absolute w-5 h-5 text-white -translate-x-12 opacity-0 transition-all duration-500 ease-in-out group-hover:translate-x-0 group-hover:opacity-100" />
                    </div>
                  </div>
                
                  {/* Text Container with Sliding Logic */}
                  <div className="relative h-8 overflow-hidden flex items-center">
                    {/* Initial Text (Sliding Right) */}
                    <span className="text-[var(--color-white)] text-xl font-semibold tracking-tight transition-all duration-500 ease-in-out group-hover:translate-x-full group-hover:opacity-0">
                      Contact
                    </span>
                    {/* New Text (Entering from Left) */}
                    <span className="absolute text-[var(--color-primary)] text-xl font-semibold tracking-tight -translate-x-full opacity-0 transition-all duration-500 ease-in-out group-hover:translate-x-0 group-hover:opacity-100">
                      Contact
                    </span>
                  </div>
                </button>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="flex flex-col items-start md:items-end justify-between pt-6 pb-6 gap-10 md:gap-0">
            {/* Nav */}
            <nav className="flex flex-col items-start md:items-end gap-[3px]">
              {navLinks.map((link) => (
                <Link
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-[var(--color-white)] text-lg font-normal tracking-wide hover:text-[var(--color-primary)] font-pogania transition-colors duration-200"
                >
                  {link}
                </Link>
              ))}
            </nav>

            {/* Contact info */}
            <div className="flex flex-col items-start md:items-end gap-0.5 font-pogania">
              <a
                href="tel:0390019762"
                className="text-[var(--color-primary)] text-xl md:text-2xl font-medium tracking-wide hover:opacity-75 transition-opacity"
              >
                03 9001 9762
              </a>
              <p className="text-[var(--color-primary)] text-xl md:text-2xl font-medium tracking-wide md:text-right">
                PO Box 492,
              </p>
              <p className="text-[var(--color-primary)] text-xl md:text-2xl font-medium tracking-wide md:text-right">
                Hawthorn VIC 3122.
              </p>
            </div>
          </div>
        </div>

        {/* ── Footer Bar ─────────────────────────────────────────── */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between px-8 md:px-10 py-4 border-t border-white/[0.08] gap-3 sm:gap-0">
          <p className="text-[var(--color-white)] text-xs font-light tracking-wide">
            © 2026 All rights reserved.
          </p>
          <div className="flex items-center gap-7">
            <Link
              href="#privacy"
              className="text-[var(--color-white)] text-xs font-light tracking-wide hover:text-[var(--color-primary)] transition-colors duration-200"
            >
              Privacy Policy
            </Link>
            <Link
              href="#cookies"
              className="text-[var(--color-white)] text-xs font-light tracking-wide hover:text-[var(--color-primary)] transition-colors duration-200"
            >
              Cookies
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}