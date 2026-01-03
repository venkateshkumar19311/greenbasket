// src/components/BlogSection.jsx
import React, { useState } from "react";

const articles = [
  {
    id: "online-groceries",
    title: "Why Buying Groceries Online Saves Time and Money",
    tag: "Online Shopping",
    author: "Admin",
    date: "November 1, 2022",
    readTime: "4 min read",
    excerpt:
      "Skip traffic, long queues and last–minute store runs. Online grocery shopping helps you plan better and save both time and money.",
    sections: [
      {
        heading: "1. No More Last–Minute Store Runs",
        body: `When you shop online, you don’t have to rush to the store after work or early in the morning. 
You can browse products at your own pace, add items to the cart and place your order in a few taps. 
This is especially helpful for busy families, working professionals and students living alone.`,
      },
      {
        heading: "2. Easy Price Comparison",
        body: `In a physical store, comparing prices across multiple brands takes time. 
Inside GreenBasket, you can quickly compare prices, offers and quantities on one screen. 
You’ll also see combo packs and smart suggestions that help you save more on your monthly budget.`,
      },
      {
        heading: "3. Spend Less on Impulse Purchases",
        body: `Walking through supermarket aisles often leads to impulse buys — snacks, sweets or extra items you didn’t plan for. 
Online, you see a clear list of what’s in your cart, along with the total amount. 
This makes it easier to stick to your grocery list and control your spending.`,
      },
      {
        heading: "4. Smart Scheduling & Delivery",
        body: `With scheduled delivery slots, you don’t have to wait around or carry heavy bags. 
Your groceries reach your doorstep while you focus on work, family or rest. 
Over time, this convenience adds up to a big lifestyle upgrade.`,
      },
    ],
  },
  {
    id: "store-groceries-fresh",
    title: "How to Store Groceries to Keep Them Fresh Longer",
    tag: "Storage Tips",
    author: "Admin",
    date: "November 1, 2022",
    readTime: "5 min read",
    excerpt:
      "Storing groceries correctly can easily add 2–4 extra days of freshness to your fruits, vegetables and dairy products.",
    sections: [
      {
        heading: "1. Separate Fruits and Vegetables",
        body: `Some fruits, like bananas and apples, release natural gases that can ripen nearby vegetables faster. 
Keep fruits and vegetables in separate sections of your fridge or in different baskets to avoid early spoilage.`,
      },
      {
        heading: "2. Use Airtight Containers",
        body: `Leftovers, chopped veggies and cooked food last longer when stored in clean, airtight containers. 
They prevent moisture loss and protect food from absorbing unwanted fridge smells.`,
      },
      {
        heading: "3. Don’t Overfill the Fridge",
        body: `A crowded fridge blocks air circulation, making it harder to keep everything evenly cool. 
Leave some space around items so cold air can flow properly and keep your groceries fresh for longer.`,
      },
      {
        heading: "4. Label & Rotate",
        body: `Simple tricks like writing the date on containers or placing older items in front help you use them first. 
This reduces wastage and ensures you always eat your groceries at the right time.`,
      },
    ],
  },
  {
    id: "fresh-fruits-daily-diet",
    title: "Fresh Fruits You Should Add to Your Daily Diet",
    tag: "Healthy Living",
    author: "Admin",
    date: "November 1, 2022",
    readTime: "3 min read",
    excerpt:
      "Colorful fruits add vitamins, fiber and natural sweetness to your plate — all while keeping you light and energetic.",
    sections: [
      {
        heading: "1. Citrus Fruits for Immunity",
        body: `Oranges, mosambi and lemons are rich in Vitamin C. 
They support your immune system and keep you feeling refreshed, especially in hot weather.`,
      },
      {
        heading: "2. Bananas for Quick Energy",
        body: `Bananas are easy to carry, easy to store and perfect as a pre– or post–workout snack. 
They give you instant energy without making you feel too full.`,
      },
      {
        heading: "3. Berries & Seasonal Local Fruits",
        body: `Whenever possible, add seasonal fruits available in your area — they are often fresher, tastier and more affordable. 
Berries, guava and pomegranate are excellent for skin, heart and digestion.`,
      },
      {
        heading: "4. Make Fruits a Habit",
        body: `Instead of treating fruits as an occasional snack, try adding them to breakfast bowls, salads, curd or smoothies. 
Small daily changes make a big difference to your long–term health.`,
      },
    ],
  },
];

const BlogSection = () => {
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [showAllModal, setShowAllModal] = useState(false);

  const openArticle = (article) => {
    setSelectedArticle(article);
  };

  const closeArticle = () => {
    setSelectedArticle(null);
  };

  const openAllArticles = () => {
    setShowAllModal(true);
  };

  const closeAllArticles = () => {
    setShowAllModal(false);
  };

  // 👇 animation names for the 3 cards (Tri-Slide Blog Reveal)
  const animationNames = ["blogFromLeft", "blogFromTop", "blogFromRight"];

  return (
    <>
      <section
        id="blog"
        className="relative bg-white py-14 sm:py-16 lg:py-20 border-t border-gray-100"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading pill like other sections */}
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-green-50 border border-green-200">
              <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-green-700">
                GreenBasket Blog
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">
              Latest from the Blog
            </h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
              Short, helpful reads on shopping smarter, storing better, and
              eating fresher — written for everyday families.
            </p>
          </div>

          {/* Top bar with "View all" */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
            <div className="text-sm text-gray-500">
              <span className="inline-flex items-center gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                <span>New stories added regularly.</span>
              </span>
            </div>
            <button
              onClick={openAllArticles}
              className="self-start inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-gray-200 text-xs sm:text-sm font-semibold text-gray-800 hover:border-emerald-400 hover:text-emerald-700 hover:shadow transition"
            >
              View all articles
              <span>→</span>
            </button>
          </div>

          {/* Cards grid */}
          <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
            {articles.map((a, index) => {
              const animationName =
                animationNames[index] || "blogFromTop"; // safety fallback

              return (
                <article
                  key={a.id}
                  className="group bg-gray-50 rounded-2xl border border-gray-100 hover:border-emerald-200 hover:bg-white shadow-sm hover:shadow-xl transition-all duration-300 p-4 sm:p-5 flex flex-col"
                  style={{
                    animation: `${animationName} 0.55s ease-out ${
                      index * 0.05
                    }s both`,
                  }}
                >
                  <span className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-600 mb-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    {a.tag}
                  </span>
                  <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-2 group-hover:text-emerald-700 transition-colors line-clamp-2">
                    {a.title}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-gray-400 mb-1">
                    {a.date} • {a.readTime}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-500 mb-3 line-clamp-3">
                    {a.excerpt}
                  </p>
                  <button
                    onClick={() => openArticle(a)}
                    className="mt-auto inline-flex items-center gap-1 text-[11px] sm:text-xs font-semibold text-emerald-700 hover:text-emerald-900"
                  >
                    READ MORE
                    <span className="inline-block group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </button>
                </article>
              );
            })}
          </div>
        </div>

        {/* animations */}
        <style>{`
          /* Tri-Slide Blog Reveal */
          @keyframes blogFromLeft {
            0% { opacity: 0; transform: translateX(-24px); }
            100% { opacity: 1; transform: translateX(0); }
          }
          @keyframes blogFromTop {
            0% { opacity: 0; transform: translateY(-24px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          @keyframes blogFromRight {
            0% { opacity: 0; transform: translateX(24px); }
            100% { opacity: 1; transform: translateX(0); }
          }

          /* Modal animation (already used) */
          @keyframes blogModalIn {
            0% { opacity: 0; transform: translateY(18px) scale(0.98); }
            100% { opacity: 1; transform: translateY(0) scale(1); }
          }
        `}</style>
      </section>

      {/* SINGLE ARTICLE MODAL */}
      {selectedArticle && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4 sm:px-6"
          onClick={closeArticle}
        >
          <div
            className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden animate-[blogModalIn_0.25s_ease-out]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 sm:px-6 py-3 border-b border-gray-100 bg-gradient-to-r from-emerald-50 via-white to-lime-50">
              <div>
                <p className="text-[11px] sm:text-xs uppercase tracking-[0.2em] text-emerald-500 mb-1">
                  GreenBasket Blog
                </p>
                <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-900">
                  {selectedArticle.title}
                </h3>
                <p className="text-[11px] sm:text-xs text-gray-500 mt-1">
                  {selectedArticle.author} • {selectedArticle.date} •{" "}
                  {selectedArticle.readTime}
                </p>
              </div>
              <button
                onClick={closeArticle}
                className="h-8 w-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 text-sm"
                aria-label="Close blog"
              >
                ✕
              </button>
            </div>

            {/* Body */}
            <div className="px-4 sm:px-6 py-5 sm:py-6 max-h-[80vh] overflow-y-auto">
              <div className="space-y-4 sm:space-y-5 text-sm sm:text-base text-gray-700">
                <p className="text-xs sm:text-sm uppercase tracking-[0.18em] text-emerald-600 mb-1">
                  {selectedArticle.tag}
                </p>
                {selectedArticle.sections.map((sec) => (
                  <div key={sec.heading} className="space-y-1.5">
                    <h4 className="text-sm sm:text-base font-semibold text-gray-900">
                      {sec.heading}
                    </h4>
                    <p className="text-xs sm:text-sm leading-relaxed whitespace-pre-line">
                      {sec.body}
                    </p>
                  </div>
                ))}
                <div className="mt-4 rounded-2xl bg-emerald-50 border border-emerald-100 px-3.5 py-3 text-[11px] sm:text-xs text-gray-700">
                  Tip: You can add these ideas directly to your next GreenBasket
                  order – save your favorite items, build combos and reorder in
                  just a few taps.
                </div>
              </div>

              <div className="mt-5 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
                <button
                  onClick={closeArticle}
                  className="px-4 py-2.5 rounded-xl bg-gray-900 text-white text-xs sm:text-sm font-semibold hover:bg-black transition"
                >
                  Close & go back to blog
                </button>
                <a
                  href="#shop"
                  className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-semibold text-emerald-700 hover:text-emerald-900"
                >
                  Continue shopping on GreenBasket
                  <span>→</span>
                </a>
              </div>
            </div>

            <div className="h-1 w-full bg-gradient-to-r from-emerald-400 via-lime-400 to-emerald-400" />
          </div>
        </div>
      )}

      {/* VIEW ALL ARTICLES MODAL */}
      {showAllModal && !selectedArticle && (
        <div
          className="fixed inset-0 z-40 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4 sm:px-6"
          onClick={closeAllArticles}
        >
          <div
            className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden animate-[blogModalIn_0.25s_ease-out]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 sm:px-6 py-3 border-b border-gray-100 bg-gradient-to-r from-emerald-50 via-white to-lime-50">
              <div>
                <p className="text-[11px] sm:text-xs uppercase tracking-[0.2em] text-emerald-500 mb-1">
                  All Blog Articles
                </p>
                <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-900">
                  GreenBasket – Tips, Guides & Ideas
                </h3>
              </div>
              <button
                onClick={closeAllArticles}
                className="h-8 w-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 text-sm"
                aria-label="Close all articles"
              >
                ✕
              </button>
            </div>

            {/* Body */}
            <div className="px-4 sm:px-6 py-5 max-h-[70vh] overflow-y-auto">
              <div className="space-y-4">
                {articles.map((a) => (
                  <div
                    key={a.id}
                    className="rounded-2xl border border-gray-100 bg-gray-50 hover:bg-white hover:border-emerald-200 transition-all p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center gap-3"
                  >
                    <div className="flex-1">
                      <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.18em] text-emerald-600 mb-1">
                        {a.tag}
                      </p>
                      <h4 className="text-sm sm:text-base font-semibold text-gray-900 mb-1">
                        {a.title}
                      </h4>
                      <p className="text-[11px] sm:text-xs text-gray-400 mb-1">
                        {a.date} • {a.readTime}
                      </p>
                      <p className="text-xs sm:text-sm text-gray-600 line-clamp-2">
                        {a.excerpt}
                      </p>
                    </div>
                    <div className="flex sm:flex-col gap-2 sm:gap-2 items-end sm:items-stretch">
                      <button
                        onClick={() => {
                          setShowAllModal(false);
                          openArticle(a);
                        }}
                        className="inline-flex items-center justify-center px-3 py-2 rounded-xl bg-emerald-600 text-white text-[11px] sm:text-xs font-semibold hover:bg-emerald-700 transition"
                      >
                        READ ARTICLE
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 flex justify-end">
                <button
                  onClick={closeAllArticles}
                  className="text-[11px] sm:text-xs text-gray-500 hover:text-gray-700"
                >
                  Close
                </button>
              </div>
            </div>

            <div className="h-1 w-full bg-gradient-to-r from-emerald-400 via-lime-400 to-emerald-400" />
          </div>
        </div>
      )}
    </>
  );
};

export default BlogSection;
