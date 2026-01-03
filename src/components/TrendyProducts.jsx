import React, { useState, useEffect } from 'react';
import freshProduce from '../img/copy-space-background-with-healthy-snack.jpg';
import vegetables from '../img/vegetables.jpg';
import dairy from '../img/raw-fresh-white-chicken-eggs-placed-stone-surface.jpg';
import breads from '../img/Generated.png';
import staples from '../img/Eggs.png';
import snacks from '../img/top-view-fruit-vegetables-reusable-bags-with-bread.jpg';
import household from '../img/Household.png';

import veget from "../img/Vegetables.png";
import kiwi from "../img/Kiw.png";
import Organic from "../img/Organic_Staples.png";
import Fresh from "../img/Fresh_Bread.png";
import Vegetable_Juice from "../img/Vegetable_Juice.png";
import Red_Hot_Tomato from "../img/Red_Hot_Tomato.png";
import Orange_Fresh from "../img/Orange_Fresh.png";
import avocado from "../img/Avocado.png";
import pears from "../img/Pears.png";
import mush from "../img/mushrooms.png";
import dairys from "../img/Dairy_Delight.png";

const TrendyProducts = () => {
  const [activeFilter, setActiveFilter] = useState('FOOD & DRINK');
  const [filteredProducts, setFilteredProducts] = useState([]);

  const filters = ['FOOD & DRINK', 'VEGETABLES', 'DAIRY FOODS', 'BREAD & CAKE', 'FISH & MEAT'];

  const products = [
    {
      id: 1,
      name: 'Kiwi',
      price: 'Rs 100',
      originalPrice: 'Rs 125',
      image: kiwi,
      badge: 'SALE 20%',
      rating: 4.5,
      category: 'FOOD & DRINK',
    },
    {
      id: 2,
      name: 'Mushroom',
      price: 'Rs 79',
      originalPrice: 'Rs 99',
      image: mush,
      badge: 'NEW',
      rating: 4.8,
      category: 'VEGETABLES',
    },
    {
      id: 3,
      name: 'Pears',
      price: 'Rs 52',
      originalPrice: 'Rs 74',
      image: pears,
      badge: 'NEW',
      rating: 4.7,
      category: 'FOOD & DRINK',
    },
    {
      id: 4,
      name: 'Avocado',
      price: 'Rs 85',
      originalPrice: 'Rs 98',
      image: avocado,
      badge: 'NEW',
      rating: 4.9,
      category: 'FOOD & DRINK',
    },
    {
      id: 5,
      name: 'Dairy Delight Pack',
      price: 'Rs 78',
      originalPrice: 'Rs 90',
      image: dairys,
      badge: 'NEW',
      rating: 4.6,
      category: 'DAIRY FOODS',
    },
    {
      id: 6,
      name: 'Orange Fresh Juice',
      price: 'Rs 92',
      originalPrice: null,
      image: Orange_Fresh ,
      badge: 'NEW',
      rating: 4.8,
      category: 'FOOD & DRINK',
    },
    {
      id: 7,
      name: 'Vegetables Juice',
      price: 'Rs 85',
      originalPrice: null,
      image: Vegetable_Juice,
      badge: 'NEW',
      rating: 4.7,
      category: 'VEGETABLES',
    },
    {
      id: 8,
      name: 'Red Hot Tomato',
      price: 'Rs 162',
      originalPrice: 'Rs 198',
      image: Red_Hot_Tomato,
      badge: 'NEW',
      rating: 4.9,
      category: 'VEGETABLES',
    },
    {
      id: 9,
      name: 'Fresh Bread Loaf',
      price: 'Rs 45',
      originalPrice: 'Rs 60',
      image: Fresh,
      badge: 'HOT',
      rating: 4.8,
      category: 'BREAD & CAKE',
    },
    {
      id: 10,
      name: 'Farm Fresh Eggs',
      price: 'Rs 120',
      originalPrice: null,
      image: staples,
      badge: null,
      rating: 4.9,
      category: 'DAIRY FOODS',
    },
    {
      id: 11,
      name: 'Mixed Vegetables',
      price: 'Rs 95',
      originalPrice: 'Rs 120',
      image: veget,
      badge: 'SALE 20%',
      rating: 4.6,
      category: 'VEGETABLES',
    },
    {
      id: 12,
      name: 'Organic Staples',
      price: 'Rs 150',
      originalPrice: null,
      image: Organic,
      badge: 'NEW',
      rating: 4.7,
      category: 'FOOD & DRINK',
    },
  ];

  useEffect(() => {
    if (activeFilter === 'FOOD & DRINK') {
      setFilteredProducts(products.filter((p) => p.category === 'FOOD & DRINK'));
    } else if (activeFilter === 'VEGETABLES') {
      setFilteredProducts(products.filter((p) => p.category === 'VEGETABLES'));
    } else if (activeFilter === 'DAIRY FOODS') {
      setFilteredProducts(products.filter((p) => p.category === 'DAIRY FOODS'));
    } else if (activeFilter === 'BREAD & CAKE') {
      setFilteredProducts(products.filter((p) => p.category === 'BREAD & CAKE'));
    } else {
      setFilteredProducts(products);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeFilter]);

  const getBadgeColor = (badge) => {
    switch (badge) {
      case 'NEW':
        return 'bg-green-600';
      case 'SALE 20%':
        return 'bg-red-500';
      case 'HOT':
        return 'bg-orange-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <section id="products" className="bg-gradient-to-b from-gray-50 to-white py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Professional Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-green-50 border border-green-200">
            <span className="h-2 w-2 animate-pulse rounded-full bg-green-500"></span>
            <span className="text-xs font-semibold uppercase tracking-wider text-green-600">Trending Now</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            OUR TRENDY PRODUCTS
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Discover our handpicked selection of fresh, quality products
          </p>
        </div>

        {/* Enhanced Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`relative px-6 py-3 rounded-full font-semibold text-sm md:text-base transition-all duration-300 ease-in-out transform ${
                activeFilter === filter
                  ? 'bg-green-600 text-white shadow-lg shadow-green-500/30 scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-100 hover:scale-105 shadow-md border border-gray-200'
              }`}
            >
              {filter}
              {activeFilter === filter && (
                <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-green-400 rounded-full"></span>
              )}
            </button>
          ))}
        </div>

        {/* Professional Products Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product, index) => (
              <div
                key={product.id}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-2 cursor-pointer border border-gray-100"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
                }}
              >
                {/* Badge with animation */}
                {product.badge && (
                  <div
                    className={`absolute top-3 right-3 ${getBadgeColor(
                      product.badge
                    )} text-white text-xs font-bold px-3 py-1.5 rounded-full z-20 shadow-lg transform transition-transform duration-300 group-hover:scale-110`}
                  >
                    {product.badge}
                  </div>
                )}

                {/* Product Image Container */}
                <div className="relative h-48 md:h-56 overflow-hidden bg-gray-50">
                  <img
                    src={product.image}
                    alt={`${product.name} - ${product.price}${product.originalPrice ? ` (Was ${product.originalPrice})` : ''} | Fresh ${product.category.toLowerCase()} at GreenBasket`}
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                    loading="lazy"
                    width="300"
                    height="300"
                  />
                  {/* Overlay gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Product Info */}
                <div className="p-4 md:p-5">
                  {/* Star Rating */}
                  <div className="flex items-center gap-1 mb-3">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(product.rating)
                              ? 'fill-current'
                              : i < product.rating
                              ? 'fill-current opacity-50'
                              : 'text-gray-300'
                          }`}
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-xs text-gray-500 ml-1">({product.rating})</span>
                  </div>

                  {/* Product Name */}
                  <h3 className="font-bold text-gray-900 mb-3 text-base md:text-lg line-clamp-2 min-h-[3rem] group-hover:text-green-600 transition-colors duration-300">
                    {product.name}
                  </h3>

                  {/* Price Section */}
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="text-lg md:text-xl font-extrabold text-green-600">
                        {product.price}
                      </span>
                      {product.originalPrice && (
                        <span className="text-xs text-gray-400 line-through">
                          {product.originalPrice}
                        </span>
                      )}
                    </div>
                    {/* Add to Cart Button */}
                    <button
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-green-600 hover:bg-green-700 text-white p-2 rounded-lg shadow-md transform hover:scale-110 transition-transform duration-200"
                      aria-label={`Add ${product.name} to cart`}
                    >
                      <svg
                        className="h-5 w-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                        />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Bottom accent line on hover */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-400 via-emerald-500 to-green-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-500 text-lg">No products found in this category.</p>
            </div>
          )}
        </div>
      </div>

      {/* CSS Animation Keyframes */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default TrendyProducts;
