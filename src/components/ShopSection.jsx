// src/components/ShopSection.jsx
import React, { useState } from "react";

const categories = [
  {
    name: "Fresh Vegetables",
    desc: "Leafy greens, tomatoes, roots & more.",
    pill: "Daily Harvest",
    icon: "🥬",
  },
  {
    name: "Fruits & Juices",
    desc: "Seasonal fruits, cold-pressed juices.",
    pill: "Immunity Boost",
    icon: "🍊",
  },
  {
    name: "Dairy & Eggs",
    desc: "Milk, curd, paneer, eggs, and more.",
    pill: "Farm Fresh",
    icon: "🥛",
  },
  {
    name: "Staples & Grains",
    desc: "Rice, wheat, pulses and essentials.",
    pill: "Kitchen Basics",
    icon: "🌾",
  },
];

// Popup-ku display panna sample items
const categoryItems = {
  "Fresh Vegetables": [
    "Spinach (Palak) – 1 bunch",
    "Tomato Country – 1 kg",
    "Carrot – 500 g",
    "Beans – 500 g",
  ],
  "Fruits & Juices": [
    "Banana Yelakki – 1 dozen",
    "Apple Shimla – 1 kg",
    "Seasonal Mixed Fruit Box",
    "Cold-pressed Orange Juice – 1L",
  ],
  "Dairy & Eggs": [
    "Toned Milk – 1L",
    "Curd Pouch – 500 ml",
    "Paneer Fresh – 200 g",
    "Country Eggs – 6 pcs",
  ],
  "Staples & Grains": [
    "Idli Rice – 5 kg",
    "Wheat Flour – 5 kg",
    "Toor Dal – 1 kg",
    "Sunflower Oil – 1L",
  ],
};

const ShopSection = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const closeModal = () => setSelectedCategory(null);

  const handleBrowseClick = (cat) => {
    setSelectedCategory(cat);
  };

  const items =
    selectedCategory && categoryItems[selectedCategory.name]
      ? categoryItems[selectedCategory.name]
      : [];

  return (
    <section
      id="shop"
      className="relative overflow-hidden bg-gradient-to-b from-white via-emerald-50/40 to-white py-14 sm:py-16 lg:py-20"
    >
      {/* soft blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-20 top-0 h-64 w-64 rounded-full bg-emerald-100 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-lime-100 blur-3xl"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-green-50 border border-green-200">
            <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-green-700">
              Shop by Category
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
            Everything for Your Daily Basket
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
            Browse curated categories and quickly add essentials, fresh items,
            and combos to your cart in just a few taps.
          </p>
        </div>

        {/* grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {categories.map((cat, idx) => (
            <article
              key={cat.name}
              className="group relative overflow-hidden rounded-2xl bg-white border border-emerald-50 shadow-sm hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              style={{ animation: `shopFadeUp 0.${4 + idx}s ease-out both` }}
            >
              {/* glow bg on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/70 via-transparent to-lime-50/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative p-4 sm:p-5 flex flex-col h-full">
                {/* icon + pill */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="h-9 w-9 rounded-2xl bg-emerald-50 flex items-center justify-center text-lg">
                      {cat.icon}
                    </span>
                    <h3 className="text-sm sm:text-base font-semibold text-gray-900 group-hover:text-emerald-700 transition-colors">
                      {cat.name}
                    </h3>
                  </div>
                  <span className="text-[11px] px-2 py-1 rounded-full bg-emerald-50 text-emerald-700 font-medium">
                    {cat.pill}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-gray-500 flex-1">
                  {cat.desc}
                </p>

                <button
                  onClick={() => handleBrowseClick(cat)}
                  className="mt-4 inline-flex items-center gap-2 text-[11px] sm:text-xs font-semibold text-emerald-700 group-hover:text-emerald-900"
                >
                  Browse items
                  <span className="inline-block group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </button>
              </div>

              {/* subtle bottom border accent */}
              <div className="absolute inset-x-0 bottom-0 h-[3px] bg-gradient-to-r from-emerald-400/0 via-emerald-400/60 to-emerald-400/0 opacity-0 group-hover:opacity-100 transition-opacity" />
            </article>
          ))}
        </div>
      </div>

      {/* Popup Modal for category items */}
      {selectedCategory && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4">
          <div className="relative max-w-md w-full bg-white rounded-3xl shadow-2xl border border-emerald-100 overflow-hidden">
            {/* header */}
            <div className="flex items-center justify-between px-4 sm:px-5 py-3 border-b border-gray-100 bg-gradient-to-r from-emerald-50 to-lime-50">
              <div className="flex items-center gap-2">
                <span className="h-8 w-8 rounded-2xl bg-emerald-100 flex items-center justify-center text-lg">
                  {selectedCategory.icon}
                </span>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.16em] text-emerald-700">
                    Category
                  </p>
                  <h4 className="text-sm sm:text-base font-semibold text-gray-900">
                    {selectedCategory.name}
                  </h4>
                </div>
              </div>
              <button
                onClick={closeModal}
                className="h-8 w-8 flex items-center justify-center rounded-full bg-white/60 hover:bg-white text-gray-600 shadow-sm"
                aria-label="Close popup"
              >
                ✕
              </button>
            </div>

            {/* body */}
            <div className="px-4 sm:px-5 py-4">
              <p className="text-xs sm:text-sm text-gray-600 mb-3">
                Here are some popular items from this category. In real project,
                you can link these to your product pages / API data.
              </p>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center justify-between rounded-xl border border-gray-100 bg-gray-50 px-3 py-2 text-xs sm:text-sm"
                  >
                    <div className="flex items-center gap-2">
                      <span className="h-5 w-5 rounded-full bg-emerald-100 flex items-center justify-center text-[11px]">
                        🛒
                      </span>
                      <span className="text-gray-800">{item}</span>
                    </div>
                    <button className="text-[11px] font-semibold text-emerald-700 hover:text-emerald-900">
                      View
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* footer */}
            <div className="px-4 sm:px-5 py-3 border-t border-gray-100 bg-gray-50 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2">
              <button
                onClick={closeModal}
                className="text-[11px] sm:text-xs text-gray-600 hover:text-gray-900"
              >
                Close
              </button>
              <button className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 text-[11px] sm:text-xs font-semibold text-white hover:bg-emerald-700 transition">
                View all items in {selectedCategory.name}
                <span>→</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* small animation keyframe */}
      <style>{`
        @keyframes shopFadeUp {
          0% { opacity: 0; transform: translateY(18px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default ShopSection;
