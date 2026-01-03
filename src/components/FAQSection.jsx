// src/components/FAQSection.jsx
import React, { useMemo, useState } from "react";

const faqs = [
  {
    id: "timings",
    category: "Delivery",
    q: "What are your delivery timings?",
    a: "Delivery slots are available from 7AM to 9PM, depending on your location. You can choose your slot at checkout.",
  },
  {
    id: "mov",
    category: "Orders & Pricing",
    q: "Is there a minimum order value?",
    a: "Yes, minimum order value may vary by city. Orders above ₹499 often qualify for free delivery offers and special combo discounts.",
  },
  {
    id: "issue-order",
    category: "Support",
    q: "How do I report an issue with my order?",
    a: "Go to the Help Center or Order Tracking page, select your order and choose 'Report an issue'. You can raise a ticket or chat with our support team directly.",
  },
  {
    id: "payment-modes",
    category: "Payments",
    q: "What payment methods do you accept?",
    a: "You can pay using UPI, debit/credit cards, net banking and select wallet options. Cash on Delivery may be available in some areas.",
  },
  {
    id: "freshness",
    category: "Quality",
    q: "What if I receive a damaged or low-quality item?",
    a: "If any item is damaged or not fresh, you can request a replacement or refund from the Help Center within a few hours of delivery. Please share a clear photo for faster resolution.",
  },
];

const categories = ["All", "Delivery", "Orders & Pricing", "Payments", "Support", "Quality"];

const FAQSection = () => {
  const [openId, setOpenId] = useState(faqs[0]?.id || null);
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filteredFaqs = useMemo(() => {
    return faqs.filter((item) => {
      const matchCategory =
        activeCategory === "All" || item.category === activeCategory;
      const matchSearch =
        !search.trim() ||
        item.q.toLowerCase().includes(search.toLowerCase().trim()) ||
        item.a.toLowerCase().includes(search.toLowerCase().trim());
      return matchCategory && matchSearch;
    });
  }, [activeCategory, search]);

  return (
    <section
      id="faq"
      className="relative bg-gradient-to-b from-emerald-50 via-white to-emerald-50/40 py-14 sm:py-16 lg:py-20"
    >
      {/* soft accent blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-0 h-64 w-64 rounded-full bg-emerald-100 blur-3xl"
      />
      

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1.1fr,1.4fr] gap-8 lg:gap-12 items-start">
          {/* LEFT: heading + description + filters */}
          <div>
            {/* pill heading (trending style) */}
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-green-50 border border-green-200">
              <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-green-700">
                Help & FAQs
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mb-4">
              Quick answers to the most common questions about{" "}
              <span className="font-semibold">delivery timings, payments,</span>{" "}
              order issues and more. If you still need help, our support team is
              one tap away.
            </p>

            {/* small highlight card */}
            <div className="mb-5 rounded-2xl border border-emerald-100 bg-white/80 shadow-sm px-4 py-3 sm:px-5 sm:py-4">
              <p className="text-xs sm:text-sm text-gray-700 mb-1">
                💡 <span className="font-semibold">Tip:</span> Try searching with
                words like <span className="italic">“delivery”, “refund”,</span>{" "}
                or <span className="italic">“payment”.</span>
              </p>
              <p className="text-[11px] sm:text-xs text-gray-500">
                For order-specific help, use{" "}
                <a
                  href="#orders"
                  className="font-semibold text-emerald-700 hover:text-emerald-900"
                >
                  Track Your Order
                </a>{" "}
                or{" "}
                <a
                  href="#help"
                  className="font-semibold text-emerald-700 hover:text-emerald-900"
                >
                  Help Center
                </a>
                .
              </p>
            </div>

            {/* search box */}
            <div className="mb-4">
              <div className="flex items-center gap-2 rounded-2xl bg-white border border-gray-200 px-3 py-2.5 shadow-sm focus-within:border-emerald-400 focus-within:ring-1 focus-within:ring-emerald-300 transition">
                <svg
                  className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-4.35-4.35M10.5 17a6.5 6.5 0 100-13 6.5 6.5 0 000 13z"
                  />
                </svg>
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search in FAQs (e.g. delivery, refund, payment)..."
                  className="flex-1 bg-transparent text-xs sm:text-sm text-gray-800 outline-none placeholder:text-gray-400"
                />
              </div>
            </div>

            {/* category chips */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => {
                const active = cat === activeCategory;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-3 py-1.5 rounded-full text-[11px] sm:text-xs font-semibold border transition-all ${
                      active
                        ? "bg-emerald-600 text-white border-emerald-600 shadow-sm shadow-emerald-400/40"
                        : "bg-white text-gray-700 border-gray-200 hover:border-emerald-300 hover:text-emerald-700"
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>

          {/* RIGHT: accordion list */}
          <div className="space-y-3 sm:space-y-3.5 mt-4 lg:mt-0">
            {filteredFaqs.length === 0 && (
              <div className="rounded-2xl bg-white border border-dashed border-gray-200 px-4 py-3 text-xs sm:text-sm text-gray-500">
                No FAQs found for this search. Try a different keyword or reset
                the filters.
              </div>
            )}

            {filteredFaqs.map((item, index) => {
              const open = item.id === openId;
              return (
                <div
                  key={item.id}
                  className={`rounded-2xl border transition-all duration-200 shadow-sm bg-white/90 backdrop-blur-sm ${
                    open
                      ? "border-emerald-300 shadow-md"
                      : "border-gray-100 hover:border-emerald-200 hover:shadow-md"
                  }`}
                  style={{
                    animation: `faqFadeUp 0.${4 + index}s ease-out both`,
                  }}
                >
                  <button
                    type="button"
                    className="w-full flex items-center justify-between gap-3 px-4 sm:px-5 py-3.5 sm:py-4 text-left"
                    onClick={() =>
                      setOpenId((prev) => (prev === item.id ? null : item.id))
                    }
                  >
                    <div className="flex-1">
                      <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.18em] text-emerald-600 mb-1">
                        {item.category}
                      </p>
                      <p className="text-sm sm:text-base font-semibold text-gray-900">
                        {item.q}
                      </p>
                    </div>
                    <div
                      className={`flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full border text-gray-500 text-lg transition-all duration-200 ${
                        open
                          ? "border-emerald-400 bg-emerald-50 text-emerald-700 rotate-180"
                          : "border-gray-200 bg-white"
                      }`}
                    >
                      <span className="mt-[-1px]">{open ? "−" : "+"}</span>
                    </div>
                  </button>

                  {open && (
                    <div className="px-4 sm:px-5 pb-3.5 sm:pb-4 text-xs sm:text-sm text-gray-600 border-t border-gray-100">
                      <p className="pt-2 leading-relaxed">{item.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* small animation css */}
      <style>{`
        @keyframes faqFadeUp {
          0% { opacity: 0; transform: translateY(16px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default FAQSection;
