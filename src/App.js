import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import InfoBar from "./components/InfoBar";
import Categories from "./components/Categories";
import TrendyProducts from "./components/TrendyProducts";
import Deals from "./components/Deals";
import FeaturedProducts from "./components/FeaturedProducts";
import Blogs from "./components/Blogs";
import Footer from "./components/Footer";
import VideoGallery from "./components/Videogallery";
import MainPageSections from "./components/MainPageSections";
import Contacts from "./components/ContactSection";
import FAQSection from "./components/FAQSection";
import SEO from "./components/SEO";
import ScrollToTop from "./components/ScrollToTop";
import PageWrapper from "./components/PageWrapper";
import { getHomePageSchema, getCollectionPageSchema, getFAQPageSchema } from "./utils/seoSchemas";

// Pages
import MyAccount from "./Page/Myaccount";
import MyOrders from "./Page/Myorders";

// TEMP FAQ PAGE (placeholder, in case you route it separately later)
function Faqs() {
  return <div className="p-10 text-xl">FAQs Page</div>;
}

// HOME PAGE COMPOSITION
function HomePage() {
  // Get comprehensive homepage schemas
  const homepageSchemas = getHomePageSchema();
  
  return (
    <>
      {/* Page-level SEO for homepage */}
      <SEO
        title="GreenBasket – Premium Online Grocery & Fresh Produce | Same-Day Delivery"
        description="Shop premium groceries, fresh produce, curated combos and daily essentials with GreenBasket. Fast delivery, quality checked, and designed for modern families. Free delivery over ₹499. Order now!"
        keywords="online grocery shopping, fresh vegetables delivery, organic groceries, grocery delivery India, same day grocery delivery, fresh produce online, GreenBasket, premium groceries, curated combos, daily essentials, online grocery store, fresh fruits, vegetables online, dairy products online, grocery shopping app"
        canonicalUrl="/"
        ogImage="/og-image.jpg"
        schema={homepageSchemas}
      />

      <Hero />
      <InfoBar />
      <Categories />
      <TrendyProducts />
      <Deals />
      <FeaturedProducts />
      <VideoGallery />
      <Blogs />
      <MainPageSections />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      {/* Scroll restoration on route change */}
      <ScrollToTop />

      {/* Layout wrapper */}
      <div className="flex min-h-screen flex-col bg-gray-50">
        {/* Sticky navbar */}
        <Navbar />

        {/* Main routed content */}
        <main className="flex-1">
          <Routes>
            <Route
              path="/"
              element={
                <PageWrapper>
                  <HomePage />
                </PageWrapper>
              }
            />
            <Route
              path="/shop"
              element={
                <PageWrapper>
                  <SEO
                    title="Shop – GreenBasket Trending Products | Fresh Groceries Online"
                    description="Browse premium curated groceries, fresh fruits, vegetables and daily staples on GreenBasket. Shop trending products with best prices and fast delivery. Free delivery over ₹499."
                    keywords="online grocery store, fresh fruits, vegetables online, daily staples, grocery products, trending groceries, best grocery deals, online shopping, fresh produce, grocery delivery"
                    canonicalUrl="/shop"
                    schema={[
                      getCollectionPageSchema(
                        "Shop – GreenBasket Trending Products",
                        "Browse premium curated groceries, fresh fruits, vegetables and daily staples on GreenBasket.",
                        []
                      )
                    ]}
                  />
                  <TrendyProducts />
                </PageWrapper>
              }
            />
            <Route
              path="/categories"
              element={
                <PageWrapper>
                  <SEO
                    title="Categories – GreenBasket | Shop by Category"
                    description="Shop by category – fresh produce, dairy, staples, snacks and more on GreenBasket. Browse all grocery categories with handpicked products and exclusive deals."
                    keywords="grocery categories, fresh produce, dairy products, staples, snacks, food categories, grocery shopping by category, online grocery categories, fresh vegetables category, dairy category"
                    canonicalUrl="/categories"
                    schema={[
                      getCollectionPageSchema(
                        "Categories – GreenBasket",
                        "Shop by category – fresh produce, dairy, staples, snacks and more on GreenBasket.",
                        []
                      )
                    ]}
                  />
                  <Categories />
                </PageWrapper>
              }
            />
            <Route
              path="/blog"
              element={
                <PageWrapper>
                  <SEO
                    title="Blog – GreenBasket Tips & Guides | Grocery Shopping Tips"
                    description="Read helpful tips on online grocery shopping, storage, and healthy eating from GreenBasket. Get expert advice on food storage, nutrition, and smart grocery shopping."
                    keywords="grocery tips, food storage, healthy eating, cooking tips, nutrition advice, grocery shopping tips, food storage tips, healthy recipes, online grocery guide, grocery blog"
                    canonicalUrl="/blog"
                    schema={[
                      {
                        "@context": "https://schema.org",
                        "@type": "Blog",
                        "name": "GreenBasket Blog",
                        "description": "Read helpful tips on online grocery shopping, storage, and healthy eating from GreenBasket.",
                        "url": "https://www.greenbasket.com/blog",
                        "publisher": {
                          "@type": "Organization",
                          "name": "GreenBasket",
                          "logo": {
                            "@type": "ImageObject",
                            "url": "https://www.greenbasket.com/logo.png"
                          }
                        }
                      }
                    ]}
                  />
                  <Blogs />
                </PageWrapper>
              }
            />
            <Route
              path="/faq"
              element={
                <PageWrapper>
                  <SEO
                    title="FAQs – GreenBasket Help Center | Frequently Asked Questions"
                    description="Find quick answers about delivery, payments, refunds and orders on GreenBasket. Get help with order tracking, delivery timings, payment methods, and more."
                    keywords="grocery delivery FAQ, online shopping help, GreenBasket support, delivery questions, order tracking help, payment FAQ, refund policy, grocery delivery timings, customer support"
                    canonicalUrl="/faq"
                    schema={[
                      getFAQPageSchema([
                        {
                          question: "What are your delivery timings?",
                          answer: "Delivery slots are available from 7AM to 9PM, depending on your location. You can choose your slot at checkout."
                        },
                        {
                          question: "Is there a minimum order value?",
                          answer: "Yes, minimum order value may vary by city. Orders above ₹499 often qualify for free delivery offers and special combo discounts."
                        },
                        {
                          question: "How do I report an issue with my order?",
                          answer: "Go to the Help Center or Order Tracking page, select your order and choose 'Report an issue'. You can raise a ticket or chat with our support team directly."
                        },
                        {
                          question: "What payment methods do you accept?",
                          answer: "You can pay using UPI, debit/credit cards, net banking and select wallet options. Cash on Delivery may be available in some areas."
                        },
                        {
                          question: "What if I receive a damaged or low-quality item?",
                          answer: "If any item is damaged or not fresh, you can request a replacement or refund from the Help Center within a few hours of delivery. Please share a clear photo for faster resolution."
                        }
                      ])
                    ]}
                  />
                  <FAQSection />
                </PageWrapper>
              }
            />
            <Route
              path="/contact"
              element={
                <PageWrapper>
                  <SEO
                    title="Contact – GreenBasket Support | Get in Touch"
                    description="Get in touch with GreenBasket for order help, feedback or partnership queries. Contact our customer support team via phone, email, or contact form. We're here to help!"
                    keywords="contact GreenBasket, customer support, grocery delivery support, help center, GreenBasket contact number, customer service, support email, order help, partnership inquiry"
                    canonicalUrl="/contact"
                    schema={[
                      {
                        "@context": "https://schema.org",
                        "@type": "ContactPage",
                        "name": "Contact – GreenBasket Support",
                        "description": "Get in touch with GreenBasket for order help, feedback or partnership queries.",
                        "url": "https://www.greenbasket.com/contact"
                      }
                    ]}
                  />
                  <Contacts />
                </PageWrapper>
              }
            />
            <Route
              path="/orders"
              element={
                <PageWrapper>
                  <SEO
                    title="My Orders – GreenBasket | Track Your Orders"
                    description="View and track your GreenBasket grocery orders. Check order status, delivery updates, and order history. Manage all your grocery orders in one place."
                    keywords="my orders, order tracking, grocery order status, track delivery, order history, GreenBasket orders, order management, delivery tracking"
                    canonicalUrl="/orders"
                    noindex={true}
                  />
                  <MyOrders />
                </PageWrapper>
              }
            />
            <Route
              path="/account"
              element={
                <PageWrapper>
                  <SEO
                    title="My Account – GreenBasket | Manage Your Account"
                    description="Manage your GreenBasket account, addresses, orders and settings. Update profile, manage addresses, view order history, and customize your preferences."
                    keywords="my account, account settings, profile management, address book, account preferences, GreenBasket account, user account"
                    canonicalUrl="/account"
                    noindex={true}
                  />
                  <MyAccount />
                </PageWrapper>
              }
            />

            {/* Optional separate FAQs page if you decide to use it later */}
            <Route
              path="/faqs-page"
              element={
                <PageWrapper>
                  <SEO
                    title="FAQs Page – GreenBasket | Frequently Asked Questions"
                    description="Frequently asked questions about GreenBasket. Find answers to common questions about delivery, payments, orders, and more."
                    keywords="FAQs, frequently asked questions, GreenBasket FAQ, common questions, help center, customer support FAQ"
                    canonicalUrl="/faqs-page"
                  />
                  <Faqs />
                </PageWrapper>
              }
            />
          </Routes>
        </main>

        {/* Global footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
