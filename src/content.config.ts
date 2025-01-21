// Import the glob loader
import { glob } from "astro/loaders";
// Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";

// Define a `loader` and `schema` for each collection
const curiosities = defineCollection({
    loader: glob({ pattern: '**/*.md', base: "./src/content/curiosities" }),
    schema: z.object({
      slug: z.string(),
      title: z.string(),
      postDate: z.date(),
      editedDate: z.date(),
      description: z.string(),
      tags: z.array(z.string()),
    })
});
// Export a single `collections` object to register your collection(s)
export const collections = { curiosities };