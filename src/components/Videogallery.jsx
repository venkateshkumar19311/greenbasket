import React, { useState } from "react";

import greenbasketIntro from "../videos/greenbasket-intro.mp4";
import orderVegetables from "../videos/order-vegetables.mp4";
import couponsGuide from "../videos/coupons-guide.mp4";
import orderTracking from "../videos/order-tracking.mp4";

import thumbIntro from "../img/thumb-intro.png";
import thumbVeg from "../img/thumb-veg.png";
import thumbCoupons from "../img/thumb-coupons.png";
import thumbTracking from "../img/thumb-tracking.png";

/**
 * Video config
 */
const videos = [
  {
    id: 1,
    title: "GreenBasket Intro — How It Works",
    category: "Platform Guide",
    duration: "01:25",
    thumbnail: thumbIntro,
    src: greenbasketIntro,
    description:
      "Quick overview of how to browse categories, add products, and place an order on GreenBasket.",
  },
  {
    id: 2,
    title: "How to Order Fresh Vegetables",
    category: "Shopping Tips",
    duration: "02:10",
    thumbnail: thumbVeg,
    src: orderVegetables,
    description:
      "Step-by-step guide to selecting the best vegetable combos and applying discount codes.",
  },
  {
    id: 3,
    title: "Using Coupon Codes & Offers",
    category: "Offers & Deals",
    duration: "01:45",
    thumbnail: thumbCoupons,
    src: couponsGuide,
    description:
      "Learn how to add promo codes during checkout and maximize your savings on every order.",
  },
  {
    id: 4,
    title: "Track Your Order in Real-Time",
    category: "Order Support",
    duration: "01:30",
    thumbnail: thumbTracking,
    src: orderTracking,
    description:
      "Watch how to view your order status, expected delivery time and contact delivery support.",
  },
];

const categories = ["All", "Platform Guide", "Shopping Tips", "Offers & Deals", "Order Support"];

const VideoGallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedVideo, setSelectedVideo] = useState(null);

  const filteredVideos =
    activeCategory === "All"
      ? videos
      : videos.filter((video) => video.category === activeCategory);

  const openVideo = (video) => {
    setSelectedVideo(video);
  };

  const closeVideo = () => {
    setSelectedVideo(null);
  };

  return (
    <section
      id="videos"
      className="relative bg-gradient-to-b from-gray-50 via-white to-emerald-50 py-12 sm:py-16 lg:py-20"
    >
      {/* soft background accents */}
      

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-green-50 border border-green-200">
            <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-green-700">
              Video Help Center
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight mb-3">
            Watch & Download GreenBasket Guides
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-xs sm:text-sm md:text-base">
            Learn how to use GreenBasket faster with short, snackable video tutorials.
            You can play online or download for offline viewing.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`relative px-3 sm:px-5 py-2 sm:py-2.5 rounded-full text-[11px] sm:text-xs md:text-sm font-semibold transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-emerald-600 text-white shadow-lg shadow-emerald-500/30"
                  : "bg-white text-gray-700 border border-gray-200 hover:border-emerald-400 hover:text-emerald-700 hover:shadow"
              }`}
            >
              {cat}
              {activeCategory === cat && (
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-6 sm:w-8 h-1 bg-emerald-300 rounded-full" />
              )}
            </button>
          ))}
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {filteredVideos.map((video) => (
            <article
              key={video.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl border border-gray-100 transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Thumbnail */}
              <div className="relative h-40 xs:h-44 sm:h-48 md:h-52 overflow-hidden bg-gray-100">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* dark overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Play button center */}
                <button
                  onClick={() => openVideo(video)}
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <div className="flex items-center justify-center h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-white/90 shadow-lg hover:scale-105 transition-transform">
                    <svg
                      className="h-5 w-5 sm:h-6 sm:w-6 text-emerald-600 ml-0.5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </button>

                {/* Duration badge */}
                <div className="absolute bottom-2 sm:bottom-3 right-2 sm:right-3 px-2.5 py-1 rounded-full bg-black/70 text-white text-[10px] sm:text-[11px] font-semibold flex items-center gap-1">
                  <svg
                    className="h-3 w-3 sm:h-3.5 sm:w-3.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeWidth={1.6}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v6l3 3m5-3a8 8 0 11-16 0 8 8 0 0116 0z"
                    />
                  </svg>
                  {video.duration}
                </div>
              </div>

              {/* Content */}
              <div className="p-3 sm:p-4 md:p-5 flex flex-col h-full">
                <div className="flex items-center justify-between mb-2">
                  <span className="px-2.5 py-1 rounded-full text-[10px] sm:text-[11px] font-semibold bg-emerald-50 text-emerald-700">
                    {video.category}
                  </span>
                  <span className="text-[10px] sm:text-[11px] text-gray-400">HD Video</span>
                </div>

                <h3 className="text-xs sm:text-sm md:text-base font-semibold text-gray-900 mb-1 line-clamp-2 group-hover:text-emerald-700 transition-colors">
                  {video.title}
                </h3>

                <p className="text-[11px] sm:text-xs md:text-sm text-gray-500 mb-3 sm:mb-4 line-clamp-3">
                  {video.description}
                </p>

                {/* Actions */}
                <div className="mt-auto flex items-center justify-between gap-2">
                  <button
                    onClick={() => openVideo(video)}
                    className="flex items-center gap-1.5 text-[11px] sm:text-xs md:text-sm font-semibold text-white bg-emerald-600 px-3 py-1.5 sm:py-2 rounded-lg hover:bg-emerald-700 shadow-sm hover:shadow-md transition"
                  >
                    <svg
                      className="h-3.5 w-3.5 sm:h-4 sm:w-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                    Play
                  </button>

                  <a
                    href={video.src}
                    download
                    className="flex items-center gap-1.5 text-[11px] sm:text-xs md:text-sm font-semibold text-emerald-700 bg-emerald-50 px-3 py-1.5 sm:py-2 rounded-lg hover:bg-emerald-100 border border-emerald-100 transition"
                  >
                    <svg
                      className="h-3.5 w-3.5 sm:h-4 sm:w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeWidth={1.8}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 16v3a1 1 0 001 1h14a1 1 0 001-1v-3M16 12l-4 4m0 0l-4-4m4 4V4"
                      />
                    </svg>
                    Download
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-2 sm:px-4">
          <div className="relative bg-gray-900 rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] flex flex-col overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between px-3 sm:px-4 md:px-5 py-2 sm:py-3 border-b border-white/10">
              <div className="min-w-0">
                <p className="text-[9px] sm:text-[11px] uppercase tracking-[0.18em] text-emerald-300">
                  Video Playing
                </p>
                <h4 className="text-white text-xs sm:text-sm md:text-base font-semibold truncate">
                  {selectedVideo.title}
                </h4>
              </div>
              <button
                onClick={closeVideo}
                className="ml-3 h-7 w-7 sm:h-8 sm:w-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-gray-200"
                aria-label="Close video"
              >
                ✕
              </button>
            </div>

            {/* Video player */}
            <div className="bg-black flex-1 flex flex-col">
              <div className="w-full aspect-video max-h-[65vh]">
                <video
                  key={selectedVideo.src} // ensure reload when change
                  controls
                  autoPlay
                  className="w-full h-full bg-black"
                >
                  <source src={selectedVideo.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>

              {/* Bottom bar with download */}
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 px-3 sm:px-4 md:px-5 py-3 bg-gray-900/95 border-t border-white/10">
                <p className="text-[10px] sm:text-[11px] md:text-xs text-gray-300 max-w-md">
                  You can watch this tutorial online or download it and keep it for
                  offline viewing.
                </p>
                <div className="flex items-center gap-2">
                  <a
                    href={selectedVideo.src}
                    download
                    className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-semibold text-gray-900 bg-emerald-300 px-3 py-1.5 rounded-lg hover:bg-emerald-200 transition"
                  >
                    <svg
                      className="h-3.5 w-3.5 sm:h-4 sm:w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeWidth={1.8}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 16v3a1 1 0 001 1h14a1 1 0 001-1v-3M16 12l-4 4m0 0l-4-4m4 4V4"
                      />
                    </svg>
                    Download Video
                  </a>
                  <button
                    onClick={closeVideo}
                    className="text-[10px] sm:text-xs text-gray-300 hover:text-white px-2 py-1"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default VideoGallery;
