import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

// Define default priorities for different types of pages
const DEFAULT_PRIORITIES = {
  home: 1.0,
  sectionIndex: 0.8,
  content: 0.7
};

export const GET: APIRoute = async () => {
  // Get all content collections
  const trailEntries = await getCollection('trail');
  const thoughtsEntries = await getCollection('thoughts');
  const thingsEntries = await getCollection('things');

  // Combine all entries
  const allEntries = [
    ...trailEntries.map(entry => {
      // Explicitly check for undefined to handle 0.0 priority correctly
      const priority = entry.data.sitemapPriority === undefined 
        ? DEFAULT_PRIORITIES.content 
        : Number(entry.data.sitemapPriority);
      
      return {
        url: `/trail/${entry.data.slug}`,
        lastmod: entry.data.dateModified || entry.data.dateCreated,
        priority
      };
    }),
    ...thoughtsEntries.map(entry => {
      const priority = entry.data.sitemapPriority === undefined 
        ? DEFAULT_PRIORITIES.content 
        : Number(entry.data.sitemapPriority);
      
      return {
        url: `/thoughts/${entry.data.slug}`,
        lastmod: entry.data.dateModified || entry.data.dateCreated,
        priority
      };
    }),
    ...thingsEntries.map(entry => {
      const priority = entry.data.sitemapPriority === undefined 
        ? DEFAULT_PRIORITIES.content 
        : Number(entry.data.sitemapPriority);
      
      return {
        url: `/things/${entry.data.slug}`,
        lastmod: entry.data.dateModified || entry.data.dateCreated,
        priority
      };
    })
  ];

  // Add static pages with their own priorities
  const staticPages = [
    { url: '/', lastmod: new Date(), priority: DEFAULT_PRIORITIES.home },
    { url: '/trail', lastmod: new Date(), priority: DEFAULT_PRIORITIES.sectionIndex },
    { url: '/thoughts', lastmod: new Date(), priority: DEFAULT_PRIORITIES.sectionIndex },
    { url: '/things', lastmod: new Date(), priority: DEFAULT_PRIORITIES.sectionIndex }
  ];

  const allPages = [...staticPages, ...allEntries];

  // Generate sitemap XML
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allPages.map(page => `
  <url>
    <loc>https://salnad.me${page.url}</loc>
    <lastmod>${page.lastmod instanceof Date ? page.lastmod.toISOString() : new Date(page.lastmod).toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${page.priority.toFixed(1)}</priority>
  </url>`).join('')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml'
    }
  });
}; 