// Import the glob loader
import { glob } from "astro/loaders";
// Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";

// Define a `loader` and `schema` for each collection
const things = defineCollection({
    loader: glob({ pattern: '**/*.md', base: "./src/content/things" }),
    schema: z.object({
      slug: z.string(),
      title: z.string(),
      dateCreated: z.date(),
      dateModified: z.date().optional(),
      description: z.string().optional(),
      tags: z.array(z.string()).optional(),
      sitemapPriority: z.coerce.number().min(0.0).max(1.0).optional(),
    })
});

const thoughts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: "./src/content/thoughts" }),
  schema: z.object({
    slug: z.string(),
    title: z.string(),
    dateCreated: z.date(),
    dateModified: z.date().optional(),
    description: z.string().optional(),
    tags: z.array(z.string()).optional(),
    sitemapPriority: z.coerce.number().min(0.0).max(1.0).optional(),
  })
});

const trail = defineCollection({
  loader: glob({ pattern: '**/*.md', base: "./src/content/trail" }),
  schema: z.object({
    slug: z.string(),
    title: z.string(),
    link: z.string(),
    dateCreated: z.date(),
    dateModified: z.date().optional(),
    description: z.string().optional(),
    tags: z.array(z.string()).optional(),
    sitemapPriority: z.coerce.number().min(0.0).max(1.0).optional(),
  })
});
// Export a single `collections` object to register your collection(s)
export const collections = { things, thoughts, trail };