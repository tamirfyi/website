import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    published: z.coerce.date(),
    updated: z.coerce.date().optional(),
  }),
});

const experience = defineCollection({
  type: 'content',
  schema: z.object({
    company: z.string(),
    position: z.string(),
    description: z.string(),
    start: z.coerce.date(),
    end: z.coerce.date().optional(),
  }),
});

export const collections = { blog, experience };
