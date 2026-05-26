"use client";
import React from "react";
import Image from "next/image";
import AnimatedButton from "./AnimatedButton";
import { useContactModal } from "../context/ContactModalContext";

const workflowSteps = [
  {
    id: 1,
    title: "1. Submit Your Design",
    desc: "Upload your artwork or collaborate with our design team.",
    image: "/workflow/workflow1.png",
  },
  {
    id: 2,
    title: "2. Customize Your Order",
    desc: "Choose specifications including size, material, and finishes.",
    image: "/workflow/workflow2.png",
  },
  {
    id: 3,
    title: "3. Precision Printing",
    desc: "We produce your order using advanced offset printing technology and strict quality control.",
    image: "/workflow/workflow3.png",
  },
  {
    id: 4,
    title: "4. Secure Delivery",
    desc: "Your order is carefully packed and delivered on time.",
    image: "/workflow/workflow4.png",
  },
];

export default function SeamlessWorkflow() {
  const { openModal } = useContactModal();
  return (
    <section className="w-full bg-[var(--color-creme)] py-20 lg:py-32">
      {/* Container: items-start zaroori hai taake sticky effect kaam kare */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex flex-col-reverse lg:flex-row items-center relative">
        
        {/* =========================================
            LEFT COLUMN: Static Flow (Scrolls normally)
            ========================================= */}
        {/* lg:pt-40 lagaya hai taake cards right text se neechay se start hon */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start gap-20 lg:pt-40 lg:pr-16 relative z-10">
          {workflowSteps.map((step, index) => {
            const isLast = index === workflowSteps.length - 1;

            return (
              <div key={step.id} className={`flex flex-col w-full max-w-md relative ${!isLast ? "lg:mb-40" : ""}`}>
                
                {/* Image */}
                <div className="w-full h-36 md:h-[120px] relative rounded-[20px] overflow-hidden shadow-md group">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>

                {/* Text Content */}
                <div className="mt-6">
                  <h3 className="text-xl md:text-2xl font-light text-[var(--color-text-primary)] tracking-tight mb-2 font-pogania">
                    {step.title}
                  </h3>
                  <p className="ml-5 text-[15px] font-medium text-[var(--color-text-primary)] leading-relaxed max-w-[320px]">
                    {step.desc}
                  </p>
                </div>

                {/* Gap Line: Sirf gaps ke darmiyan */}
                {!isLast && (
                  <div className="hidden lg:block absolute top-[100%] right-0 w-[1.5px] h-45 bg-gray-500" />
                )}
              </div>
            );
          })}
        </div>

  <div className="w-full lg:w-1/2 lg:sticky lg:top-32 lg:self-start flex flex-col items-center lg:items-start mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-serif font-normal text-[var(--color-text-secondary)] font-harmonie tracking-wider mb-4">
          Seamless Workflow
        </h2>

        <p className="text-sm sm:text-base md:text-lg font-medium text-[var(--color-primary)] max-w-xl leading-relaxed font-pogania tracking-tight text-center md:text-left">
        High-quality offset printing and packaging solutions designed to
    strengthen your brand identity and leave a lasting impression.
        </p>

         <div className="mt-8 w-fit">
    <AnimatedButton text="Get Started" onClick={openModal} />
  </div>
      </div>

      </div>
    </section>
  );
}