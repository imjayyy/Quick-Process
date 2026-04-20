import React from "react";

const stats = [
  {
    value: "23y",
    label: "Experience",
  },
  {
    value: "4.8+",
    label: "Customer Rate",
  },
  {
    value: "90+",
    label: "Project Done",
  },
];

export default function StatsSection() {
  return (
    <section className="w-full flex flex-wrap justify-between items-center gap-12 md:gap-24 pt-36 pb-28 md:px-22 px-5">
      {stats.map((stat) => (
        // Changed to a horizontal flex layout with a gap
        <div key={stat.label} className="flex items-center gap-4">
          {/* Reduced circle size from w-56/h-56 to w-36/h-36 for correct visual proportion */}
          <div className="w-64 h-64 rounded-full bg-[var(--color-container)] flex items-center justify-end shrink-0 overflow-hidden">
            <span className="text-[7rem] font-sans font-normal text-[var(--color-text-primary)] font-harmonie">
              {stat.value}
            </span>
          </div>
          {/* Removed mt-2 as it sits horizontally now */}
          <span className="text-lg font-semibold text-[var(--color-orange)] ">
            {stat.label}
          </span>
        </div>
      ))}
    </section>
  );
}