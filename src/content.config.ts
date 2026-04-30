import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const news = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/news' }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    pillar: z.enum(['segitseg', 'zene', 'sport', 'kultura']),
    eventSeries: z.string().optional(),
    photos: z.array(z.string()).default([]),
    photoCredit: z.string().optional(),
    excerpt: z.string(),
  }),
});

const events = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/events' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    month: z.string(),
    pillar: z.enum(['segitseg', 'zene', 'sport', 'kultura']),
    slug: z.string(),
  }),
});

const partners = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/partners' }),
  schema: z.object({
    name: z.string(),
    url: z.string().url(),
    logoPath: z.string(),
  }),
});

const results = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/results' }),
  schema: z.object({
    date: z.string(),
    race: z.string(),
    city: z.string(),
    distance: z.string(),
    athlete: z.string(),
    time: z.string(),
    placement: z.number().optional(),
  }),
});

export const collections = { news, events, partners, results };
