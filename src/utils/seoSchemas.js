/**
 * SEO Schema Utilities
 * Provides structured data (JSON-LD) schemas for different page types
 */

const baseUrl = "https://www.greenbasket.com";

/**
 * Organization Schema
 */
export const getOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "GreenBasket",
  "url": baseUrl,
  "logo": `${baseUrl}/logo.png`,
  "description": "Premium online grocery store delivering fresh produce, curated combos, and daily essentials to your doorstep.",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-55551-234-567",
    "contactType": "Customer Service",
    "areaServed": "IN",
    "availableLanguage": ["English", "Hindi"]
  },
  "sameAs": [
    "https://www.facebook.com/greenbasket",
    "https://www.instagram.com/greenbasket",
    "https://twitter.com/greenbasket",
    "https://www.linkedin.com/company/greenbasket"
  ],
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "GreenBasket HQ, Main Street",
    "addressLocality": "Chennai",
    "addressRegion": "Tamil Nadu",
    "postalCode": "600001",
    "addressCountry": "IN"
  }
});

/**
 * WebSite Schema with SearchAction
 */
export const getWebSiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "GreenBasket",
  "url": baseUrl,
  "description": "Fresh organic groceries delivered to your doorstep",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": `${baseUrl}/search?q={search_term_string}`
    },
    "query-input": "required name=search_term_string"
  }
});

/**
 * LocalBusiness Schema
 */
export const getLocalBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${baseUrl}/#business`,
  "name": "GreenBasket",
  "image": `${baseUrl}/logo.png`,
  "priceRange": "₹₹",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "GreenBasket HQ, Main Street",
    "addressLocality": "Chennai",
    "addressRegion": "Tamil Nadu",
    "postalCode": "600001",
    "addressCountry": "IN"
  },
  "telephone": "+91-55551-234-567",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "07:00",
      "closes": "21:00"
    }
  ],
  "servesCuisine": "Grocery Store",
  "areaServed": {
    "@type": "Country",
    "name": "India"
  }
});

/**
 * Store Schema (for e-commerce)
 */
export const getStoreSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Store",
  "name": "GreenBasket",
  "image": `${baseUrl}/logo.png`,
  "description": "Online grocery store offering fresh produce, curated combos, and daily essentials",
  "url": baseUrl,
  "telephone": "+91-55551-234-567",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "GreenBasket HQ, Main Street",
    "addressLocality": "Chennai",
    "addressRegion": "Tamil Nadu",
    "postalCode": "600001",
    "addressCountry": "IN"
  },
  "priceRange": "₹₹",
  "openingHours": "Mo-Su 07:00-21:00"
});

/**
 * BreadcrumbList Schema
 */
export const getBreadcrumbSchema = (items) => {
  if (!items || items.length === 0) return null;
  
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `${baseUrl}${item.url}`
    }))
  };
};

/**
 * FAQPage Schema
 */
export const getFAQPageSchema = (faqs) => {
  if (!faqs || faqs.length === 0) return null;
  
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
};

/**
 * Product Schema
 */
export const getProductSchema = (product) => {
  if (!product) return null;
  
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "image": product.image ? `${baseUrl}${product.image}` : `${baseUrl}/default-product.jpg`,
    "description": product.description,
    "sku": product.sku || product.id,
    "brand": {
      "@type": "Brand",
      "name": product.brand || "GreenBasket"
    },
    "offers": {
      "@type": "Offer",
      "url": `${baseUrl}/product/${product.id}`,
      "priceCurrency": "INR",
      "price": product.price,
      "priceValidUntil": product.priceValidUntil || "2025-12-31",
      "itemCondition": "https://schema.org/NewCondition",
      "availability": product.inStock ? "https://schema.org/InStock" : "https://schema.org/OutOfStock"
    },
    "aggregateRating": product.rating ? {
      "@type": "AggregateRating",
      "ratingValue": product.rating,
      "reviewCount": product.reviewCount || 0
    } : undefined
  };
};

/**
 * CollectionPage Schema (for category/shop pages)
 */
export const getCollectionPageSchema = (pageName, description, items = []) => ({
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": pageName,
  "description": description,
  "url": `${baseUrl}/${pageName.toLowerCase().replace(/\s+/g, '-')}`,
  "mainEntity": {
    "@type": "ItemList",
    "numberOfItems": items.length,
    "itemListElement": items.slice(0, 10).map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Product",
        "name": item.name,
        "url": `${baseUrl}/product/${item.id}`
      }
    }))
  }
});

/**
 * Homepage Schema (combines multiple schemas)
 */
export const getHomePageSchema = () => {
  return [
    getOrganizationSchema(),
    getWebSiteSchema(),
    getLocalBusinessSchema(),
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${baseUrl}/#webpage`,
      "url": baseUrl,
      "name": "GreenBasket – Premium Online Grocery & Fresh Produce",
      "description": "Shop premium groceries, fresh produce, curated combos and daily essentials with GreenBasket. Fast delivery, quality checked, and designed for modern families.",
      "inLanguage": "en-IN",
      "isPartOf": {
        "@id": `${baseUrl}/#website`
      },
      "about": {
        "@id": `${baseUrl}/#business`
      },
      "primaryImageOfPage": {
        "@type": "ImageObject",
        "url": `${baseUrl}/og-image.jpg`
      }
    }
  ];
};

/**
 * Article Schema (for blog posts)
 */
export const getArticleSchema = (article) => {
  if (!article) return null;
  
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.description,
    "image": article.image ? `${baseUrl}${article.image}` : `${baseUrl}/default-article.jpg`,
    "datePublished": article.publishedDate,
    "dateModified": article.modifiedDate || article.publishedDate,
    "author": {
      "@type": "Person",
      "name": article.author || "GreenBasket Team"
    },
    "publisher": {
      "@type": "Organization",
      "name": "GreenBasket",
      "logo": {
        "@type": "ImageObject",
        "url": `${baseUrl}/logo.png`
      }
    }
  };
};

/**
 * Service Schema
 */
export const getServiceSchema = (serviceName, description) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": serviceName,
  "description": description,
  "provider": {
    "@id": `${baseUrl}/#business`
  },
  "areaServed": {
    "@type": "Country",
    "name": "India"
  }
});

