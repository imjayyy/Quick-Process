import React from "react";

const stats = [
  { value: "36y", label: "Experience" },
  { value: "4.8+", label: "Customer Rate" },
  { value: "90+", label: "Project Done" },
];

export default function StatsSection() {
  return (
    <section className="w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10 sm:gap-16 md:gap-22 lg:pt-36 pb-10 lg:pb-28 px-5 md:px-16">
      
      {stats.map((stat) => (
        <div key={stat.label} className="flex items-center justify-center sm:justify-start gap-4 sm:gap-6">
          
          {/* Circle */}
          <div className="w-42 h-42 md:w-48 md:h-48 lg:w-64 lg:h-64 rounded-full bg-(--color-container) flex items-center justify-end shrink-0 overflow-hidden">
            <span className="text-[4rem] md:text-[5rem] lg:text-[7rem] font-normal text-(--color-text-primary) font-harmonie">
              {stat.value}
            </span>
          </div>

          {/* Label */}
          <span className="text-sm sm:text-base md:text-lg font-semibold text-(--color-primary) text-center sm:text-left">
            {stat.label}
          </span>

        </div>
      ))}

    </section>
  );
}