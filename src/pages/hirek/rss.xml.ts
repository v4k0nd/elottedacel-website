import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIRoute } from 'astro';

export const GET: APIRoute = async (context) => {
  const posts = await getCollection('news');

  return rss({
    title: 'Előtted a Cél Egyesület — Hírek',
    description: 'Az Előtted a Cél Egyesület legújabb hírei.',
    site: context.site!,
    items: posts
      .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf())
      .map((post) => ({
        title: post.data.title,
        description: post.data.excerpt,
        pubDate: post.data.date,
        link: `/hirek/${post.id}/`,
      })),
    customData: `<language>hu</language>`,
  });
};
