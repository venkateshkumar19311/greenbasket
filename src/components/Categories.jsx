// ...existing code...
import React from "react";
import fresh from "../img/copy-space-background-with-healthy-snack.jpg";
import dairy from "../img/raw-fresh-white-chicken-eggs-placed-stone-surface.jpg";
import staplesImg from "../img/top-view-flour-eggs-cooking.jpg";
import snacksImg from "../img/top-view-fruit-vegetables-reusable-bags-with-bread.jpg";
import breads from "../img/Generated.png";
import frozen from "../img/Generated_Image.png";
import cooking from "../img/Cooking_Pastes.png";
import household from "../img/Household.png";

const categories = [
  {
    title: "Fresh Produce",
    description: "Fruits, vegetables, and organic farm-fresh items.",
    image: fresh,
  },
  {
    title: "Dairy & Eggs",
    description: "Milk, cheese, yogurt, butter, and farm-fresh eggs.",
    image: dairy,
  },
  {
    title: "Staples & Essentials",
    description: "Rice, flour, pulses, spices, and cooking oils.",
    image: staplesImg,
  },
  {
    title: "Snacks & Beverages",
    description: "Chips, biscuits, soft drinks, juices, and coffee.",
    image: snacksImg,
  },
  
  {
    title: "Bakery & Breads",
    description: "Soft breads, cakes, buns, cookies, and freshly baked goodies.",
    image: breads,
  },
  {
    title: "Frozen Foods",
    description: "Ready-to-cook snacks, frozen veggies, parathas, fries, and quick meals.",
    image: frozen,
  },
  {
    title: "Cooking Pastes & Sauces",
    description: "Pastes, sauces, chutneys, and instant flavor boosters for quick, tasty cooking.",
    image: cooking,
  },
  {
    title: "Household & Personal Care",
    description: "Cleaning supplies, hygiene, and everyday essentials.",
    image: household,
  },
];

export default function Categories() {
  return (
    <section id="categories" className="bg-gray-50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="mb-12 flex flex-col items-center text-center">
          <div className="relative mb-5 inline-flex items-center gap-2 rounded-full border border-green-200 bg-white px-5 py-2 shadow-sm">
            <span
              aria-hidden="true"
              className="h-2 w-2 animate-ping rounded-full bg-green-500"
            />
            <span className="text-xs font-semibold uppercase tracking-[0.55em] text-green-600">
              Categories
            </span>
          </div>
          <div className="group relative inline-block">
            <h2 className="text-3xl font-extrabold leading-tight text-gray-900 sm:text-4xl">
              Shop By Category
            </h2>
            <span className="absolute inset-x-6 -bottom-3 h-1 origin-left scale-x-0 rounded-full bg-gradient-to-r from-green-400 via-emerald-500 to-green-600 transition duration-500 ease-in-out group-hover:scale-x-100 group-focus-within:scale-x-100" />
          </div>
          <h3 className="mt-3 bg-gradient-to-r from-emerald-500 via-green-600 to-lime-500 bg-clip-text text-2xl font-semibold text-transparent sm:text-3xl">
            Discover Fresh Picks For Every Need
          </h3>
          <p className="mt-4 max-w-2xl text-base text-gray-600 sm:text-lg">
            Browse curated collections of pantry staples, everyday essentials, fresh produce, and more. Each category is handpicked to keep your basket full and your routine smooth.
          </p>
        </header>

        <div className="grid grid-cols-2 gap-6 lg:grid-cols-3 xl:grid-cols-4">
          {categories.map((category, index) => (
            <article
              key={category.title}
              tabIndex={0}
              role="group"
              aria-labelledby={`category-${index}`}
              className="group relative flex h-full cursor-pointer overflow-hidden rounded-xl bg-white shadow-md transition duration-300 ease-in-out hover:scale-[1.02] hover:shadow-xl focus-visible:scale-[1.02] focus-visible:shadow-xl"
            >
              <div className="relative flex basis-2/5 items-stretch justify-center bg-gray-100">
                <img
                  src={category.image}
                  alt={`${category.title} - ${category.description} | GreenBasket Online Grocery Store`}
                  className="h-full w-full object-cover transition duration-300 ease-in-out group-hover:scale-105 group-focus-visible:scale-105"
                  loading="lazy"
                  width="300"
                  height="200"
                />
              </div>

              <div className="flex basis-3/5 flex-col justify-between p-6">
                <div>
                  <h3 id={`category-${index}`} className="text-lg font-semibold uppercase tracking-wide text-gray-900">
                    {category.title}
                  </h3>
                  <p className="mt-3 text-sm text-gray-600">{category.description}</p>
                </div>

                <button
                  type="button"
                  className="mt-6 inline-flex items-center text-sm font-semibold text-green-600 transition duration-300 ease-in-out hover:text-green-700 focus-visible:text-green-700"
                >
                  Shop Now
                  <svg
                    className="ml-2 h-4 w-4 transition-transform duration-300 ease-in-out group-hover:translate-x-1 group-focus-visible:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              <span className="pointer-events-none absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-green-500 transition duration-300 ease-in-out group-hover:scale-x-100 group-focus-visible:scale-x-100" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
// ...existing code...