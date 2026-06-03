import Image from "next/image";
import Link from "next/link";

const certs = [
  { id: 1, file: "/certificate_1.png", label: "Tax Registration Certificate" },
  { id: 2, file: "/certificate_2.png", label: "Declaration of Keeper of Press" },
];

export const metadata = {
  title: "Certificates — Quick Process",
  description: "Official certifications of Quick Process Printing & Packaging.",
};

export default function CertificatesPage() {
  return (
    <main className="relative min-h-screen -mt-12 pt-28 pb-20 md:pt-32 md:pb-28 overflow-hidden bg-[#f0f2fa]">

      {/* Blur circles */}
      <div className="pointer-events-none absolute -top-40 -left-40 w-[520px] h-[520px] rounded-full bg-[#5B6FE8] opacity-40 blur-[130px]" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 w-[520px] h-[520px] rounded-full bg-[#5B6FE8] opacity-40 blur-[130px]" />
      <div className="pointer-events-none absolute bottom-10 left-[15%] w-[240px] h-[240px] rounded-full bg-[#8B5CF6] opacity-35 blur-[90px]" />

      <div className="relative max-w-[1100px] mx-auto px-4 sm:px-6 md:px-8">
        <div className="backdrop-blur-md bg-white/75 border border-white/60 rounded-3xl md:rounded-[2.5rem] shadow-2xl px-6 sm:px-10 md:px-16 py-10 md:py-16">

          {/* Back link */}
          <div className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-pogania text-[#1a1a2e]/50 hover:text-[#5B6FE8] transition-colors duration-300"
            >
              ← Back to Home
            </Link>
          </div>

          {/* Heading */}
          <div className="text-center mb-10 md:mb-14">
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-serif font-normal text-[var(--color-text-secondary)] font-harmonie tracking-wider mb-4">
              CERTIFICATE
            </h2>
        <p className="text-sm sm:text-base md:text-lg font-medium text-[var(--color-primary)] leading-relaxed font-pogania tracking-tight">
              Trusted &amp; Verified
            </p>
          </div>

          {/* Certificates */}
          <div className="flex flex-col sm:flex-row gap-6 md:gap-10 items-start justify-center">
            {certs.map((cert) => (
              <div key={cert.id} className="flex-1 flex flex-col items-center gap-3">
                <div className="w-full rounded-xl md:rounded-2xl overflow-hidden shadow-[0_8px_40px_rgba(91,111,232,0.18)] border border-white/80">
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
              </div>
            ))}
          </div>

        </div>
      </div>
    </main>
  );
}
