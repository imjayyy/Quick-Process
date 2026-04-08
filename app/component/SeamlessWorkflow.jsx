import React from "react";
import Image from "next/image";

const workflowSteps = [
  {
    id: 1,
    title: "1. Submit Your Design",
    desc: "Upload your artwork or collaborate with our design team.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "2. Customize Your Order",
    desc: "Choose specifications including size, material, and finishes.",
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "3. Precision Printing",
    desc: "We produce your order using advanced printing technology and strict quality control.",
    image: "https://images.unsplash.com/photo-1629904853716-f0bc54eea481?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "4. Secure Delivery",
    desc: "Your order is carefully packed and delivered on time.",
    image: "https://images.unsplash.com/photo-1607006411021-f15564881518?q=80&w=1000&auto=format&fit=crop",
  },
];

export default function SeamlessWorkflow() {
  return (
    <section className="w-full bg-[var(--color-creme)] py-20 md:py-32">
      {/* Container: items-start zaroori hai taake sticky effect kaam kare */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col-reverse lg:flex-row items-start relative">
        
        {/* =========================================
            LEFT COLUMN: Static Flow (Scrolls normally)
            ========================================= */}
        {/* lg:pt-40 lagaya hai taake cards right text se neechay se start hon */}
        <div className="w-full lg:w-1/2 flex flex-col gap-12 lg:pt-40 lg:pr-16 relative z-10">
          {workflowSteps.map((step, index) => {
            const isLast = index === workflowSteps.length - 1;

            return (
              // Cards ke darmiyan gap (mb-32)
              <div key={step.id} className={`flex flex-col w-full max-w-md relative ${!isLast ? "mb-32" : ""}`}>
                
                {/* Image */}
                <div className="w-full h-36 md:h-[150px] relative rounded-[20px] overflow-hidden shadow-md group">
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
                  <h3 className="text-xl md:text-2xl font-semibold text-[var(--color-grey-dark)] tracking-tight mb-2">
                    {step.title}
                  </h3>
                  <p className="text-[15px] font-medium text-[var(--color-grey-medium)] leading-relaxed max-w-[320px]">
                    {step.desc}
                  </p>
                </div>

                {/* Gap Line: Sirf gaps ke darmiyan */}
                {!isLast && (
                  <div className="hidden lg:block absolute top-[100%] right-0 w-[1.5px] h-32 bg-[#CCC5B9]/60" />
                )}
              </div>
            );
          })}
        </div>

        {/* =========================================
            RIGHT COLUMN: Sticky Header (Stops & stays)
            ========================================= */}
        {/* lg:sticky aur lg:top-32 se ye yahan rukk jayega jab aap scroll karenge */}
        <div className="w-full lg:w-1/2 lg:sticky lg:top-32 lg:pl-12 z-20 mb-16 lg:mb-0">
          
          <h2 className="text-5xl md:text-[72px] font-serif font-medium text-[var(--color-grey-dark)] tracking-tight leading-[1.05] mb-6">
            Seamless Workflow
          </h2>
          
          <p className="text-[17px] font-medium text-[var(--color-orange)] leading-relaxed max-w-md mb-10">
            High-quality printing and packaging solutions designed to strengthen your brand identity and leave a lasting impression.
          </p>

          <button className="flex items-center gap-3 bg-[var(--color-grey-medium)] text-[var(--color-white)] pl-2 pr-6 py-2 rounded-full font-semibold text-[15px] shadow-md hover:shadow-xl hover:bg-[var(--color-grey-dark)] transition duration-300">
            <span className="flex justify-center items-center w-8 h-8 bg-[var(--color-orange)] rounded-full text-[var(--color-white)] text-lg leading-none">
              →
            </span>
            <span className="leading-tight pt-0.5">Learn More</span>
          </button>

        </div>

      </div>
    </section>
  );
}