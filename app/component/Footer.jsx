import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

const navLinks = ["Home", "About", "Services", "Pricing", "Contact"];

export default function ContactSection() {
  return (
    <div className="bg-white">
      <section className="bg-[var(--color-text-secondary)] relative flex flex-col px-5 sm:px-8 md:px-20 pt-10 md:pt-16 pb-8 gap-12 md:gap-16">

        {/* MAIN */}
        <div className="flex flex-col md:flex-row justify-between gap-8 lg:gap-12 md:gap-0">

          {/* LEFT */}
          <div className="flex flex-col w-full md:w-auto items-center md:items-start text-center md:text-left">

            {/* IMAGE */}
            <div className="w-[220px] sm:w-[260px] lg:w-[330px] overflow-hidden flex-shrink-0 -mt-26 md:-mt-42 relative z-10">
              <img
                src="/footer.png"
                alt="Professional woman smiling at a desk"
                className="w-full h-auto object-cover object-top rounded-3xl shadow-2xl"
                style={{ aspectRatio: "3/3.5" }}
              />
            </div>

            {/* TEXT */}
            <div className="pt-6 pb-6 flex flex-col gap-5 items-center md:items-start">

              <h2 className="text-[var(--color-white)] text-3xl sm:text-4xl md:text-[3.2rem] leading-[1.1] tracking-wide font-harmonie">
                Let&apos;s Discuss Brands.
              </h2>

              {/* BUTTON */}
              <button className="group flex items-center gap-4 cursor-pointer">

                <div className="relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16">
                  <div className="absolute w-8 sm:w-10 h-14 sm:h-16 bg-[var(--color-secondary)] rounded-full" />

                  <div className="absolute z-10 flex items-center justify-center w-10 sm:w-12 h-10 sm:h-12 ml-4 sm:ml-6 bg-[var(--color-primary)] rounded-full shadow-lg overflow-hidden">
                    <FaArrowRightLong className="absolute w-4 sm:w-5 h-4 sm:h-5 text-white transition-all duration-500 group-hover:translate-x-10 group-hover:opacity-0" />
                    <FaArrowRightLong className="absolute w-4 sm:w-5 h-4 sm:h-5 text-white -translate-x-10 opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100" />
                  </div>
                </div>

                <div className="relative h-8 overflow-hidden flex items-center">
                  <span className="text-[var(--color-white)] text-lg sm:text-xl font-semibold transition-all duration-500 group-hover:translate-x-full group-hover:opacity-0">
                    Contact
                  </span>

                  <span className="absolute text-[var(--color-primary)] text-lg sm:text-xl font-semibold -translate-x-full opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100">
                    Contact
                  </span>
                </div>

              </button>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex flex-col items-center md:items-end justify-between gap-10 md:gap-0 w-full md:w-auto text-center md:text-right">

            {/* NAV */}
            <nav className="flex flex-col items-center md:items-end gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-[var(--color-white)] text-base sm:text-lg hover:text-[var(--color-primary)] transition-colors"
                >
                  {link}
                </Link>
              ))}
            </nav>

            {/* CONTACT */}
            <div className="flex flex-col items-center md:items-end gap-1 font-pogania">
              <a
                href="tel:0390019762"
                className="text-[var(--color-primary)] text-lg sm:text-xl md:text-2xl font-medium"
              >
                03 9001 9762
              </a>
              <p className="text-[var(--color-primary)] text-lg sm:text-xl md:text-2xl font-medium">
                PO Box 492,
              </p>
              <p className="text-[var(--color-primary)] text-lg sm:text-xl md:text-2xl font-medium">
                Hawthorn VIC 3122.
              </p>
            </div>

          </div>
        </div>

        {/* FOOTER */}
        <div className="flex flex-col flex-row items-center justify-between py-4 border-t border-white/[0.08] gap-3 sm:gap-0 text-center sm:text-left">

          <p className="text-[var(--color-white)] text-sm font-light">
            © 2026 All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <Link href="#privacy" className="text-[var(--color-white)] text-sm hover:text-[var(--color-primary)]">
              Privacy Policy
            </Link>
            <Link href="#cookies" className="text-[var(--color-white)] text-sm hover:text-[var(--color-primary)]">
              Cookies
            </Link>
          </div>

        </div>

      </section>
    </div>
  );
} 