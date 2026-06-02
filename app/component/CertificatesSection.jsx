"use client";
import React, { useState } from "react";
import Image from "next/image";

const certs = [
  { id: 1, file: "/certificate_1.png", label: "Tax Registration Certificate" },
  { id: 2, file: "/certificate_2.png", label: "Declaration of Keeper of Press" },
];

export default function CertificatesSection() {
  const [active, setActive] = useState(null);

  return (
    <section className="relative w-full py-16 md:py-24 overflow-hidden bg-[#f0f2fa] mb-10">
      <div className="pointer-events-none absolute -top-40 -left-40 w-[400px] h-[400px] md:w-[520px] md:h-[520px] rounded-full bg-[#EBF7F8] opacity-40 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 w-[400px] h-[400px] md:w-[520px] md:h-[520px] rounded-full bg-[#e1f8fa] opacity-40 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-10 left-[15%] w-[180px] h-[180px] md:w-[240px] md:h-[240px] rounded-full bg-[#8B5CF6] opacity-35 blur-[90px]" />
      <div className="relative max-w-[1100px] mx-auto px-4 sm:px-6 md:px-8">
        <div className="backdrop-blur-md bg-white/60 border border-white/60 rounded-3xl md:rounded-[2.5rem] shadow-2xl px-6 sm:px-10 md:px-16 py-10 md:py-16">
          <div className="text-center mb-8 md:mb-10">
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-serif font-normal text-[var(--color-text-secondary)] font-harmonie tracking-wider mb-2">
              CERTIFICATE
            </h2>
        <p className="text-sm sm:text-base md:text-lg font-medium text-[var(--color-primary)]  leading-relaxed font-pogania tracking-tight">
              Trusted &amp; Verified
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 md:gap-10 items-stretch justify-center">
            {certs.map((cert) => (
              <button
                key={cert.id}
                className="flex-1 flex flex-col items-center gap-3 cursor-pointer group text-left"
                onClick={() => setActive(cert)} >
                <div className="w-full relative rounded-xl md:rounded-2xl overflow-hidden shadow-[0_8px_40px_rgba(91,111,232,0.18)] border border-white/80 transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-[0_16px_50px_rgba(91,111,232,0.30)]">
                  <Image
                    src={cert.file}
                    alt={cert.label}
                    width={520}
                    height={680}
                    className="w-full h-auto object-contain"
                    unoptimized
                  />
                </div>
                <span className="text-xs sm:text-sm font-pogania text-[#1a1a2e]/55 tracking-wide text-center">
                  {cert.label}
                </span>
              </button>
            ))}
          </div>

        </div>
      </div>

      {active && (
        <div
          className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 md:p-10"
          onClick={() => setActive(null)}>
          <div
            className="relative w-full max-w-2xl max-h-[90vh] bg-white rounded-2xl overflow-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}>
            <Image
              src={active.file}
              alt={active.label}
              width={800}
              height={1000}
              className="w-full h-auto"
              unoptimized
            />
            <button
              onClick={() => setActive(null)}
              className="absolute top-3 right-3 w-9 h-9 rounded-full bg-[#1a1a2e]/70 text-white text-xl flex items-center justify-center hover:bg-[#5B6FE8] transition-colors"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
