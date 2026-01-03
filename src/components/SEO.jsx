import { Helmet } from "react-helmet-async";

export default function SEO({ 
  title = "GreenBasket – Premium Online Grocery & Fresh Produce", 
  description = "Shop premium groceries, fresh produce, curated combos and daily essentials with GreenBasket. Fast delivery, quality checked, and designed for modern families.", 
  keywords,
  canonicalUrl,
  ogType = "website",
  ogImage,
  twitterCard = "summary_large_image",
  schema,
  noindex = false,
  nofollow = false
}) {
  const baseUrl = "https://www.greenbasket.com";
  const defaultImage = `${baseUrl}/og-image.jpg`;
  
  // Ensure title and description are strings
  const safeTitle = title || "GreenBasket – Premium Online Grocery & Fresh Produce";
  const safeDescription = description || "Shop premium groceries, fresh produce, curated combos and daily essentials with GreenBasket.";
  const safeCanonicalUrl = canonicalUrl || '';
  const fullCanonicalUrl = safeCanonicalUrl ? `${baseUrl}${safeCanonicalUrl}` : baseUrl;
  
  // Robots meta
  const robotsContent = [];
  if (noindex) robotsContent.push("noindex");
  else robotsContent.push("index");
  
  if (nofollow) robotsContent.push("nofollow");
  else robotsContent.push("follow");
  
  robotsContent.push("max-image-preview:large", "max-snippet:-1", "max-video-preview:-1");
  
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{safeTitle}</title>
      <meta name="title" content={safeTitle} />
      <meta name="description" content={safeDescription} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content="GreenBasket" />
      <meta name="robots" content={robotsContent.join(", ")} />
      <meta name="googlebot" content={robotsContent.join(", ")} />
      <meta name="bingbot" content={robotsContent.join(", ")} />
      
      {/* Language and Region */}
      <meta httpEquiv="content-language" content="en-IN" />
      <meta name="geo.region" content="IN" />
      <meta name="geo.placename" content="India" />
      <meta name="language" content="English" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullCanonicalUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonicalUrl} />
      <meta property="og:site_name" content="GreenBasket" />
      <meta property="og:title" content={safeTitle} />
      <meta property="og:description" content={safeDescription} />
      <meta property="og:image" content={ogImage || defaultImage} />
      <meta property="og:image:secure_url" content={ogImage || defaultImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={safeTitle} />
      <meta property="og:locale" content="en_IN" />
      <meta property="og:locale:alternate" content="hi_IN" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:url" content={fullCanonicalUrl} />
      <meta name="twitter:title" content={safeTitle} />
      <meta name="twitter:description" content={safeDescription} />
      <meta name="twitter:image" content={ogImage || defaultImage} />
      <meta name="twitter:image:alt" content={safeTitle} />
      <meta name="twitter:creator" content="@GreenBasket" />
      <meta name="twitter:site" content="@GreenBasket" />
      
      {/* Additional SEO Meta */}
      <meta name="format-detection" content="telephone=yes" />
      <meta name="theme-color" content="#10b981" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="GreenBasket" />
      
      {/* Structured Data - Support for single schema or array of schemas */}
      {schema && (
        Array.isArray(schema) ? (
          schema.map((item, index) => (
            <script key={index} type="application/ld+json">
              {JSON.stringify(item)}
            </script>
          ))
        ) : (
          <script type="application/ld+json">
            {JSON.stringify(schema)}
          </script>
        )
      )}
    </Helmet>
  );
}
