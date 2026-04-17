import Link from "next/link";

const navLinks = ["Home", "About", "Services", "Pricing", "Contact"];

export default function ContactSection() {
  return (

    <div className="bg-white">
      <section className="bg-[var(--color-grey-dark)] relative flex flex-col px-8 md:px-20 pt-10 pb-5 md:pt-16 md:pt-8 gap-10 md:gap-16">

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
                className="text-[var(--color-white)] text-[2.6rem] sm:text-5xl md:text-[3.2rem] leading-[1.1] tracking-tight"
                style={{
                  fontFamily: "'Georgia', 'Times New Roman', serif",
                  fontStyle: "italic",
                }}
              >
                Let&apos;s Discuss Brands.
              </h2>

              <Link href="#contact" className="flex items-center gap-3 group w-fit">
                <span className="w-10 h-10 rounded-full bg-[var(--color-orange)] flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-md flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>
                <span className="text-[var(--color-white)] text-sm tracking-widest font-light uppercase">
                  Contact
                </span>
              </Link>
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
                  className="text-[var(--color-white)] text-lg font-normal tracking-wide hover:text-white transition-colors duration-200"
                >
                  {link}
                </Link>
              ))}
            </nav>

            {/* Contact info */}
            <div className="flex flex-col items-start md:items-end gap-0.5">
              <a
                href="tel:0390019762"
                className="text-[var(--color-orange)] text-xl md:text-2xl font-medium tracking-wide hover:opacity-75 transition-opacity"
              >
                03 9001 9762
              </a>
              <p className="text-[var(--color-orange)] text-xl md:text-2xl font-medium tracking-wide md:text-right">
                PO Box 492,
              </p>
              <p className="text-[var(--color-orange)] text-xl md:text-2xl font-medium tracking-wide md:text-right">
                Hawthorn VIC 3122.
              </p>
            </div>
          </div>
        </div>

        {/* ── Footer Bar ─────────────────────────────────────────── */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between px-8 md:px-10 py-4 border-t border-white/[0.08] gap-3 sm:gap-0">
          <p className="text-[var(--color-grey-light)] text-xs font-light tracking-wide">
            © 2026 All rights reserved.
          </p>
          <div className="flex items-center gap-7">
            <Link
              href="#privacy"
              className="text-[var(--color-grey-light)] text-xs font-light tracking-wide hover:text-white transition-colors duration-200"
            >
              Privacy Policy
            </Link>
            <Link
              href="#cookies"
              className="text-[var(--color-grey-light)] text-xs font-light tracking-wide hover:text-white transition-colors duration-200"
            >
              Cookies
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}