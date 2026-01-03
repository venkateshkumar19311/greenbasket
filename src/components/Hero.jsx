import heroMain from "../img/banner_bg.jpg"; // big background image (blurred)
import kiwi from "../img/basket-full-vegetables.jpg";
import mush from "../img/top-view-fruit-vegetables-reusable-bags-with-bread.jpg";
import Orange_Fresh from "../img/vegetables.jpg";

const Hero = () => {
  // Structured Data for Hero Section
  const heroSchema = {
    "@context": "https://schema.org",
    "@type": "HeroSection",
    "headline": "Fresh. Curated. Delivered to Your Doorstep.",
    "description": "Shop premium, handpicked groceries from trusted farms & brands. Enjoy fast delivery, exclusive combo deals, and always-fresh quality with GreenBasket.",
    "image": "https://www.greenbasket.com/img/banner_bg.jpg",
    "offers": [
      {
        "@type": "Offer",
        "name": "Kiwi Basket",
        "price": "20% OFF",
        "description": "Fresh kiwi basket with premium vegetables"
      },
      {
        "@type": "Offer",
        "name": "Fresh Juices",
        "price": "30% OFF",
        "description": "Flash offer on fresh juices"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "10000"
    }
  };

  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-gradient-to-b from-emerald-50 via-white to-amber-50"
      itemScope
      itemType="https://schema.org/HeroSection"
    >
      {/* Soft background blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-emerald-200/40 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-amber-200/40 blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* LEFT: Content */}
          <div className="relative z-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 mb-4">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
                This Week’s Trending Picks
              </span>
            </div>

            {/* Heading */}
            <h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 leading-tight mb-4"
              itemProp="headline"
            >
              Fresh. Curated.
              <span className="block text-emerald-600">
                Delivered to Your Doorstep.
              </span>
            </h1>

            {/* Subtitle */}
            <p 
              className="text-gray-600 text-base md:text-lg max-w-xl mb-6"
              itemProp="description"
            >
              Shop premium, handpicked groceries from trusted farms & brands.
              Enjoy fast delivery, exclusive combo deals, and always-fresh
              quality with GreenBasket.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <a 
                href="/shop" 
                className="px-7 py-3 rounded-full bg-emerald-600 text-white font-semibold text-sm md:text-base shadow-lg shadow-emerald-500/30 hover:bg-emerald-700 hover:shadow-xl transition-transform transform hover:-translate-y-0.5 inline-block"
                aria-label="Shop trending deals and offers"
              >
                Shop Trending Deals
              </a>
              <a 
                href="/categories" 
                className="px-7 py-3 rounded-full bg-white border border-gray-200 text-gray-800 font-semibold text-sm md:text-base hover:border-emerald-400 hover:text-emerald-700 hover:shadow-md transition-transform transform hover:-translate-y-0.5 inline-block"
                aria-label="Browse all product categories"
              >
                View All Categories
              </a>
            </div>

            {/* Stats Row */}
            <div className="flex flex-wrap gap-6 text-sm md:text-base" itemScope itemType="https://schema.org/AggregateRating">
              <div itemScope itemType="https://schema.org/QuantitativeValue">
                <p className="font-bold text-gray-900 text-lg" itemProp="value">10K+</p>
                <p className="text-gray-500" itemProp="name">Happy customers</p>
              </div>
              <div className="h-10 w-px bg-gray-200 hidden sm:block" aria-hidden="true" />
              <div itemScope itemType="https://schema.org/QuantitativeValue">
                <p className="font-bold text-gray-900 text-lg" itemProp="value">1500+</p>
                <p className="text-gray-500" itemProp="name">Products curated</p>
              </div>
              <div className="h-10 w-px bg-gray-200 hidden sm:block" aria-hidden="true" />
              <div itemScope itemType="https://schema.org/Duration">
                <p className="font-bold text-gray-900 text-lg" itemProp="value">30 min</p>
                <p className="text-gray-500" itemProp="name">Avg. delivery time*</p>
              </div>
            </div>
          </div>

          {/* RIGHT: Animated Cards / Visual */}
          <div className="relative z-10">
            {/* Main hero image */}
            <div className="relative rounded-3xl overflow-hidden border border-white/60 bg-white/40 shadow-[0_40px_120px_rgba(16,185,129,0.18)] backdrop-blur-xl mb-6 animate-hero-float">
              <img
                src={heroMain}
                alt="Fresh organic groceries and vegetables from GreenBasket - Premium quality produce delivered to your doorstep"
                className="w-full h-[280px] sm:h-[320px] md:h-[360px] object-cover"
                itemProp="image"
                loading="eager"
                width="1200"
                height="600"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-white/10" />
              {/* Floating tag */}
              <div className="absolute left-4 top-4 px-3 py-1.5 rounded-full bg-white/90 text-xs font-semibold text-emerald-700 shadow">
                Same-day delivery in select areas
              </div>
            </div>

            {/* Floating mini cards */}
            <div className="relative h-40 sm:h-44">
              {/* Kiwi card */}
              <div className="absolute left-0 top-2 w-36 sm:w-40 rounded-2xl bg-white shadow-lg border border-emerald-50 p-3 animate-card-float-1" itemScope itemType="https://schema.org/Offer">
                <div className="h-20 sm:h-24 rounded-xl overflow-hidden bg-emerald-50 mb-2">
                  <img
                    src={kiwi}
                    alt="Fresh kiwi basket with premium vegetables - 20% OFF special offer at GreenBasket"
                    className="w-full h-full object-contain"
                    loading="lazy"
                    width="160"
                    height="96"
                  />
                </div>
                <p className="text-xs font-semibold text-gray-800" itemProp="name">
                  Kiwi Basket
                </p>
                <p className="text-[11px] text-gray-500" itemProp="price">Now at 20% OFF</p>
              </div>

              {/* Mushroom card */}
              <div className="absolute right-2 top-0 w-36 sm:w-40 rounded-2xl bg-white shadow-lg border border-emerald-50 p-3 animate-card-float-2" itemScope itemType="https://schema.org/Product">
                <div className="h-20 sm:h-24 rounded-xl overflow-hidden bg-emerald-50 mb-2">
                  <img
                    src={mush}
                    alt="Fresh foraged mushrooms - Best seller product at GreenBasket grocery store"
                    className="w-full h-full object-contain"
                    loading="lazy"
                    width="160"
                    height="96"
                  />
                </div>
                <p className="text-xs font-semibold text-gray-800" itemProp="name">
                  Foraged Mushrooms
                </p>
                <p className="text-[11px] text-emerald-600 font-semibold" itemProp="aggregateRating">
                  Best Seller
                </p>
              </div>

              {/* Juice chip */}
              <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-40 sm:w-48 rounded-2xl bg-gradient-to-r from-emerald-500 to-amber-400 text-white px-4 py-3 shadow-lg flex items-center gap-3 animate-card-float-3" itemScope itemType="https://schema.org/Offer">
                <div className="h-10 w-10 rounded-full overflow-hidden bg-white/10 flex items-center justify-center">
                  <img
                    src={Orange_Fresh}
                    alt="Fresh orange juice - Flash offer 30% OFF today at GreenBasket"
                    className="h-10 w-10 object-cover"
                    loading="lazy"
                    width="40"
                    height="40"
                  />
                </div>
                <div className="flex-1">
                  <p className="text-xs font-semibold uppercase tracking-wide" itemProp="name">
                    Flash Offer
                  </p>
                  <p className="text-xs" itemProp="description">
                    Fresh juices up to{" "}
                    <span className="font-bold" itemProp="price">30% OFF</span> today.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Structured Data JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify(heroSchema)}
      </script>

      {/* Animations */}
      <style>{`
        @keyframes heroFloat {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        .animate-hero-float {
          animation: heroFloat 7s ease-in-out infinite;
        }

        @keyframes cardFloat1 {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
          100% { transform: translateY(0px); }
        }
        .animate-card-float-1 {
          animation: cardFloat1 6s ease-in-out infinite;
        }

        @keyframes cardFloat2 {
          0% { transform: translateY(0px); }
          50% { transform: translateY(10px); }
          100% { transform: translateY(0px); }
        }
        .animate-card-float-2 {
          animation: cardFloat2 6.5s ease-in-out infinite;
        }

        @keyframes cardFloat3 {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
          100% { transform: translateY(0px); }
        }
        .animate-card-float-3 {
          animation: cardFloat3 7s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
  