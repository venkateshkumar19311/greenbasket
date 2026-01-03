// src/components/LocationsSection.jsx
import React from "react";

const locations = [
  { city: "Chennai", detail: "City Center • 8AM – 9PM", zone: "Metro Hub" },
  {
    city: "Coimbatore",
    detail: "Saravanampatti • 8AM – 9PM",
    zone: "City & Suburbs",
  },
  {
    city: "Madurai",
    detail: "Main Market Road • 7AM – 9PM",
    zone: "Heritage City",
  },
  {
    city: "Theni",
    detail: "Theni Town & Nearby • 7AM – 9PM",
    zone: "Expanding Service",
  },
];

const LocationsSection = () => {
  return (
    <section
      id="locations"
      className="relative bg-gradient-to-b from-white via-emerald-50/40 to-white py-14 sm:py-16 lg:py-20"
    >
      {/* soft blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-0 h-64 w-64 rounded-full bg-emerald-100 blur-3xl"
      />
      {/* <div
        aria-hidden
        className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-lime-100 blur-3xl"
      /> */}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* LEFT: heading + list */}
        <div>
          {/* pill heading (new trendy chip) */}
          <div className="relative mb-4 inline-flex items-center gap-2 rounded-full border border-green-200 bg-white px-5 py-2 shadow-sm">
            <span
              aria-hidden="true"
              className="h-2 w-2 animate-ping rounded-full bg-green-500"
            />
            <span className="h-2 w-2 rounded-full bg-green-500 absolute left-4" />
            <span className="pl-4 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.55em] text-green-600">
              Service Areas
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-3">
            GreenBasket Delivery Map
          </h2>
          <p className="text-sm sm:text-base text-gray-600 mb-5 max-w-xl">
            Check where GreenBasket is active today. We’re gradually expanding
            to more neighborhoods, including{" "}
            <span className="font-semibold text-emerald-700">Theni</span> and
            nearby areas.
          </p>

          {/* small legend */}
          <div className="flex flex-wrap gap-3 mb-5 text-[11px] sm:text-xs">
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 border border-emerald-100">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Metro & Main Cities
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-lime-50 px-3 py-1 border border-lime-100">
              <span className="h-2 w-2 rounded-full bg-lime-500" />
              Expanding Zones
            </span>
          </div>

          <ul className="space-y-3 text-sm sm:text-base">
            {locations.map((l) => (
              <li
                key={l.city}
                className="flex items-start gap-3 rounded-2xl bg-white/90 backdrop-blur border border-gray-100 px-4 py-3 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-transform"
              >
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-emerald-500 shadow-[0_0_0_4px_rgba(16,185,129,0.15)]" />
                <div>
                  <p className="font-semibold text-gray-900 flex items-center gap-2">
                    {l.city}
                    {l.city === "Theni" && (
                      <span className="text-[10px] rounded-full bg-emerald-50 px-2 py-0.5 text-emerald-700 border border-emerald-100">
                        New
                      </span>
                    )}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-500">
                    {l.detail}
                  </p>
                  <p className="text-[11px] text-emerald-600 mt-0.5">
                    {l.zone}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          <p className="mt-4 text-[11px] sm:text-xs text-gray-500">
            Don’t see your area yet?{" "}
            <span className="font-semibold text-emerald-700">
              We’re expanding every month
            </span>{" "}
            – follow our updates or contact support for upcoming locations.
          </p>
        </div>

        {/* RIGHT: stylised map card */}
        <div className="relative">
          <div className="rounded-3xl bg-gray-900 text-white h-64 sm:h-72 lg:h-80 shadow-[0_24px_80px_rgba(15,23,42,0.6)] overflow-hidden relative">
            {/* subtle gradient overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(52,211,153,0.32),transparent_55%),radial-gradient(circle_at_bottom,_rgba(190,242,100,0.25),transparent_55%)]" />

            {/* fake “grid map” */}
            <div className="absolute inset-4 rounded-2xl border border-white/10 overflow-hidden">
              {/* background grid */}
              <div className="absolute inset-0 opacity-30">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.15)_1px,transparent_1px)] bg-[length:24px_24px]" />
              </div>

              {/* animated "delivery zone" blobs */}
              <div className="absolute -left-12 top-6 h-36 w-36 rounded-full bg-emerald-500/25 blur-3xl" />
              <div className="absolute right-0 bottom-0 h-40 w-40 rounded-full bg-lime-400/25 blur-3xl" />

              {/* map header bar */}
              <div className="relative flex items-center justify-between px-3 sm:px-4 py-2 border-b border-white/10 bg-gray-900/70">
                <div>
                  <p className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-emerald-300">
                    Live Service Map
                  </p>
                  <p className="text-xs sm:text-sm text-gray-200">
                    Chennai • Coimbatore • Madurai • Theni
                  </p>
                </div>
                <div className="flex items-center gap-1">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[10px] text-emerald-100">
                    Online
                  </span>
                </div>
              </div>

              {/* map “pins” */}
              <div className="relative h-full w-full px-4 py-3 sm:px-6 sm:py-4">
                {/* Chennai */}
                <MapPin
                  label="Chennai"
                  sub="Metro Hub"
                  className="left-[16%] top-[30%]"
                  tone="emerald"
                />
                {/* Coimbatore */}
                <MapPin
                  label="Coimbatore"
                  sub="City & Suburbs"
                  className="left-[32%] bottom-[18%]"
                  tone="lime"
                />
                {/* Madurai */}
                <MapPin
                  label="Madurai"
                  sub="Heritage City"
                  className="right-[22%] bottom-[22%]"
                  tone="emerald"
                />
                {/* Theni – highlighted */}
                <MapPin
                  label="Theni"
                  sub="New Service"
                  className="right-[10%] bottom-[10%]"
                  tone="accent"
                />

                {/* mini legend at bottom */}
                <div className="absolute left-4 right-4 bottom-3 flex flex-wrap items-center justify-between gap-2 text-[10px] sm:text-xs text-gray-200">
                  <div className="inline-flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                    <span>Active delivery hub</span>
                  </div>
                  <div className="inline-flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-lime-300" />
                    <span>Expanding zone</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* glow shadow under card */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-8 -bottom-4 h-10 rounded-full bg-emerald-300/30 blur-2xl"
          />
        </div>
      </div>

      {/* simple pin animation CSS */}
      <style>{`
        @keyframes mapPulse {
          0% { transform: scale(1); opacity: 0.8; }
          60% { transform: scale(1.35); opacity: 0; }
          100% { transform: scale(1.35); opacity: 0; }
        }
      `}</style>
    </section>
  );
};

// small sub-component for map pins
const MapPin = ({ label, sub, className = "", tone = "emerald" }) => {
  const colorClasses =
    tone === "accent"
      ? {
          dot: "bg-emerald-300",
          pulse: "bg-emerald-300/60",
          chip: "bg-emerald-500/90 text-white",
        }
      : tone === "lime"
      ? {
          dot: "bg-lime-300",
          pulse: "bg-lime-300/60",
          chip: "bg-gray-900/80 text-gray-100",
        }
      : {
          dot: "bg-emerald-400",
          pulse: "bg-emerald-400/60",
          chip: "bg-gray-900/80 text-gray-100",
        };

  return (
    <div
      className={`absolute ${className} group transition-transform duration-200`}
    >
      {/* pulsing circle */}
      <span
        className={`absolute -inset-2 rounded-full ${colorClasses.pulse} opacity-70 animate-[mapPulse_1.8s_ease-out_infinite]`}
      />
      {/* pin dot */}
      <span
        className={`relative block h-3.5 w-3.5 rounded-full border border-white/80 ${colorClasses.dot} shadow`}
      />
      {/* label chip */}
      <div
        className={`mt-1 inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[10px] sm:text-[11px] ${colorClasses.chip} shadow-sm border border-white/10 group-hover:scale-105 transition-transform`}
      >
        <span className="font-semibold">{label}</span>
        {sub && (
          <span className="hidden sm:inline text-[10px] text-emerald-100/90">
            • {sub}
          </span>
        )}
      </div>
    </div>
  );
};

export default LocationsSection;
