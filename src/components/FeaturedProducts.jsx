// FeaturedProductsFinal.jsx
import React, { useEffect, useMemo, useRef, useState } from "react";


import honeyImg from "../img/hony.png";
import eden from "../img/Eden_Micro_Greens.png";
import velvet from "../img/Velvet_Berry.png";
import solaris from "../img/Solaris_Citrus.png";
import ceremonial from "../img/Zen_Ceremonial.png";
import mushroomsImg from "../img/Foraged_Mushrooms.png"


/**
 * FeaturedProductsFinal — Responsive, professional 3D tilt + parallax carousel
 * - Centered layout on all breakpoints
 * - Touch & pointer support
 * - Respect prefers-reduced-motion
 * - Replace / pass `products` prop to override defaultProducts
 *
 * Usage:
 * <FeaturedProductsFinal />
 *
 * Notes:
 * - Ensure Tailwind CSS is configured.
 * - If bundler complains about imports, change to require(...) or adjust path.
 */

const defaultProducts = [
  {
    id: "artisan-mushroom",
    title: "Wildwood Foraged Mushrooms",
    subtitle: "Organic • Dawn Harvest",
    price: "₹1,499",
    image: mushroomsImg,
  },
  {
    id: "aurora-honey",
    title: "Aurora Honey Elixir",
    subtitle: "Cold-spun • Single Bloom",
    price: "₹2,499",
    image: honeyImg,
  },
  {
    id: "solaris-citrus",
    title: "Solaris Citrus Press",
    subtitle: "Fresh-pressed • Vitamin Rich",
    price: "₹1,699",
    image: solaris,
  },
  {
    id: "eden-greens",
    title: "Eden Micro Greens",
    subtitle: "Hydroponic • Chef Series",
    price: "₹1,999",
    image: eden ,
  },
  {
    id: "velvet-berries",
    title: "Velvet Berry Mélange",
    subtitle: "Hand-picked • Morning Chill",
    price: "₹2,199",
    image: velvet ,
  },
  {
    id: "zen-matcha",
    title: "Zen Ceremonial Matcha",
    subtitle: "Stone-ground • Reserve Grade",
    price: "₹2,799",
    image: ceremonial,
  },
];

export default function FeaturedProductsFinal({ products: productsProp }) {
  const products = useMemo(() => productsProp ?? defaultProducts, [productsProp]);
  const len = products.length;

  // state
  const [active, setActive] = useState(0);
  const [tilt, setTilt] = useState({ x: 0, y: 0, scale: 1 });
  const [isHovering, setIsHovering] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  // refs
  const containerRef = useRef(null);
  const centerCardRef = useRef(null);
  const autoplayRef = useRef(null);
  const touchStartX = useRef(null);

  // autoplay
  useEffect(() => {
    if (prefersReducedMotion) return;
    startAutoplay();
    return stopAutoplay;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active, prefersReducedMotion]);

  function startAutoplay() {
    stopAutoplay();
    autoplayRef.current = setInterval(() => {
      setActive((s) => (s + 1) % len);
      setTilt({ x: 0, y: 0, scale: 1 });
    }, 4800);
  }
  function stopAutoplay() {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
      autoplayRef.current = null;
    }
  }

  // pause on hover/focus
  useEffect(() => {
    if (isHovering) stopAutoplay();
    else if (!prefersReducedMotion) startAutoplay();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isHovering, prefersReducedMotion]);

  // keyboard nav
  useEffect(() => {
    function onKey(e) {
      if (e.key === "ArrowRight") setActive((s) => (s + 1) % len);
      if (e.key === "ArrowLeft") setActive((s) => (s - 1 + len) % len);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [len]);

  // pointer/touch for tilt + parallax
  const handlePointerMove = (e) => {
    if (prefersReducedMotion) return;
    const el = centerCardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    const px = (clientX - rect.left) / rect.width; // 0..1
    const py = (clientY - rect.top) / rect.height; // 0..1
    const max = rect.width < 420 ? 8 : 12; // less tilt on small screens
    const rotateY = (px - 0.5) * max * 1.05;
    const rotateX = (0.5 - py) * max * 0.95;
    const scale = rect.width < 420 ? 1.02 : 1.04;
    setTilt({ x: rotateX, y: rotateY, scale });
    if (containerRef.current) {
      containerRef.current.style.setProperty("--mx", `${(px - 0.5) * -30}px`);
      containerRef.current.style.setProperty("--my", `${(py - 0.5) * -30}px`);
    }
  };

  const handlePointerLeave = () => {
    setTilt({ x: 0, y: 0, scale: 1 });
    if (containerRef.current) {
      containerRef.current.style.setProperty("--mx", `0px`);
      containerRef.current.style.setProperty("--my", `0px`);
    }
  };

  // touch swipe support for mobile
  const onTouchStart = (e) => {
    touchStartX.current = e.touches?.[0]?.clientX ?? null;
    setIsHovering(true);
    stopAutoplay();
  };
  const onTouchMove = (e) => {
    if (!touchStartX.current) return;
    const currentX = e.touches?.[0]?.clientX ?? null;
    if (!currentX) return;
    const dx = currentX - touchStartX.current;
    // small threshold
    if (Math.abs(dx) > 40) {
      if (dx < 0) setActive((s) => (s + 1) % len);
      else setActive((s) => (s - 1 + len) % len);
      touchStartX.current = currentX; // reset to allow multi-swipe
    }
  };
  const onTouchEnd = () => {
    touchStartX.current = null;
    setIsHovering(false);
    if (!prefersReducedMotion) startAutoplay();
  };

  // relative index (center=0)
  const relIndex = (i) => {
    const diff = (i - active + len) % len;
    if (diff === 0) return 0;
    if (diff === 1) return 1;
    if (diff === 2) return 2;
    if (diff === len - 1) return -1;
    if (diff === len - 2) return -2;
    return 3; // offstage
  };

  // transforms responsive (smaller shifts for small screens)
  const transformFor = (pos) => {
    return (() => {
      switch (pos) {
        case 0:
          return `translateX(0) translateZ(140px) scale(${tilt.scale}) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`;
        case 1:
          return "translateX(140px) translateZ(28px) scale(0.92) rotateY(-6deg)";
        case -1:
          return "translateX(-140px) translateZ(28px) scale(0.92) rotateY(6deg)";
        case 2:
          return "translateX(280px) translateZ(-40px) scale(0.82) rotateY(-10deg)";
        case -2:
          return "translateX(-280px) translateZ(-40px) scale(0.82) rotateY(10deg)";
        default:
          return "translateX(0) translateZ(-160px) scale(0.76)";
      }
    })();
  };

  const classesFor = (pos) => {
    if (pos === 0) return "z-50 opacity-100 blur-0 shadow-[0_48px_120px_rgba(16,185,129,0.18)]";
    if (Math.abs(pos) === 1) return "z-40 opacity-90 blur-[0.4px] shadow-[0_36px_100px_rgba(16,185,129,0.12)]";
    if (Math.abs(pos) === 2) return "z-30 opacity-60 blur-[1.2px] shadow-[0_24px_80px_rgba(16,185,129,0.08)]";
    return "z-10 opacity-0 pointer-events-none scale-80";
  };

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden py-16 md:py-20"
      aria-label="Featured Products — immersive carousel"
      style={{
        background: "linear-gradient(180deg,#FFFBF0 0%, #F8FAFC 45%)",
        "--mx": "0px",
        "--my": "0px",
      }}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* Parallax blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-20 top-10 h-72 w-72 rounded-full blur-3xl"
        style={{
          background: "radial-gradient(circle at 30% 30%, rgba(16,185,129,0.14), transparent 45%)",
          transform: "translate(var(--mx), var(--my))",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 bottom-8 h-[20rem] w-[20rem] rounded-full blur-[110px]"
        style={{
          background: "radial-gradient(circle at 70% 70%, rgba(245,158,11,0.10), transparent 35%)",
          transform: "translate(calc(var(--mx) * -0.6), calc(var(--my) * -0.6))",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header (project style) */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center justify-center gap-2 mb-3">
            <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs uppercase tracking-[0.2em] text-green-600 font-semibold">Featured</span>
          </div>
          <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900">Immersive Carousel — Premium Picks</h2>
          <p className="mt-3 text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
            Handpicked organic provisions presented in a tactile 3D carousel. Tap, swipe or hover to explore.
          </p>
        </div>

        {/* Stage: centered */}
        <div
          className="relative mt-10 h-[480px] sm:h-[520px] md:h-[560px] flex items-start justify-center"
          style={{ perspective: "1400px", perspectiveOrigin: "50% 40%" }}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => {
            setIsHovering(false);
            handlePointerLeave();
          }}
        >
          {/* ground vignette */}
          <div className="absolute inset-0 -z-10 flex items-end justify-center pointer-events-none">
            <div className="w-[92%] max-w-6xl rounded-full bg-white/6 h-[220px] blur-3xl" />
          </div>

          <div className="relative w-full max-w-5xl flex items-center justify-center">
            {products.map((p, i) => {
              const pos = relIndex(i);
              const isCenter = pos === 0;
              // responsive card sizes
              const cardBase = "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform-gpu rounded-2xl border bg-white/60 backdrop-blur-md transition-all";
              const widthClass = "w-[360px] sm:w-[400px] md:w-[460px]";
              const heightClass = "h-[420px] sm:h-[460px] md:h-[480px]";
              return (
                <article
                  key={p.id}
                  ref={isCenter ? centerCardRef : null}
                  role="group"
                  aria-roledescription="carousel item"
                  aria-label={`${p.title} — ${p.price}`}
                  tabIndex={isCenter ? 0 : -1}
                  onFocus={() => {
                    setIsHovering(true);
                    stopAutoplay();
                  }}
                  onBlur={() => {
                    setIsHovering(false);
                    if (!prefersReducedMotion) startAutoplay();
                  }}
                  onPointerMove={isCenter ? handlePointerMove : undefined}
                  onPointerLeave={isCenter ? handlePointerLeave : undefined}
                  className={`${cardBase} ${widthClass} ${heightClass} ${classesFor(pos)}`}
                  style={{
                    borderColor: "rgba(255,255,255,0.18)",
                    boxShadow: pos === 0 ? "0 40px 110px rgba(16,185,129,0.12)" : undefined,
                    transformStyle: "preserve-3d",
                    WebkitBackfaceVisibility: "hidden",
                    transform: transformFor(pos),
                    transitionDuration: prefersReducedMotion ? "180ms" : "700ms",
                    transitionTimingFunction: "cubic-bezier(.2,.9,.2,1)",
                  }}
                  onMouseDown={() => {
                    if (!isCenter) setActive(i);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setActive(i);
                    }
                  }}
                >
                  {/* content */}
                  <div className="relative z-20 flex h-full flex-col justify-between p-5 sm:p-6">
                    {/* image */}
                    <div className="relative rounded-xl overflow-hidden border border-white/20 bg-white/30 shadow-[0_22px_60px_rgba(15,118,110,0.06)]">
                      <img
                        src={typeof p.image === "string" ? p.image : p.image.default ?? p.image}
                        alt={`${p.title} - ${p.subtitle} | ${p.price} | Premium curated product at GreenBasket`}
                        className="w-full h-56 sm:h-64 md:h-72 object-cover"
                        loading="lazy"
                        width="460"
                        height="320"
                        draggable={false}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/28 via-transparent to-white/8 pointer-events-none" />
                    </div>

                    {/* meta */}
                    <div className="text-center mt-3">
                      <p className="text-[11px] uppercase tracking-wider text-green-600">Curated</p>
                      <h3 className="mt-2 text-lg sm:text-xl font-semibold text-gray-900">{p.title}</h3>
                      <p className="mt-1 text-sm text-gray-600">{p.subtitle}</p>
                    </div>

                    {/* footer */}
                    <div className="mt-4 flex items-center justify-between rounded-xl border border-white/20 bg-white/5 px-4 py-3">
                      <div>
                        <p className="text-[10px] uppercase tracking-wider text-gray-500">Price</p>
                        <p className="text-xl sm:text-2xl font-semibold text-gray-900">{p.price}</p>
                      </div>
                      <button
                        type="button"
                        className="rounded-full px-4 py-2 text-sm font-semibold uppercase tracking-wider bg-green-600 text-white shadow hover:shadow-md transform hover:-translate-y-0.5 transition"
                        onClick={() => {
                          // placeholder action
                          // integrate with cart or product page
                          setActive(i);
                        }}
                      >
                        Explore
                      </button>
                    </div>
                  </div>

                  {/* soft overlay rim */}
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 rounded-2xl"
                    style={{
                      boxShadow:
                        pos === 0
                          ? "inset 0 1px 0 rgba(255,255,255,0.03), 0 40px 110px rgba(16,185,129,0.08)"
                          : "inset 0 1px 0 rgba(255,255,255,0.02)",
                      background: "linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0))",
                    }}
                  />
                </article>
              );
            })}
          </div>
        </div>

        {/* Controls */}
        <div className="mt-8 flex items-center justify-center gap-6">
          <button
            onClick={() => setActive((s) => (s - 1 + len) % len)}
            aria-label="Previous"
            className="rounded-full p-3 bg-white/90 shadow-sm hover:scale-105 transition"
            title="Previous"
          >
            <span className="text-lg font-bold">‹</span>
          </button>

          <div className="flex gap-2 items-center">
            {products.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-2 w-10 rounded-full transition-all ${i === active ? "bg-green-600 scale-105" : "bg-white/40"}`}
                aria-current={i === active ? "true" : "false"}
              />
            ))}
          </div>

          <button
            onClick={() => setActive((s) => (s + 1) % len)}
            aria-label="Next"
            className="rounded-full p-3 bg-white/90 shadow-sm hover:scale-105 transition"
            title="Next"
          >
            <span className="text-lg font-bold">›</span>
          </button>
        </div>
      </div>
    </section>
  );
}

/* -------------------------
  Hook: prefers-reduced-motion
   ------------------------- */
function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReduced(!!(mq && mq.matches));
    onChange();
    if (!mq) return;
    if (mq.addEventListener) mq.addEventListener("change", onChange);
    else mq.addListener(onChange);
    return () => {
      if (mq.removeEventListener) mq.removeEventListener("change", onChange);
      else mq.removeListener(onChange);
    };
  }, []);
  return reduced;
}
