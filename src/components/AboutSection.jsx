// src/components/AboutSection.jsx
import React, { useEffect, useState } from "react";

const rawStats = [
  { label: "Happy Customers", value: 25, unit: "K+", decimals: 0 },
  { label: "Daily Orders", value: 2.1, unit: "K+", decimals: 1 },
  { label: "Partner Farms", value: 120, unit: "+", decimals: 0 },
];

const AboutSection = () => {
  const [animatedValues, setAnimatedValues] = useState(
    rawStats.map(() => 0)
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  // simple mount animation for numbers
  useEffect(() => {
    const duration = 1200; // ms
    const fps = 60;
    const intervalTime = 1000 / fps;
    const totalSteps = Math.round(duration / intervalTime);
    let step = 0;

    const interval = setInterval(() => {
      step += 1;
      setAnimatedValues(() =>
        rawStats.map((item) => {
          const target = item.value;
          const progress = Math.min(step / totalSteps, 1);
          return target * progress;
        })
      );

      if (step >= totalSteps) {
        clearInterval(interval);
      }
    }, intervalTime);

    return () => clearInterval(interval);
  }, []);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      {/* MAIN ABOUT SECTION */}
      <section
        id="about"
        className="relative bg-white py-14 sm:py-16 lg:py-20 border-t border-gray-100"
      >
        {/* top gradient line */}
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-emerald-400/60 via-lime-400/60 to-emerald-400/60" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* LEFT: text */}
          <div>
            {/* small pill heading (like ShopSection) */}
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-green-50 border border-green-200">
              <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-green-700">
                About GreenBasket
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
              Built for Busy Homes & Healthy Habits
            </h2>

            <p className="text-sm sm:text-base text-gray-600 mb-4">
              GreenBasket helps you skip traffic, long queues, and last-minute
              store runs. We work closely with local farmers, trusted suppliers,
              and quality check teams to deliver only the best to your kitchen.
            </p>
            <p className="text-sm sm:text-base text-gray-600 mb-6">
              From fresh produce and dairy to pantry essentials and curated
              combos, our mission is to make grocery shopping simple, reliable,
              and joyful for every family.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={openModal}
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-emerald-600 text-white text-sm font-semibold hover:bg-emerald-700 shadow-md hover:shadow-lg transition"
              >
                Learn more about us
              </button>
              <button
                onClick={openModal}
                className="inline-flex items-center justify-center px-4 py-2.5 rounded-xl border border-emerald-200 text-sm font-semibold text-emerald-700 bg-emerald-50/60 hover:bg-emerald-100 transition"
              >
                View our story →
              </button>
            </div>
          </div>

          {/* RIGHT: stats card */}
          <div className="relative">
            <div className="rounded-3xl bg-gradient-to-br from-emerald-50 via-white to-lime-50 p-5 sm:p-6 shadow-[0_20px_60px_rgba(15,23,42,0.12)]">
              <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-4">
                {rawStats.map((item, idx) => {
                  const current = animatedValues[idx] ?? 0;
                  const formatted = `${current.toFixed(item.decimals)}${
                    item.unit
                  }`;

                  return (
                    <div
                      key={item.label}
                      className="rounded-2xl border border-emerald-100 bg-white/80 px-3 py-3 sm:px-4 sm:py-4 shadow-sm hover:-translate-y-1 hover:shadow-md transition-transform duration-200"
                    >
                      <p className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight animate-about-stat">
                        {formatted}
                      </p>
                      <p className="mt-1 text-[10px] sm:text-[11px] md:text-xs text-gray-500 uppercase tracking-[0.16em]">
                        {item.label}
                      </p>
                    </div>
                  );
                })}
              </div>

              <div className="rounded-2xl border border-dashed border-emerald-200 bg-emerald-50/60 px-4 py-3 text-xs sm:text-sm text-gray-700">
                “Our promise is freshness, fairness and on-time delivery – every
                single order. We want every GreenBasket box that reaches your
                doorstep to feel carefully packed, fresh, and full of trust.”
              </div>
            </div>

            {/* small glow behind card */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-6 -bottom-4 h-10 rounded-full bg-emerald-300/30 blur-2xl"
            />
          </div>
        </div>

        {/* small CSS for number pulse */}
        <style>{`
          @keyframes aboutStatPulse {
            0% { transform: translateY(0); }
            40% { transform: translateY(-2px); }
            100% { transform: translateY(0); }
          }
          .animate-about-stat {
            animation: aboutStatPulse 1.4s ease-out;
          }
        `}</style>
      </section>

      {/* MODAL POPUP — About GreenBasket details */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4 sm:px-6"
          aria-modal="true"
          role="dialog"
          onClick={closeModal}
        >
          <div
            className="relative w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden animate-about-modal"
            onClick={(e) => e.stopPropagation()} // prevent close when clicking inside
          >
            {/* modal header */}
            <div className="flex items-center justify-between px-4 sm:px-6 py-3 border-b border-gray-100 bg-gradient-to-r from-emerald-50 via-white to-lime-50">
              <div>
                <p className="text-[11px] sm:text-xs uppercase tracking-[0.2em] text-emerald-500">
                  About GreenBasket
                </p>
                <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-900">
                  Built for Busy Homes & Healthy Habits
                </h3>
              </div>
              <button
                onClick={closeModal}
                className="h-8 w-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 text-sm"
                aria-label="Close About GreenBasket dialog"
              >
                ✕
              </button>
            </div>

            {/* modal content */}
            <div className="px-4 sm:px-6 py-5 sm:py-6 max-h-[80vh] overflow-y-auto">
              <div className="grid md:grid-cols-2 gap-6 lg:gap-10 items-start">
                {/* LEFT: full text content (top to bottom) */}
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-2">
                    About GreenBasket
                  </h4>
                  <p className="text-sm sm:text-base text-gray-600 mb-3">
                    GreenBasket helps you skip traffic, long queues, and
                    last-minute store runs. We work closely with local farmers,
                    trusted suppliers, and dedicated quality check teams to
                    deliver only the best to your kitchen.
                  </p>
                  <p className="text-sm sm:text-base text-gray-600 mb-3">
                    From fresh produce and dairy to pantry essentials and
                    curated combos, our mission is to make grocery shopping
                    simple, reliable, and joyful for every family. Whether
                    you’re stocking up for the week or grabbing a quick basket
                    for tonight’s dinner, we’re here to support your routine.
                  </p>
                  <p className="text-sm sm:text-base text-gray-600 mb-4">
                    We believe in transparent sourcing, fair pricing, and
                    on-time delivery. Every GreenBasket order is a small promise
                    from our team to your home.
                  </p>

                  <div className="flex flex-wrap gap-3 mt-1">
                    <button
                      onClick={closeModal}
                      className="inline-flex items-center justify-center px-4 py-2.5 rounded-xl bg-emerald-600 text-white text-xs sm:text-sm font-semibold hover:bg-emerald-700 shadow-md hover:shadow-lg transition"
                    >
                      Learn more about us
                    </button>
                    <button
                      onClick={closeModal}
                      className="inline-flex items-center justify-center px-3.5 py-2.5 rounded-xl border border-emerald-200 text-xs sm:text-sm font-semibold text-emerald-700 bg-emerald-50/60 hover:bg-emerald-100 transition"
                    >
                      View our story →
                    </button>
                  </div>
                </div>

                {/* RIGHT: stats + quote (same as main, top-to-bottom) */}
                <div>
                  <div className="rounded-3xl bg-gradient-to-br from-emerald-50 via-white to-lime-50 p-4 sm:p-5 shadow-[0_18px_50px_rgba(15,23,42,0.16)]">
                    <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-4">
                      {rawStats.map((item, idx) => {
                        const current = animatedValues[idx] ?? 0;
                        const formatted = `${current.toFixed(
                          item.decimals
                        )}${item.unit}`;

                        return (
                          <div
                            key={item.label}
                            className="rounded-2xl border border-emerald-100 bg-white/80 px-3 py-3 sm:px-3.5 sm:py-3.5 shadow-sm hover:-translate-y-1 hover:shadow-md transition-transform duration-200"
                          >
                            <p className="text-lg sm:text-xl md:text-2xl font-extrabold text-gray-900 tracking-tight animate-about-stat">
                              {formatted}
                            </p>
                            <p className="mt-1 text-[9px] sm:text-[10px] md:text-[11px] text-gray-500 uppercase tracking-[0.16em]">
                              {item.label}
                            </p>
                          </div>
                        );
                      })}
                    </div>

                    <div className="rounded-2xl border border-dashed border-emerald-200 bg-emerald-50 px-3.5 py-3 sm:px-4 sm:py-3.5 text-xs sm:text-sm text-gray-700 relative overflow-hidden">
                      <div className="absolute -top-6 -left-6 h-16 w-16 rounded-full bg-emerald-200/40 blur-xl pointer-events-none" />
                      <div className="relative">
                        <p className="font-medium text-gray-800 mb-1">
                          “Our promise is freshness, fairness and on-time
                          delivery – every single order.”
                        </p>
                        <p className="text-[11px] sm:text-xs text-gray-600">
                          From the farm to your doorstep, we carefully handle
                          each step so you can shop with confidence and enjoy
                          more time with your family.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* small bottom decorative bar */}
            <div className="h-1 w-full bg-gradient-to-r from-emerald-400 via-lime-400 to-emerald-400" />
          </div>

          {/* modal animation css */}
          <style>{`
            @keyframes aboutModalIn {
              0% { opacity: 0; transform: translateY(18px) scale(0.98); }
              100% { opacity: 1; transform: translateY(0) scale(1); }
            }
            .animate-about-modal {
              animation: aboutModalIn 0.25s ease-out;
            }
          `}</style>
        </div>
      )}
    </>
  );
};

export default AboutSection;
