/**
 * SEO Configuration File
 * Centralized SEO settings for the entire application
 */

export const seoConfig = {
  // Base URL
  baseUrl: "https://www.greenbasket.com",
  
  // Default values
  defaultTitle: "GreenBasket – Premium Online Grocery & Fresh Produce",
  defaultDescription: "Shop premium groceries, fresh produce, curated combos and daily essentials with GreenBasket. Fast delivery, quality checked, and designed for modern families.",
  defaultKeywords: "online grocery shopping, fresh vegetables delivery, organic groceries, grocery delivery India, same day grocery delivery, fresh produce online, GreenBasket, premium groceries, curated combos, daily essentials",
  defaultImage: "https://www.greenbasket.com/og-image.jpg",
  
  // Organization details
  organization: {
    name: "GreenBasket",
    logo: "https://www.greenbasket.com/logo.png",
    phone: "+91-55551-234-567",
    email: "support@greenbasket.com",
    address: {
      street: "GreenBasket HQ, Main Street",
      city: "Chennai",
      state: "Tamil Nadu",
      postalCode: "600001",
      country: "IN"
    },
    social: {
      facebook: "https://www.facebook.com/greenbasket",
      instagram: "https://www.instagram.com/greenbasket",
      twitter: "https://twitter.com/greenbasket",
      linkedin: "https://www.linkedin.com/company/greenbasket"
    }
  },
  
  // Page-specific SEO settings
  pages: {
    home: {
      title: "GreenBasket – Premium Online Grocery & Fresh Produce",
      description: "Shop premium groceries, fresh produce, curated combos and daily essentials with GreenBasket. Fast delivery, quality checked, and designed for modern families.",
      keywords: "online grocery shopping, fresh vegetables delivery, organic groceries, grocery delivery India, same day grocery delivery, fresh produce online",
      canonicalUrl: "/"
    },
    shop: {
      title: "Shop – GreenBasket Trending Products",
      description: "Browse premium curated groceries, fresh fruits, vegetables and daily staples on GreenBasket.",
      keywords: "online grocery store, fresh fruits, vegetables online, daily staples, grocery products",
      canonicalUrl: "/shop"
    },
    categories: {
      title: "Categories – GreenBasket",
      description: "Shop by category – fresh produce, dairy, staples, snacks and more on GreenBasket.",
      keywords: "grocery categories, fresh produce, dairy products, staples, snacks, food categories",
      canonicalUrl: "/categories"
    },
    blog: {
      title: "Blog – GreenBasket Tips & Guides",
      description: "Read helpful tips on online grocery shopping, storage, and healthy eating from GreenBasket.",
      keywords: "grocery tips, food storage, healthy eating, cooking tips, nutrition advice",
      canonicalUrl: "/blog"
    },
    faq: {
      title: "FAQs – GreenBasket Help Center",
      description: "Find quick answers about delivery, payments, refunds and orders on GreenBasket.",
      keywords: "grocery delivery FAQ, online shopping help, GreenBasket support, delivery questions",
      canonicalUrl: "/faq"
    },
    contact: {
      title: "Contact – GreenBasket Support",
      description: "Get in touch with GreenBasket for order help, feedback or partnership queries.",
      keywords: "contact GreenBasket, customer support, grocery delivery support, help center",
      canonicalUrl: "/contact"
    }
  },
  
  // Open Graph defaults
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "GreenBasket",
    imageWidth: 1200,
    imageHeight: 630
  },
  
  // Twitter Card defaults
  twitter: {
    card: "summary_large_image",
    creator: "@GreenBasket",
    site: "@GreenBasket"
  },
  
  // Robots meta
  robots: {
    index: true,
    follow: true,
    maxImagePreview: "large",
    maxSnippet: -1,
    maxVideoPreview: -1
  },
  
  // Language and region
  language: "en-IN",
  region: "IN",
  
  // Business hours (for LocalBusiness schema)
  businessHours: {
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "07:00",
    closes: "21:00"
  },
  
  // Statistics (for homepage)
  stats: {
    happyCustomers: "10K+",
    productsCurated: "1500+",
    avgDeliveryTime: "30 min"
  }
};

/**
 * Get SEO config for a specific page
 */
export const getPageSEO = (pageName) => {
  return seoConfig.pages[pageName] || {
    title: seoConfig.defaultTitle,
    description: seoConfig.defaultDescription,
    keywords: seoConfig.defaultKeywords,
    canonicalUrl: `/${pageName}`
  };
};

/**
 * Get full canonical URL
 */
export const getCanonicalUrl = (path = "") => {
  return `${seoConfig.baseUrl}${path}`;
};

/**
 * Get full image URL
 */
export const getImageUrl = (imagePath = "") => {
  if (imagePath.startsWith("http")) return imagePath;
  return `${seoConfig.baseUrl}${imagePath}`;
};

