// ── Per-route SEO meta injection (server-side) ───────────────────────────────
// Runs on Netlify's edge BEFORE the HTML reaches the client. Rewrites
// <title>, meta description, canonical, OG/Twitter tags so crawlers
// (LinkedInBot, Twitterbot, Slackbot, Googlebot non-JS pass) see the
// correct per-route metadata.
//
// Humans still get the same SPA — seo.js updates these tags on client-side
// navigation. This function only matters on the FIRST byte of a direct visit
// or a refresh.
//
// If this function errors or times out, Netlify falls back to the original
// response — worst case is current behaviour, nothing breaks.

import type { Context } from "https://edge.netlify.com";

const ORIGIN = "https://superkraja.com";
const DEFAULT_IMG = ORIGIN + "/assets/kraja-portrait-new.jpg";

type RouteInfo = { title: string; description: string; image?: string };

// Mirrors the map in seo.js. Keep them in sync when adding routes.
const ROUTES: Record<string, RouteInfo> = {
  "/": {
    title: "Kraja, Product Designer | Vladimir Krajišnik",
    description:
      "Portfolio of Vladimir 'Kraja' Krajišnik. Product Designer with 15+ years of experience in UX, UI, design systems, prototyping, and brand identity. Based in Belgrade.",
  },
  "/about": {
    title: "About Vladimir 'Kraja' Krajišnik | Product Designer",
    description:
      "About Vladimir Krajišnik, a Belgrade-based Product Designer with 15+ years of experience designing apps, brands, and design systems across industries.",
  },

  // Superpowers
  "/user-experience": {
    title: "User Experience Design Superpower | Kraja",
    description:
      "How I approach user experience design: strategy, blueprints, design rules, and user journey mapping that lead to easy-to-use products.",
  },
  "/ui-design": {
    title: "UI & Design Systems Superpower | Kraja",
    description:
      "Fine art in the digital space. How I craft interfaces and design systems that developers can build on and brands can grow with.",
  },
  "/prototyping": {
    title: "Prototyping & Testing Superpower | Kraja",
    description:
      "Why prototyping and user testing save the most valuable resource of all: time. My approach to discovering and fixing problems before production.",
  },
  "/brand-identity": {
    title: "Brand Identity Design Superpower | Kraja",
    description:
      "Crafting visual identities that shape how people perceive a brand. Consistency, type, color, and the systems behind a memorable mark.",
  },

  // UX cases
  "/luxury-watch": {
    title: "Luxury Watch App | UI/UX Case Study by Kraja",
    description:
      "Designing a luxury watch mobile app from scratch with a full design system. Award-winner at the 2025 Swiss Design Competition.",
    image: ORIGIN + "/assets/Luxury Watch App Hero.jpg",
  },
  "/baby-food": {
    title: "Baby Food Subscription | UI/UX Case Study by Kraja",
    description:
      "A monthly baby-food subscription service designed for tired parents who shop on their phones at 2 a.m. Onboarding redesigned around the baby.",
    image: ORIGIN + "/assets/baby-main.png",
  },
  "/consulting": {
    title: "Consulting Services | UX Case Study by Kraja",
    description:
      "Online consultations for startups and small businesses. Designed so founders book a call the way they actually think.",
    image: ORIGIN + "/assets/consult-hero.png",
  },
  "/real-estate": {
    title: "Real Estate App | UX Case Study by Kraja",
    description:
      "Communication between real-estate agents and their clients, faster than WhatsApp. Unified inbox where listings sit next to chat.",
    image: ORIGIN + "/assets/realestate-hero.jpg",
  },
  "/travel": {
    title: "Travel App | UI/UX Case Study by Kraja",
    description:
      "Reserving and discovering travel destinations for young people, built around how Gen-Z actually plans trips on their phones.",
    image: ORIGIN + "/assets/travel-hero.jpg",
  },
  "/interface-designs": {
    title: "Interface Designs Gallery | Kraja",
    description:
      "A gallery of interface design work across multiple products: dashboards, mobile flows, design system components, and marketing pages.",
  },

  // Brand projects
  "/brand/logo-design": {
    title: "Logo Design Portfolio | Kraja",
    description:
      "20+ logos across industries: tech startups, real estate agencies, dental clinics, adventure brands. Each one built to own its space.",
  },
  "/brand/nef": {
    title: "NEF, A Quiet Logistics Mark | Kraja",
    description:
      "Brand identity for NEF, a B2B logistics company that didn't want to look like a B2B logistics company.",
  },
  "/brand/bos": {
    title: "BOS Sport Club Identity | Kraja",
    description:
      "A youth basketball club identity built for jerseys, gym walls, and Instagram in equal measure.",
  },
  "/brand/uranak": {
    title: "Uranak Music Festival Identity | Kraja",
    description:
      "Full suite of graphic assets for Uranak, Serbia's biggest May Day music festival held at Srebrno Jezero.",
  },
  "/brand/serbian-week": {
    title: "Serbian Week Ski Festival Identity | Kraja",
    description:
      "Annual ski week at Risoul, France. Identity built to stretch from social banners to slope signage without losing energy.",
  },
  "/brand/bed-and-beer": {
    title: "Bed & Beer Hostel Identity | Kraja",
    description:
      "A backpacker hostel that brews its own beer downstairs. Brand built to feel friendly without being twee.",
  },
  "/brand/puzzle": {
    title: "Puzzle Travel Group | Kraja",
    description:
      "Travel agency brand identity work for Puzzle Group.",
  },
};

// HTML-attribute-safe escape (used for content="..." values + <title>).
function esc(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

// Replace the FIRST occurrence of a tag in the HTML, or no-op if not found.
// Using non-global regex is intentional — meta tags appear once in <head>.
function replaceTag(html: string, pattern: RegExp, replacement: string): string {
  return pattern.test(html) ? html.replace(pattern, replacement) : html;
}

export default async (request: Request, context: Context) => {
  const url = new URL(request.url);

  // Normalize: strip trailing slash (except root), lowercase comparison key.
  let path = url.pathname;
  if (path.length > 1 && path.endsWith("/")) path = path.slice(0, -1);

  const info = ROUTES[path];
  // Path not in our map → no rewriting needed (passes through unchanged).
  if (!info) return;

  // Let the origin produce the response, then inspect it.
  const response = await context.next();
  const contentType = response.headers.get("content-type") || "";

  // Only rewrite HTML. Static assets / JSON / etc. pass through.
  if (!contentType.includes("text/html")) return response;

  let html: string;
  try {
    html = await response.text();
  } catch {
    return response; // safety: if body can't be read, return original
  }

  const fullUrl = path === "/" ? ORIGIN + "/" : ORIGIN + path;
  const image = info.image || DEFAULT_IMG;
  const title = esc(info.title);
  const description = esc(info.description);
  const imgEsc = esc(image);
  const urlEsc = esc(fullUrl);

  // Title
  html = replaceTag(html, /<title>[\s\S]*?<\/title>/i, `<title>${title}</title>`);

  // Meta description
  html = replaceTag(
    html,
    /<meta\s+name="description"\s+content="[^"]*"\s*\/?>/i,
    `<meta name="description" content="${description}" />`,
  );

  // Open Graph
  html = replaceTag(
    html,
    /<meta\s+property="og:url"\s+content="[^"]*"\s*\/?>/i,
    `<meta property="og:url" content="${urlEsc}" />`,
  );
  html = replaceTag(
    html,
    /<meta\s+property="og:title"\s+content="[^"]*"\s*\/?>/i,
    `<meta property="og:title" content="${title}" />`,
  );
  html = replaceTag(
    html,
    /<meta\s+property="og:description"\s+content="[^"]*"\s*\/?>/i,
    `<meta property="og:description" content="${description}" />`,
  );
  html = replaceTag(
    html,
    /<meta\s+property="og:image"\s+content="[^"]*"\s*\/?>/i,
    `<meta property="og:image" content="${imgEsc}" />`,
  );

  // Twitter
  html = replaceTag(
    html,
    /<meta\s+name="twitter:title"\s+content="[^"]*"\s*\/?>/i,
    `<meta name="twitter:title" content="${title}" />`,
  );
  html = replaceTag(
    html,
    /<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/?>/i,
    `<meta name="twitter:description" content="${description}" />`,
  );
  html = replaceTag(
    html,
    /<meta\s+name="twitter:image"\s+content="[^"]*"\s*\/?>/i,
    `<meta name="twitter:image" content="${imgEsc}" />`,
  );

  // Canonical: replace if present, otherwise inject just before </head>.
  const canonicalTag = `<link rel="canonical" href="${urlEsc}" />`;
  if (/<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/i.test(html)) {
    html = html.replace(
      /<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/i,
      canonicalTag,
    );
  } else {
    html = html.replace(/<\/head>/i, `${canonicalTag}\n</head>`);
  }

  // Return rewritten body; preserve original status & headers (except length).
  const headers = new Headers(response.headers);
  headers.delete("content-length"); // body length changed
  return new Response(html, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
};

// Match all routes — function decides per-path whether to rewrite.
export const config = { path: "/*" };
