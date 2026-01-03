// src/components/Footer.jsx
import React, { useState } from "react";
import greenbaskerlogo from "../img/Green_basker_logo.jpg";
import instgram from "../img/instagram.png";
import facebook from "../img/facebook.png";
import twitter from "../img/twitter.png";
import youtube from "../img/youtube.png";
import whatsapp from "../img/whatsapp.png";

const footerLinks = {
  company: [
    { label: "About Us", href: "#about" },
    { label: "Blog", href: "#blog" },
    { label: "All Products", href: "#products" },
    { label: "Locations Map", href: "#locations" },
    { label: "Contact Us", href: "#contact" },
  ],
  support: [
    { label: "Order Tracking", href: "#orders" },
    { label: "My Account", href: "#account" },
    { label: "Wishlist", href: "#wishlist" },
    { label: "FAQ", href: "#faq" },
    { label: "Help Center", href: "#help" },
  ],
  legal: [
    { label: "Privacy Policy", key: "privacy" },
    { label: "Terms & Conditions", key: "terms" },
    { label: "Cookies", key: "cookies" },
  ],
};

const Footer = () => {
  const [openLegal, setOpenLegal] = useState(null); // 'privacy' | 'terms' | 'cookies' | null

  const closeLegal = () => setOpenLegal(null);

  const renderLegalContent = (key) => {
    switch (key) {
      case "privacy":
        return (
          <>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Privacy Policy</h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              We respect your privacy. GreenBasket collects minimal information required to process
              orders and improve your experience. We never sell personal data. For details on what we
              collect, how we use it, and your rights, visit the full privacy policy page (or contact support).
            </p>
          </>
        );
      case "terms":
        return (
          <>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Terms & Conditions</h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              By using GreenBasket you agree to the terms that govern ordering, delivery, refunds,
              and use of the platform. Orders are subject to our acceptance, availability and pricing.
              For full details, read the complete Terms & Conditions.
            </p>
          </>
        );
      case "cookies":
        return (
          <>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Cookies</h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              We use cookies and similar technologies to improve site performance, personalize content,
              and provide analytics. You can control cookie settings through your browser. Essential cookies
              are required for the service to work.
            </p>
          </>
        );
      default:
        return null;
    }
  };

  // Social icons array using imported images (keeps the same external links)
  const socialIcons = [
    { label: "Facebook", img: facebook, href: "https://facebook.com" },
    { label: "Instagram", img: instgram, href: "https://instagram.com" },
    { label: "Twitter", img: twitter, href: "https://twitter.com" },
    { label: "YouTube", img: youtube, href: "https://youtube.com" },
    { label: "WhatsApp", img: whatsapp, href: "https://wa.me/" },
  ];

  return (
    <footer className="relative overflow-hidden bg-gradient-to-t from-[#071021] via-gray-900 to-[#0b1720] text-gray-300 pt-12 pb-6 mt-16">
      {/* subtle decorative glows */}
      <div aria-hidden className="pointer-events-none absolute -left-20 top-0 h-64 w-64 rounded-full bg-emerald-500/6 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-lime-400/6 blur-[90px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* top section */}
        <div className="grid gap-8 lg:gap-10 md:grid-cols-2 lg:grid-cols-4 pb-10 border-b border-white/6">
          {/* Brand (logo image) + short info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <a href="/" className="flex items-center">
                <img
                  src={greenbaskerlogo}
                  alt="GreenBasket - Premium Online Grocery Store Logo | Fresh Groceries Delivered"
                  loading="lazy"
                  className="h-12 w-auto object-contain rounded-md shadow-sm"
                  style={{ maxWidth: 220 }}
                  width="220"
                  height="60"
                />
              </a>
            </div>

            <p className="text-sm text-gray-400 max-w-sm">
              Your trusted online grocery partner for fresh produce, dairy, pantry staples and more – carefully packed and delivered to your doorstep.
            </p>

            {/* contact */}
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <span className="mt-0.5 text-emerald-400">📍</span>
                <span>GreenBasket HQ, Main Street, Your City</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-emerald-400">📞</span>
                <a href="tel:+915551234567" className="hover:text-emerald-300 transition-colors">
                  +91 55551 234 567
                </a>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-emerald-400">✉️</span>
                <a href="mailto:support@greenbasket.com" className="hover:text-emerald-300 transition-colors">
                  support@greenbasket.com
                </a>
              </div>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold text-gray-100 mb-4 relative inline-flex items-center gap-2">
              Company
              <span className="h-px w-8 bg-gradient-to-r from-emerald-400 to-transparent" />
            </h4>
            <ul className="space-y-2 text-sm">
              {footerLinks.company.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="group inline-flex items-center gap-1 hover:text-emerald-300 transition-colors">
                    <span className="h-[2px] w-0 group-hover:w-3 bg-emerald-400 rounded-full transition-all" />
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-sm font-semibold text-gray-100 mb-4 relative inline-flex items-center gap-2">
              Customer Support
              <span className="h-px w-8 bg-gradient-to-r from-emerald-400 to-transparent" />
            </h4>
            <ul className="space-y-2 text-sm">
              {footerLinks.support.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="group inline-flex items-center gap-1 hover:text-emerald-300 transition-colors">
                    <span className="h-[2px] w-0 group-hover:w-3 bg-emerald-400 rounded-full transition-all" />
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter + social + payments */}
          <div className="space-y-5">
            <h4 className="text-sm font-semibold text-gray-100 mb-2">Subscribe & Save</h4>
            <p className="text-xs text-gray-400">
              Get exclusive offers, seasonal combos, and grocery tips straight to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-3 py-2 rounded-xl bg-transparent border border-gray-800 text-xs text-gray-200 placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-emerald-400"
              />
              <button
                type="submit"
                className="px-4 py-2 rounded-xl bg-emerald-500 text-xs font-semibold text-gray-900 hover:bg-emerald-400 transition shadow-sm"
              >
                Subscribe
              </button>
            </form>

            {/* Socials (image icons) */}
            <div>
              <p className="text-xs text-gray-400 mb-2">Follow GreenBasket</p>
              <div className="flex gap-3">
                {socialIcons.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="h-9 w-9 rounded-full bg-transparent border border-gray-800 flex items-center justify-center overflow-hidden p-1 hover:scale-110 transform transition shadow-sm hover:shadow-[0_6px_18px_rgba(16,185,129,0.12)]"
                  >
                    <img src={s.img} alt={`Follow GreenBasket on ${s.label} - ${s.label} social media page`} className="h-full w-full object-contain" width="36" height="36" loading="lazy" />
                  </a>
                ))}
              </div>
            </div>

            {/* Payments */}
            <div>
              <p className="text-xs text-gray-400 mb-2">We accept</p>
              <div className="flex flex-wrap gap-2 text-[10px]">
                {["UPI", "Visa", "MasterCard", "RuPay", "NetBanking"].map((p) => (
                  <div
                    key={p}
                    className="px-3 py-1 rounded-lg border border-gray-800/90 text-gray-200 transition text-[10px] tracking-wide"
                  >
                    {p}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* bottom bar */}
        <div className="pt-4 sm:pt-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] sm:text-xs text-gray-400">
          <p className="text-center sm:text-left">
            © {new Date().getFullYear()}{" "}
            <span className="text-gray-200 font-semibold">GreenBasket</span>. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            {footerLinks.legal.map((l) => (
              <button
                key={l.key}
                onClick={() => setOpenLegal(l.key)}
                className="hover:text-emerald-300 transition-colors relative group text-left"
                aria-label={l.label}
              >
                <span>{l.label}</span>
                <span className="block h-[1px] w-0 group-hover:w-full bg-emerald-400 transition-all" />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Legal modal */}
      {openLegal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4 sm:px-6"
          onClick={closeLegal}
        >
          <div
            className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between px-4 sm:px-6 py-4 border-b border-gray-100">
              <div>{renderLegalContent(openLegal)}</div>
              <button
                onClick={closeLegal}
                className="ml-4 h-9 w-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600"
                aria-label="Close"
              >
                ✕
              </button>
            </div>

            <div className="px-4 sm:px-6 py-4 text-sm text-gray-600">
              <p>
                For the full policy text, please visit the dedicated page on your site or contact support.
              </p>
            </div>

            <div className="px-4 sm:px-6 py-3 flex items-center justify-end gap-3 border-t border-gray-100">
              <button
                onClick={closeLegal}
                className="px-3 py-2 rounded-md text-sm text-gray-700 hover:bg-gray-100 transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* small CSS for subtle pulse or accents */}
      <style>{`
        @keyframes footerPulse {
          0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(52,211,153,0.08); }
          70% { transform: scale(1.02); box-shadow: 0 0 0 18px rgba(52,211,153,0); }
          100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(52,211,153,0); }
        }
        .animate-footer-pulse { animation: footerPulse 3s ease-out infinite; }
      `}</style>
    </footer>
  );
};

export default Footer;
