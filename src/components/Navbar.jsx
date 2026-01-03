// src/components/Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import greenbaskerlogo from "../img/Green_basker_logo.jpg";
import check from "../img/check-out-icon.png";

export default function Navbar({ transparent = false }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  const navBg = transparent
    ? "bg-transparent backdrop-blur-md"
    : "bg-white shadow-sm";

  const textColor = transparent ? "text-white" : "text-gray-800";

  const linkClass =
    "block px-4 py-2 rounded-md text-base font-medium transition hover:text-green-600 hover:bg-green-50";

  const menuItems = [
    { label: "Home", path: "/" },
    { label: "Shop", path: "/shop" },
    { label: "Categories", path: "/categories" },
    { label: "Blog", path: "/blog" },
    { label: "Help & FAQs", path: "/faq" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <nav className={`${navBg} sticky top-0 z-50`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src={greenbaskerlogo}
              alt="GreenBasket - Premium Online Grocery Store Logo | Fresh Groceries Delivered to Your Doorstep"
              className="h-8 sm:h-10 md:h-12 lg:h-14 object-contain"
              style={{ maxWidth: "260px" }}
              width="260"
              height="60"
              loading="eager"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                className={`font-medium transition ${textColor} hover:text-green-600`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            {/* Orders */}
            <Link
              to="/orders"
              aria-label="My Orders"
              className={`p-2 rounded-md transition hover:scale-105 ${
                transparent
                  ? "text-white"
                  : "text-gray-700 hover:text-green-600"
              }`}
            >
             <img src={check} alt="View My Orders - GreenBasket Order Tracking" className="h-6 w-6" width="24" height="24" loading="lazy" />

            </Link>

            {/* My Account */}
            <Link
              to="/account"
              className={`hidden md:inline-flex font-medium ${
                transparent ? "text-white" : "text-gray-700"
              } hover:text-green-600`}
            >
              My Account
            </Link>

            {/* Hamburger */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`lg:hidden p-2 ${
                transparent
                  ? "text-white"
                  : "text-gray-700 hover:text-green-600"
              }`}
            >
              ☰
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-3 pb-4 border-t">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                onClick={closeMenu}
                className={linkClass}
              >
                {item.label}
              </Link>
            ))}

            <Link
              to="/account"
              onClick={closeMenu}
              className={linkClass}
            >
              My Account
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
