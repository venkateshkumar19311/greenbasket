const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');
const { resolve } = require('path');

// Define your site URL
const baseUrl = 'https://www.greenbasket.com';

// Define all your routes
const routes = [
  { url: '/', changefreq: 'daily', priority: 1.0, lastmod: new Date() },
  { url: '/shop', changefreq: 'daily', priority: 0.9, lastmod: new Date() },
  { url: '/categories', changefreq: 'weekly', priority: 0.8, lastmod: new Date() },
  { url: '/blog', changefreq: 'weekly', priority: 0.7, lastmod: new Date() },
  { url: '/faq', changefreq: 'monthly', priority: 0.6, lastmod: new Date() },
  { url: '/contact', changefreq: 'monthly', priority: 0.6, lastmod: new Date() },
  { url: '/orders', changefreq: 'monthly', priority: 0.5, lastmod: new Date() },
  { url: '/account', changefreq: 'monthly', priority: 0.5, lastmod: new Date() },
  { url: '/faqs-page', changefreq: 'monthly', priority: 0.4, lastmod: new Date() },
];

// Create sitemap stream
const sitemap = new SitemapStream({ hostname: baseUrl });

// Write sitemap to public folder
const writeStream = createWriteStream(resolve(__dirname, '../public/sitemap.xml'));

sitemap.pipe(writeStream);

// Add routes to sitemap
routes.forEach(route => {
  sitemap.write(route);
});

sitemap.end();

// Generate sitemap
streamToPromise(sitemap)
  .then(() => {
    console.log('✅ Sitemap generated successfully at public/sitemap.xml');
  })
  .catch((error) => {
    console.error('❌ Error generating sitemap:', error);
    process.exit(1);
  });

