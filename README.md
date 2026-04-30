# Előtted a Cél Egyesület — Website

Static marketing site for the Előtted a Cél nonprofit based in Nyárádszereda, Romania. Built with Astro and Tailwind CSS v4, deployed to Cloudflare Pages at [elottedacel.ro](https://elottedacel.ro). The site supports Hungarian (primary) and Romanian, and serves as the credibility and conversion layer for the org's annual 3,5% tax-redirection campaign.

## Development

```bash
bun install       # install dependencies
bun run dev       # local dev server (http://localhost:4321)
bun run build     # static build → ./dist
bun run preview   # preview built site locally
bun run deploy    # deploy to Cloudflare Pages (requires wrangler login)
```

## Cloudflare Pages settings

| Setting | Value |
|---|---|
| Project name | `elottedacel-website` |
| Build command | `bun run build` |
| Build output directory | `dist` |
| Node.js version | 20+ |
