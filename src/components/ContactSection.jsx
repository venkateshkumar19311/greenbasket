// src/components/ContactSection.jsx
import React from "react";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="bg-gray-950 text-gray-100 py-14 sm:py-16 lg:py-20"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10">
        <div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
            Contact GreenBasket
          </h2>
          <p className="text-sm sm:text-base text-gray-400 mb-5">
            Have a question about orders, payments or partnership? Send us a
            message and our team will get back to you.
          </p>
          <div className="space-y-3 text-sm sm:text-base">
            <div className="flex items-center gap-3">
              <span className="text-emerald-400">📍</span>
              <span>GreenBasket HQ, Main Street, Your City</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-emerald-400">📞</span>
              <a href="tel:+915551234567" className="hover:text-emerald-300">
                +91 55551 234 567
              </a>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-emerald-400">✉️</span>
              <a
                href="mailto:support@greenbasket.com"
                className="hover:text-emerald-300"
              >
                support@greenbasket.com
              </a>
            </div>
          </div>
        </div>
        <div className="bg-gray-900 rounded-3xl border border-gray-800 p-4 sm:p-6 shadow-[0_24px_80px_rgba(0,0,0,0.65)]">
          <form
            className="space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs text-gray-400 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 rounded-xl bg-gray-950 border border-gray-700 text-sm text-gray-100 focus:outline-none focus:ring-1 focus:ring-emerald-400"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-xs text-gray-400 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-3 py-2 rounded-xl bg-gray-950 border border-gray-700 text-sm text-gray-100 focus:outline-none focus:ring-1 focus:ring-emerald-400"
                  placeholder="name@email.com"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs text-gray-400 mb-1">
                Subject
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 rounded-xl bg-gray-950 border border-gray-700 text-sm text-gray-100 focus:outline-none focus:ring-1 focus:ring-emerald-400"
                placeholder="Order issue, App feedback, Partnership..."
              />
            </div>
            <div>
              <label className="block text-xs text-gray-400 mb-1">
                Message
              </label>
              <textarea
                rows={4}
                className="w-full px-3 py-2 rounded-xl bg-gray-950 border border-gray-700 text-sm text-gray-100 focus:outline-none focus:ring-1 focus:ring-emerald-400"
                placeholder="Tell us how we can help..."
              />
            </div>
            <button className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-emerald-500 text-sm font-semibold text-gray-950 hover:bg-emerald-400 transition shadow-md">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
