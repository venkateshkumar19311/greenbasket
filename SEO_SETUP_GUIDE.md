# 🚀 Complete SEO Setup Guide for GreenBasket

This document provides a comprehensive overview of all SEO implementations in the project.

## 📋 Table of Contents

1. [SEO Components](#seo-components)
2. [Structured Data (Schema.org)](#structured-data)
3. [Meta Tags](#meta-tags)
4. [Semantic HTML](#semantic-html)
5. [Image Optimization](#image-optimization)
6. [Sitemap & Robots.txt](#sitemap--robotstxt)
7. [Best Practices](#best-practices)

---

## 🧩 SEO Components

### 1. **SEO Component** (`src/components/SEO.jsx`)

The main SEO component that handles all meta tags, Open Graph, Twitter Cards, and structured data.

**Features:**
- ✅ Dynamic title and description
- ✅ Keywords support
- ✅ Canonical URLs
- ✅ Open Graph tags (Facebook)
- ✅ Twitter Card tags
- ✅ Structured data (JSON-LD) support
- ✅ Multiple schema support (array of schemas)

**Usage:**
```jsx
import SEO from './components/SEO';

<SEO
  title="Page Title"
  description="Page description"
  keywords="keyword1, keyword2"
  canonicalUrl="/page-path"
  ogImage="/custom-image.jpg"
  schema={schemaObject} // or array of schemas
/>
```

### 2. **Breadcrumbs Component** (`src/components/Breadcrumbs.jsx`)

Breadcrumb navigation with automatic Schema.org structured data.

**Features:**
- ✅ Automatic BreadcrumbList schema
- ✅ Semantic HTML navigation
- ✅ Accessible ARIA labels
- ✅ React Router integration

**Usage:**
```jsx
import Breadcrumbs from './components/Breadcrumbs';

<Breadcrumbs 
  items={[
    { name: "Home", url: "/" },
    { name: "Shop", url: "/shop" },
    { name: "Fruits", url: "/shop/fruits" }
  ]} 
/>
```

---

## 📊 Structured Data (Schema.org)

### Available Schema Utilities (`src/utils/seoSchemas.js`)

#### 1. **Organization Schema**
```javascript
import { getOrganizationSchema } from './utils/seoSchemas';

const schema = getOrganizationSchema();
```

#### 2. **WebSite Schema**
```javascript
import { getWebSiteSchema } from './utils/seoSchemas';

const schema = getWebSiteSchema();
```

#### 3. **LocalBusiness Schema**
```javascript
import { getLocalBusinessSchema } from './utils/seoSchemas';

const schema = getLocalBusinessSchema();
```

#### 4. **Product Schema**
```javascript
import { getProductSchema } from './utils/seoSchemas';

const schema = getProductSchema({
  name: "Fresh Kiwi",
  price: "299",
  image: "/img/kiwi.jpg",
  description: "Fresh organic kiwi",
  inStock: true,
  rating: 4.8
});
```

#### 5. **FAQPage Schema**
```javascript
import { getFAQPageSchema } from './utils/seoSchemas';

const schema = getFAQPageSchema([
  {
    question: "What is your delivery time?",
    answer: "We deliver within 30 minutes in select areas."
  }
]);
```

#### 6. **BreadcrumbList Schema**
```javascript
import { getBreadcrumbSchema } from './utils/seoSchemas';

const schema = getBreadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "Shop", url: "/shop" }
]);
```

#### 7. **HomePage Schema** (Combined)
```javascript
import { getHomePageSchema } from './utils/seoSchemas';

// Returns array of schemas: Organization, WebSite, LocalBusiness, WebPage
const schemas = getHomePageSchema();
```

---

## 🏷️ Meta Tags

### Implemented Meta Tags

✅ **Primary Meta Tags:**
- `<title>` - Page title
- `<meta name="description">` - Page description
- `<meta name="keywords">` - Keywords (optional)
- `<meta name="robots">` - Search engine directives
- `<link rel="canonical">` - Canonical URL

✅ **Open Graph Tags (Facebook):**
- `og:type` - Content type
- `og:title` - Title
- `og:description` - Description
- `og:image` - Image URL
- `og:url` - Page URL
- `og:site_name` - Site name
- `og:locale` - Language/region

✅ **Twitter Card Tags:**
- `twitter:card` - Card type
- `twitter:title` - Title
- `twitter:description` - Description
- `twitter:image` - Image URL
- `twitter:creator` - Creator handle

---

## 🎨 Semantic HTML

### Hero Component Enhancements

The Hero component (`src/components/Hero.jsx`) now includes:

✅ **Semantic HTML:**
- `<section>` with proper `id` and `itemScope`
- `<h1>` with `itemProp="headline"`
- Descriptive `<p>` with `itemProp="description"`
- Links (`<a>`) instead of buttons for CTAs
- Proper ARIA labels

✅ **Image Optimization:**
- Descriptive `alt` attributes
- `loading="eager"` for hero image
- `loading="lazy"` for below-fold images
- Width and height attributes

✅ **Structured Data:**
- HeroSection schema
- Product/Offer schemas for featured items
- AggregateRating schema for stats

**Example:**
```jsx
<section id="hero" itemScope itemType="https://schema.org/HeroSection">
  <h1 itemProp="headline">Fresh. Curated. Delivered to Your Doorstep.</h1>
  <p itemProp="description">Shop premium groceries...</p>
  <img 
    alt="Fresh organic groceries and vegetables from GreenBasket"
    loading="eager"
    width="1200"
    height="600"
  />
</section>
```

---

## 🖼️ Image Optimization

### Best Practices Implemented

1. **Alt Text:**
   - Descriptive, keyword-rich alt text
   - Context about the image content
   - Brand name inclusion where relevant

2. **Loading Attributes:**
   - `loading="eager"` for above-fold images
   - `loading="lazy"` for below-fold images

3. **Dimensions:**
   - Width and height attributes specified
   - Prevents layout shift (CLS)

4. **File Names:**
   - Descriptive file names
   - SEO-friendly naming convention

---

## 🗺️ Sitemap & Robots.txt

### Sitemap

✅ **Location:** `public/sitemap.xml`
✅ **Auto-generation:** Runs before each build
✅ **Manual generation:** `npm run generate-sitemap`

**Routes included:**
- `/` (Homepage)
- `/shop`
- `/categories`
- `/blog`
- `/faq`
- `/contact`
- `/orders`
- `/account`

### Robots.txt

✅ **Location:** `public/robots.txt`
✅ **Sitemap reference:** Included
✅ **Crawl directives:** Configured for search engines

---

## ⚙️ SEO Configuration

### Centralized Config (`src/config/seo.config.js`)

All SEO settings are centralized in one configuration file:

```javascript
import { seoConfig, getPageSEO } from './config/seo.config';

// Get default values
const defaultTitle = seoConfig.defaultTitle;

// Get page-specific SEO
const shopSEO = getPageSEO('shop');
```

**Config includes:**
- Base URL
- Default meta tags
- Organization details
- Social media links
- Business hours
- Page-specific settings

---

## 📝 Implementation Examples

### Homepage with Full SEO

```jsx
import SEO from './components/SEO';
import { getHomePageSchema } from './utils/seoSchemas';

function HomePage() {
  const schemas = getHomePageSchema();
  
  return (
    <>
      <SEO
        title="GreenBasket – Premium Online Grocery & Fresh Produce"
        description="Shop premium groceries, fresh produce, curated combos..."
        keywords="online grocery shopping, fresh vegetables..."
        canonicalUrl="/"
        ogImage="/og-image.jpg"
        schema={schemas}
      />
      <Hero />
      {/* Rest of page */}
    </>
  );
}
```

### Product Page with Product Schema

```jsx
import SEO from './components/SEO';
import { getProductSchema } from './utils/seoSchemas';
import Breadcrumbs from './components/Breadcrumbs';

function ProductPage({ product }) {
  const productSchema = getProductSchema(product);
  
  return (
    <>
      <SEO
        title={`${product.name} – GreenBasket`}
        description={product.description}
        canonicalUrl={`/product/${product.id}`}
        schema={productSchema}
      />
      <Breadcrumbs 
        items={[
          { name: "Home", url: "/" },
          { name: "Shop", url: "/shop" },
          { name: product.category, url: `/shop/${product.category}` },
          { name: product.name, url: `/product/${product.id}` }
        ]} 
      />
      {/* Product content */}
    </>
  );
}
```

### FAQ Page with FAQ Schema

```jsx
import SEO from './components/SEO';
import { getFAQPageSchema } from './utils/seoSchemas';

function FAQPage() {
  const faqs = [
    { question: "What is your delivery time?", answer: "30 minutes..." },
    { question: "Do you accept returns?", answer: "Yes, within 7 days..." }
  ];
  
  const faqSchema = getFAQPageSchema(faqs);
  
  return (
    <>
      <SEO
        title="FAQs – GreenBasket Help Center"
        description="Find quick answers about delivery, payments..."
        canonicalUrl="/faq"
        schema={faqSchema}
      />
      {/* FAQ content */}
    </>
  );
}
```

---

## ✅ SEO Checklist

### Technical SEO
- [x] Meta tags (title, description, keywords)
- [x] Canonical URLs
- [x] Open Graph tags
- [x] Twitter Card tags
- [x] Structured data (JSON-LD)
- [x] Sitemap.xml
- [x] Robots.txt
- [x] Semantic HTML
- [x] Image alt text
- [x] Mobile-friendly (responsive)

### Content SEO
- [x] Unique titles per page
- [x] Unique descriptions per page
- [x] Keyword optimization
- [x] Heading hierarchy (H1, H2, etc.)
- [x] Internal linking structure

### Performance SEO
- [x] Image optimization
- [x] Lazy loading images
- [x] Proper image dimensions
- [x] Fast page load times

---

## 🔍 Testing Your SEO

### 1. **Google Rich Results Test**
- URL: https://search.google.com/test/rich-results
- Test your structured data

### 2. **Facebook Sharing Debugger**
- URL: https://developers.facebook.com/tools/debug/
- Test Open Graph tags

### 3. **Twitter Card Validator**
- URL: https://cards-dev.twitter.com/validator
- Test Twitter Card tags

### 4. **Google Search Console**
- Submit sitemap
- Monitor indexing status
- Check for errors

### 5. **Schema Markup Validator**
- URL: https://validator.schema.org/
- Validate JSON-LD schemas

---

## 📚 Additional Resources

- [Schema.org Documentation](https://schema.org/)
- [Google Search Central](https://developers.google.com/search)
- [Open Graph Protocol](https://ogp.me/)
- [Twitter Cards](https://developer.twitter.com/en/docs/twitter-for-websites/cards)

---

## 🎯 Next Steps

1. **Add Product Pages:** Implement product schema for individual products
2. **Add Reviews Schema:** Implement Review/Rating schema
3. **Add Video Schema:** For video content
4. **Add Article Schema:** For blog posts
5. **Monitor Performance:** Set up Google Search Console
6. **Track Rankings:** Use SEO tools to monitor keyword rankings

---

**SEO Setup Complete!** 🎉

All components are ready to use. Follow the examples above to implement SEO on all pages.

