import React from "react";

// OPTIONAL: replace with your own images in /src/img
import blogHero from "../img/top-view-fruit-vegetables-reusable-bags-with-bread.png";
import blogStore from "../img/Household (2).png";
import blogFruits from "../img/Red_Hot_Tomato (2).png";

const posts = [
  {
    id: 1,
    title: "Why Buying Groceries Online Saves Time and Money",
    category: "Online Shopping",
    author: "Admin",
    date: "November 1, 2022",
    image: blogHero,
    readTime: "4 min read",
    excerpt:
      "Skip long queues, compare prices in seconds, and get everything delivered straight to your door. Here’s why online grocery shopping is the smart move.",
  },
  {
    id: 2,
    title: "How to Store Groceries to Keep Them Fresh Longer",
    category: "Online Shopping",
    author: "Admin",
    date: "November 1, 2022",
    image: blogStore,
    readTime: "5 min read",
    excerpt:
      "From leafy greens to dairy, learn simple storage tricks that keep your groceries crisp, tasty, and safe for more days.",
  },
  {
    id: 3,
    title: "Fresh Fruits You Should Add to Your Daily Diet",
    category: "Online Shopping",
    author: "Admin",
    date: "November 1, 2022",
    image: blogFruits,
    readTime: "3 min read",
    excerpt:
      "Boost your energy, immunity, and mood with these colorful fruits that are easy to add to your everyday meals.",
  },
];

const LatestBlogPage = () => {
  const [featured, ...rest] = posts;

  return (
    <section
      id="blog"
      className="relative overflow-hidden bg-gradient-to-b from-gray-50 via-white to-emerald-50 py-16 lg:py-20"
    >
      {/* soft blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-20 top-0 h-72 w-72 rounded-full bg-emerald-100 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-amber-100 blur-3xl"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="text-center mb-10 md:mb-12">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-green-50 border border-green-200">
            <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-green-700">
              Latest Blog
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900 mb-3">
            Insights, Tips & Fresh Stories
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
            Discover simple, useful guides on online grocery shopping, storage tips,
            and healthy eating ideas – all curated by GreenBasket.
          </p>
        </div>

        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* LEFT: BLOG LIST (spans 2 cols on desktop) */}
          <div className="lg:col-span-2 space-y-6">
            {/* Featured post */}
            <article className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl border border-gray-100 transition-all duration-500 transform hover:-translate-y-1 animate-blog-fade-1">
              <div className="relative h-60 md:h-72 overflow-hidden">
                <img
                  src={featured.image}
                  alt={`${featured.title} - ${featured.category} article from GreenBasket blog`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                  width="800"
                  height="400"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/15 to-transparent" />
                {/* category pill */}
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/90 text-[11px] font-semibold text-emerald-700">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    {featured.category}
                  </span>
                </div>
              </div>

              <div className="p-5 md:p-7">
                {/* meta */}
                <div className="flex flex-wrap items-center gap-3 text-[11px] text-gray-500 mb-3 uppercase tracking-[0.18em]">
                  <span className="font-semibold text-gray-700">Admin</span>
                  <span className="h-1 w-1 rounded-full bg-gray-300" />
                  <span>{featured.date}</span>
                  <span className="h-1 w-1 rounded-full bg-gray-300" />
                  <span>{featured.readTime}</span>
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 group-hover:text-emerald-700 transition-colors">
                  {featured.title}
                </h3>

                <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-5 line-clamp-3">
                  {featured.excerpt}
                </p>

                <div className="flex items-center justify-between gap-3">
                  <button className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 hover:text-emerald-900">
                    READ MORE
                    <span className="inline-block translate-y-[1px] transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </button>
                  <div className="hidden sm:flex items-center gap-2 text-[11px] text-gray-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
                    <span>Featured article</span>
                  </div>
                </div>
              </div>
            </article>

            {/* secondary posts */}
            <div className="grid md:grid-cols-2 gap-6">
              {rest.map((post, index) => (
                <article
                  key={post.id}
                  className={`group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-500 transform hover:-translate-y-1 ${
                    index === 0 ? "animate-blog-fade-2" : "animate-blog-fade-3"
                  }`}
                >
                  <div className="relative h-40 md:h-44 overflow-hidden">
                    <img
                      src={post.image}
                      alt={`${post.title} - ${post.category} blog post from GreenBasket`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                      width="400"
                      height="250"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/15 to-transparent opacity-80" />
                    <div className="absolute top-3 left-3">
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/90 text-[10px] font-semibold text-emerald-700">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-4 md:p-5 flex flex-col h-full">
                    <div className="text-[11px] text-gray-500 uppercase tracking-[0.18em] mb-2 flex flex-wrap gap-2">
                      <span>{post.author}</span>
                      <span className="h-1 w-1 rounded-full bg-gray-300" />
                      <span>{post.date}</span>
                    </div>

                    <h3 className="text-sm md:text-base font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-emerald-700 transition-colors">
                      {post.title}
                    </h3>

                    <p className="text-xs md:text-sm text-gray-500 mb-3 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="mt-auto flex items-center justify-between">
                      <button className="inline-flex items-center gap-1 text-[12px] font-semibold text-emerald-700 hover:text-emerald-900">
                        READ MORE
                        <span className="inline-block translate-y-[1px] transition-transform group-hover:translate-x-1">
                          →
                        </span>
                      </button>
                      <span className="text-[11px] text-gray-400">{post.readTime}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* RIGHT: SIDEBAR / CURATED PRODUCTS INFO */}
          <aside className="space-y-6 lg:space-y-7">
            {/* Curated products card 1 */}
            <div className="relative overflow-hidden bg-gradient-to-br from-emerald-600 via-emerald-700 to-emerald-800 text-white rounded-3xl p-6 shadow-xl animate-blog-fade-2">
              <div className="absolute -right-6 -top-8 h-32 w-32 rounded-full border border-white/20 bg-white/10 blur-xl opacity-40" />
              <div className="relative">
                <p className="text-xs uppercase tracking-[0.2em] text-emerald-100 mb-2">
                  Curated Products
                </p>
                <h3 className="text-xl font-bold mb-2">
                  Free Home Delivery Over ₹499
                </h3>
                <p className="text-sm text-emerald-50 mb-4">
                  Add your favorite items to the cart and enjoy fast, contactless
                  delivery on all eligible orders with no extra delivery fee.
                </p>
                <button className="inline-flex items-center gap-2 rounded-full bg-white text-emerald-700 text-xs font-semibold px-4 py-2 shadow-md hover:bg-emerald-50 transition">
                  Explore Curated Picks
                  <span className="text-sm">→</span>
                </button>
              </div>
            </div>

            {/* Curated products card 2 */}
            <div className="bg-white rounded-3xl border border-gray-100 shadow-md p-5 flex flex-col gap-4 animate-blog-fade-3">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600 text-xl">
                  🌿
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-900">
                    Handpicked Grocery Combos
                  </h4>
                  <p className="text-xs text-gray-500">
                    Save more with thoughtfully packed combos for breakfast, tiffin,
                    and dinner.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs text-gray-600">
                <div className="rounded-2xl border border-dashed border-emerald-100 bg-emerald-50/40 px-3 py-3">
                  <p className="font-semibold text-emerald-700 mb-1">
                    Freshness Guarantee
                  </p>
                  <p>Every product is checked before dispatch.</p>
                </div>
                <div className="rounded-2xl border border-dashed border-amber-100 bg-amber-50/50 px-3 py-3">
                  <p className="font-semibold text-amber-700 mb-1">
                    Same-Day Slots
                  </p>
                  <p>Book convenient delivery windows for your area.</p>
                </div>
              </div>
            </div>

            {/* Small newsletter / follow card */}
            <div className="bg-gray-900 rounded-3xl p-5 text-white shadow-xl animate-blog-fade-3">
              <p className="text-xs uppercase tracking-[0.2em] text-emerald-200 mb-2">
                Stay Updated
              </p>
              <h4 className="text-lg font-semibold mb-2">
                Get new tips & recipes in your inbox.
              </h4>
              <p className="text-xs text-gray-300 mb-4">
                Subscribe to get fresh grocery hacks, storage ideas, and seasonal
                offers directly from GreenBasket.
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 rounded-xl bg-gray-800 border border-gray-700 text-xs text-gray-100 placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-emerald-400"
                />
                <button className="px-4 py-2 rounded-xl bg-emerald-500 text-xs font-semibold hover:bg-emerald-400 transition">
                  Subscribe
                </button>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* animations */}
      <style>{`
        @keyframes blogFadeUp {
          0% { opacity: 0; transform: translateY(18px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-blog-fade-1 {
          animation: blogFadeUp 0.6s ease-out both;
        }
        .animate-blog-fade-2 {
          animation: blogFadeUp 0.7s ease-out both;
        }
        .animate-blog-fade-3 {
          animation: blogFadeUp 0.8s ease-out both;
        }
      `}</style>
    </section>
  );
};

export default LatestBlogPage;
