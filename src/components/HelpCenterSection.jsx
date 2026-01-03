// src/components/HelpCenterSection.jsx
import React from "react";

const helpTiles = [
  {
    title: "Video Help Center",
    desc: "Watch short videos on ordering, coupons, and tracking.",
    href: "#videos",
    badge: "Quick Tutorials",
  },
  {
    title: "Chat & Support",
    desc: "Need help with an order? Reach out to our support team.",
    href: "#contact",
    badge: "Live Assistance",
  },
  {
    title: "FAQ & Policies",
    desc: "Read our delivery, refund, and payment related FAQs.",
    href: "#faq",
    badge: "Instant Answers",
  },
];

const HelpCenterSection = () => {
  return (
    <section
      id="help"
      className="relative bg-white py-14 sm:py-16 lg:py-20 border-t border-gray-100 overflow-hidden"
    >
      {/* soft blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-0 h-64 w-64 rounded-full bg-emerald-100 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-lime-100 blur-3xl"
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-green-50 border border-green-200">
            <span
              aria-hidden="true"
              className="h-2 w-2 animate-ping rounded-full bg-green-500"
            />
            <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-green-700">
              Help & Support
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-2">
            Help Center
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
            Choose how you’d like to get help with GreenBasket — videos,
            instant chat, or a quick look through FAQs and policies.
          </p>
        </div>

        {/* 3-Way Slide-in Layout */}
        <div className="grid md:grid-cols-3 gap-4 sm:gap-6 items-stretch">
          {helpTiles.map((t, index) => {
            const animationClass =
              index === 0
                ? "animate-help-left"
                : index === 1
                ? "animate-help-up"
                : "animate-help-right";

            const accentIcon =
              index === 0 ? (
                // play icon
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              ) : index === 1 ? (
                // chat icon
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden
                >
                  <path
                    strokeWidth={1.8}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7 8h10M7 12h6m-9 7l2.5-2.5H18a3 3 0 003-3V7a3 3 0 00-3-3H6a3 3 0 00-3 3v9a3 3 0 003 3z"
                  />
                </svg>
              ) : (
                // document icon
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden
                >
                  <path
                    strokeWidth={1.8}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12h6M9 16h3M8 4h5l5 5v9a2 2 0 01-2 2H8a2 2 0 01-2-2V6a2 2 0 012-2z"
                  />
                </svg>
              );

            return (
              <a
                key={t.title}
                href={t.href}
                className={`group relative rounded-3xl bg-gray-50/90 border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-300 p-4 sm:p-5 flex flex-col overflow-hidden ${animationClass}`}
              >
                {/* gradient hover overlay */}
                <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-emerald-50 via-transparent to-lime-50" />

                {/* floating accent circle */}
                <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-emerald-100/60 blur-xl group-hover:bg-emerald-200/70 transition-colors" />

                <div className="relative flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="h-9 w-9 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600 shadow-sm group-hover:bg-emerald-600 group-hover:text-white transition-all">
                      {accentIcon}
                    </div>
                    <div className="hidden sm:block">
                      <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.18em] text-emerald-600">
                        {t.badge}
                      </p>
                    </div>
                  </div>
                  <span className="hidden sm:inline-flex items-center justify-center h-7 px-3 rounded-full bg-white/80 border border-emerald-100 text-[10px] font-semibold text-emerald-700 group-hover:border-emerald-300">
                    Go to section
                  </span>
                </div>

                <h3 className="relative text-sm sm:text-base font-semibold text-gray-900 mb-2 group-hover:text-emerald-700 transition-colors">
                  {t.title}
                </h3>

                <p className="relative text-xs sm:text-sm text-gray-500 mb-3 flex-1 leading-relaxed">
                  {t.desc}
                </p>

                <div className="relative mt-auto flex items-center justify-between pt-2 border-t border-dashed border-gray-200">
                  <span className="text-[11px] sm:text-xs font-semibold text-emerald-700 group-hover:text-emerald-900 inline-flex items-center gap-1">
                    Go to section
                    <span className="inline-block transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </span>
                  <span className="hidden md:inline-flex h-6 items-center gap-1 rounded-full bg-white/80 px-2.5 text-[10px] text-gray-500">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Available 24/7</span>
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      </div>

      {/* animation keyframes */}
      <style>{`
        @keyframes helpSlideInLeft {
          0% { opacity: 0; transform: translateX(-32px) translateY(12px) scale(0.96); }
          100% { opacity: 1; transform: translateX(0) translateY(0) scale(1); }
        }
        @keyframes helpSlideInUp {
          0% { opacity: 0; transform: translateY(28px) scale(0.96); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes helpSlideInRight {
          0% { opacity: 0; transform: translateX(32px) translateY(12px) scale(0.96); }
          100% { opacity: 1; transform: translateX(0) translateY(0) scale(1); }
        }

        .animate-help-left {
          animation: helpSlideInLeft 0.45s ease-out 0.05s both;
        }
        .animate-help-up {
          animation: helpSlideInUp 0.5s ease-out 0.12s both;
        }
        .animate-help-right {
          animation: helpSlideInRight 0.55s ease-out 0.18s both;
        }
      `}</style>
    </section>
  );
};

export default HelpCenterSection;
