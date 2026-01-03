import React from "react";
import { motion } from "framer-motion";



const items = [
  { label: "Fresh Groceries", icon: "✔" },
  { label: "Daily Needs", icon: "🛒" },
  { label: "Pantry Essentials", icon: "🥫" },
  { label: "Healthy Living", icon: "🥬" },
  { label: "Quick Delivery", icon: "⚡" },
  { label: "Best Prices", icon: "💲" },
  { label: "Secure Payments", icon: "🔒" },
];

export default function InfoBar() {
  // Motion transition for continuous left-to-right (we animate x negatively to move left)
  const transition = {
    x: {
      repeat: Infinity,
      repeatType: "loop",
      duration: 28,         // slow — change to 18 / 35 to speed/slow
      ease: "linear",
    },
  };

  return (
    <section className="bg-gradient-to-r from-green-600 to-emerald-600 text-white py-3 shadow-sm select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* outer container hides overflow, inner motion div moves horizontally */}
        <div
          className="relative"
          role="status"
          aria-label="Site features and quick info"
        >
          <motion.div
            className="flex items-center gap-8 whitespace-nowrap"
            // animate x from 0 to -50% to scroll; we duplicate content to loop seamlessly
            animate={{ x: ["0%", "-50%"] }}
            transition={transition}
            style={{ willChange: "transform" }}
          >
            {/* render the row twice so the end flows into the start */}
            {[0, 1].map((rep) => (
              <div
                key={rep}
                className="flex items-center gap-6 pr-10"
                aria-hidden={rep === 1 ? "true" : "false"}
              >
                {items.map((it) => (
                  <div
                    key={it.label + rep}
                    className="flex items-center gap-2 bg-white/6 px-3 py-1 rounded-full shadow-sm backdrop-blur-sm"
                    style={{ minWidth: 160 }}
                  >
                    {/* Icon circle */}
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white/12 text-sm">
                      <span className="text-white text-sm">{it.icon}</span>
                    </div>

                    {/* Label */}
                    <div className="text-sm md:text-base font-medium tracking-tight">
                      {it.label}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </motion.div>

          {/* subtle left & right fade to make the edges look smooth */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-black/25 to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-black/25 to-transparent" />
        </div>
      </div>
    </section>
  );
}
