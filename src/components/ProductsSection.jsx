// src/components/ProductsSection.jsx
import React, { useState } from "react";
import Weekly from "../img/Weekly_Veg_Basket.png";
import Breakfast from "../img/Breakfast_Essentials_Pack.png";
import FruitBox from "../img/Fruit_Mix_Box.png";
import FamilyKit from "../img/Family_Staples_Kit.png";

const products = [
  {
    name: "Weekly Veg Basket",
    tag: "Combo",
    price: "₹399",
    unit: "per basket",
    image: Weekly ,
    shortDesc: "Fresh mixed vegetables for a full week of cooking.",
    longDesc:
      "A carefully curated mix of seasonal vegetables – ideal for everyday cooking. Includes leafy greens, roots, gourds and more so you don’t have to plan every item separately.",
  },
  {
    name: "Breakfast Essentials Pack",
    tag: "Best Seller",
    price: "₹299",
    unit: "per pack",
    image:Breakfast,
    shortDesc: "Everything you need for a quick breakfast.",
    longDesc:
      "Start your day easily with breakfast staples like bread, spreads, cereals and basic accompaniments. Perfect for busy mornings and small families.",
  },
  {
    name: "Fruit Mix Box",
    tag: "New",
    price: "₹349",
    unit: "per box",
    image: FruitBox ,
    shortDesc: "Colorful mixed fruits for the whole family.",
    longDesc:
      "A handpicked selection of seasonal fruits – ideal for snacking, salads and desserts. Balanced mix of sweet, tangy and juicy favorites.",
  },
  {
    name: "Family Staples Kit",
    tag: "Value Pack",
    price: "₹899",
    unit: "per kit",
    image: FamilyKit,
    shortDesc: "Rice, dals, oils and basics in one kit.",
    longDesc:
      "A value pack of everyday staples – rice, pulses, flour and cooking oil. Designed to cover a family’s monthly basics at a smart price.",
  },
];

const ProductsSection = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const openOrderPopup = (product) => {
    setSelectedProduct(product);
    setQuantity(1);
  };

  const closeOrderPopup = () => {
    setSelectedProduct(null);
  };

  const changeQuantity = (delta) => {
    setQuantity((prev) => {
      const next = prev + delta;
      if (next < 1) return 1;
      if (next > 10) return 10; // max 10 units
      return next;
    });
  };

  const getTotalPrice = () => {
    if (!selectedProduct) return "";
    const numeric = Number(
      selectedProduct.price.replace(/[^\d]/g, "")
    ); // remove ₹, etc.
    if (Number.isNaN(numeric)) return selectedProduct.price;
    const total = numeric * quantity;
    return `₹${total.toLocaleString("en-IN")}`;
  };

  return (
    <>
      <section
        id="products"
        className="bg-gradient-to-b from-emerald-50 via-white to-emerald-50/40 py-14 sm:py-16 lg:py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-2">
                All Products & Combos
              </h2>
              <p className="text-sm sm:text-base text-gray-600 max-w-xl">
                Explore curated combos and daily essentials that fit every
                household and budget.
              </p>
            </div>

            {/* I chose: full catalog = go to #shop section */}
            <a
              href="#shop"
              className="self-start inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gray-900 text-white text-xs sm:text-sm font-semibold hover:bg-black transition shadow-sm hover:shadow-md"
            >
              View full catalog
              <span>→</span>
            </a>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {products.map((p, index) => (
              <article
                key={p.name}
                className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
                style={{
                  animation: `productsFadeUp 0.${4 + index}s ease-out both`,
                }}
              >
                {/* Image with subtle overlay */}
                <div className="relative h-40 sm:h-44 overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/5 to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/90 text-[11px] font-semibold text-emerald-700">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      {p.tag}
                    </span>
                  </div>
                </div>

                <div className="p-4 sm:p-5 flex flex-col gap-2">
                  <h3 className="text-sm sm:text-base font-semibold text-gray-900 group-hover:text-emerald-700 transition-colors">
                    {p.name}
                  </h3>
                  <p className="text-xs text-gray-500">{p.shortDesc}</p>
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex flex-col">
                      <span className="text-sm sm:text-base font-extrabold text-emerald-700">
                        {p.price}
                      </span>
                      <span className="text-[10px] text-gray-400">
                        {p.unit}
                      </span>
                    </div>
                    <button
                      onClick={() => openOrderPopup(p)}
                      className="text-[11px] sm:text-xs font-semibold text-emerald-700 hover:text-emerald-900 bg-emerald-50 hover:bg-emerald-100 px-3 py-1.5 rounded-lg transition"
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* section animation keyframes */}
        <style>{`
          @keyframes productsFadeUp {
            0% { opacity: 0; transform: translateY(18px); }
            100% { opacity: 1; transform: translateY(0); }
          }
        `}</style>
      </section>

      {/* ORDER POPUP / MODAL */}
      {selectedProduct && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4 sm:px-6"
          onClick={closeOrderPopup}
        >
          <div
            className="relative w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden animate-order-modal"
            onClick={(e) => e.stopPropagation()} // don’t close when clicking inside
          >
            {/* HEADER */}
            <div className="flex items-center justify-between px-4 sm:px-6 py-3 border-b border-gray-100 bg-gradient-to-r from-emerald-50 via-white to-lime-50">
              <div>
                <p className="text-[11px] sm:text-xs uppercase tracking-[0.2em] text-emerald-500">
                  Quick Order
                </p>
                <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-900">
                  {selectedProduct.name}
                </h3>
              </div>
              <button
                onClick={closeOrderPopup}
                className="h-8 w-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 text-sm"
                aria-label="Close order popup"
              >
                ✕
              </button>
            </div>

            {/* BODY */}
            <div className="px-4 sm:px-6 py-5 sm:py-6 max-h-[80vh] overflow-y-auto">
              <div className="grid md:grid-cols-2 gap-6 lg:gap-10 items-start">
                {/* LEFT: image with zoom + small info badges */}
                <div>
                  <div className="group relative rounded-3xl overflow-hidden bg-gray-100 shadow-[0_20px_60px_rgba(15,23,42,0.2)]">
                    <div className="overflow-hidden">
                      <img
                        src={selectedProduct.image}
                        alt={selectedProduct.name}
                        className="w-full h-64 sm:h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    {/* corner badges */}
                    <div className="absolute top-3 left-3 flex flex-wrap gap-2 text-[10px] sm:text-xs">
                      <span className="px-2.5 py-1 rounded-full bg-emerald-600 text-white font-semibold shadow">
                        In stock
                      </span>
                      <span className="px-2.5 py-1 rounded-full bg-white/90 text-emerald-700 font-semibold shadow">
                        Free delivery over ₹499
                      </span>
                    </div>
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[10px] sm:text-xs text-white/90">
                      <span className="inline-flex items-center gap-1">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                        Fresh & quality checked
                      </span>
                      <span>Secure checkout</span>
                    </div>
                  </div>
                </div>

                {/* RIGHT: order details/form */}
                <div className="space-y-4">
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-1">
                      {selectedProduct.name}
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-500 mb-2">
                      {selectedProduct.tag} • {selectedProduct.unit}
                    </p>
                    <p className="text-sm sm:text-base text-gray-600">
                      {selectedProduct.longDesc}
                    </p>
                  </div>

                  {/* price & qty */}
                  <div className="rounded-2xl bg-gray-50 border border-gray-100 p-3 sm:p-4 space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex flex-col">
                        <span className="text-sm text-gray-500">Price</span>
                        <span className="text-lg sm:text-xl font-extrabold text-emerald-700">
                          {selectedProduct.price}
                        </span>
                        <span className="text-[11px] text-gray-400">
                          {selectedProduct.unit}
                        </span>
                      </div>
                      {/* quantity selector */}
                      <div className="flex flex-col items-end gap-1">
                        <span className="text-xs text-gray-500">
                          Quantity
                        </span>
                        <div className="inline-flex items-center rounded-full border border-gray-200 bg-white overflow-hidden">
                          <button
                            type="button"
                            onClick={() => changeQuantity(-1)}
                            className="px-3 py-1.5 text-sm font-semibold text-gray-600 hover:bg-gray-100"
                          >
                            −
                          </button>
                          <span className="px-3 py-1.5 text-sm font-semibold text-gray-900 min-w-[2.5rem] text-center">
                            {quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() => changeQuantity(1)}
                            className="px-3 py-1.5 text-sm font-semibold text-gray-600 hover:bg-gray-100"
                          >
                            +
                          </button>
                        </div>
                        <span className="text-[10px] text-gray-400">
                          Max 10 units per order
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t border-dashed border-gray-200">
                      <span className="text-xs sm:text-sm text-gray-600">
                        Estimated total
                      </span>
                      <span className="text-base sm:text-lg font-extrabold text-emerald-700">
                        {getTotalPrice()}
                      </span>
                    </div>
                  </div>

                  {/* delivery info */}
                  <div className="rounded-2xl border border-emerald-100 bg-emerald-50/70 px-3.5 py-3 text-[11px] sm:text-xs text-gray-700 flex flex-col gap-1.5">
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-emerald-500" />
                      <span>Same-day delivery available in selected areas.</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-emerald-500" />
                      <span>No-questions-asked replacement for damaged items.</span>
                    </div>
                  </div>

                  {/* actions */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      type="button"
                      className="flex-1 inline-flex items-center justify-center px-4 py-2.5 rounded-xl bg-emerald-600 text-white text-sm font-semibold hover:bg-emerald-700 shadow-md hover:shadow-lg transition"
                    >
                      Confirm & Add to cart
                    </button>
                    <button
                      type="button"
                      className="flex-1 inline-flex items-center justify-center px-4 py-2.5 rounded-xl border border-gray-200 text-sm font-semibold text-gray-800 bg-white hover:border-emerald-300 hover:text-emerald-700 transition"
                    >
                      Buy now
                    </button>
                  </div>

                  <button
                    type="button"
                    onClick={closeOrderPopup}
                    className="w-full text-[11px] sm:text-xs text-gray-500 hover:text-gray-700 mt-1 text-center"
                  >
                    Close and keep browsing
                  </button>
                </div>
              </div>
            </div>

            {/* bottom accent bar */}
            <div className="h-1 w-full bg-gradient-to-r from-emerald-400 via-lime-400 to-emerald-400" />
          </div>

          {/* modal animation css */}
          <style>{`
            @keyframes orderModalIn {
              0% { opacity: 0; transform: translateY(18px) scale(0.98); }
              100% { opacity: 1; transform: translateY(0) scale(1); }
            }
            .animate-order-modal {
              animation: orderModalIn 0.25s ease-out;
            }
          `}</style>
        </div>
      )}
    </>
  );
};

export default ProductsSection;
