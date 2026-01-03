// src/components/MainPageSections.jsx
import React from "react";
import ShopSection from "./ShopSection";
import AboutSection from "./AboutSection";
import ProductsSection from "./ProductsSection";
import BlogSection from "./BlogSection";
import LocationsSection from "./LocationsSection";
import OrderTrackingSection from "./OrderTrackingSection";

import FAQSection from "./FAQSection";
import HelpCenterSection from "./HelpCenterSection";
import ContactSection from "./ContactSection";

/**
 * Use this between Navbar and Footer:
 *  <Navbar />
 *  <MainPageSections />
 *  <Footer />
 */
const MainPageSections = () => {
  return (
    <main className="bg-gray-50">
      <ShopSection />
      <AboutSection />
      <ProductsSection />
      <BlogSection />
      <LocationsSection />
      <OrderTrackingSection />
      <FAQSection />
      <HelpCenterSection />
      <ContactSection />
    </main>
  );
};

export default MainPageSections;
