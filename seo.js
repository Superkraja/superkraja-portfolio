// ── SEO helper ────────────────────────────────────────────────────────────────
// Updates <title>, meta description, canonical, OG/Twitter tags, and a
// per-route JSON-LD block whenever the route changes. The static head still
// carries homepage defaults; this script overwrites them in-place.
//
// Routes recognised (matching app.jsx):
//   /                              → homepage
//   /about                         → about page
//   /<spec-slug>                   → superpower page
//   /<case-slug>                   → case study
//   /brand/<brand-slug>            → brand project

(function () {
  const ORIGIN = "https://superkraja.com";
  const DEFAULT_IMG = ORIGIN + "/assets/kraja-portrait-new.jpg";
  const SITE = "SuperKraja";
  const AUTHOR = "Vladimir Krajišnik";

  // ── Per-route content map ───────────────────────────────────────────────────
  // Keep titles ≤60 chars and descriptions ≤155 chars where possible.
  const ROUTES = {
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
    "/luxury-watch": {
      title: "Luxury Watch App | UI/UX Case Study by Kraja",
      description:
        "Designing a luxury watch mobile app from scratch with a full design system. Award-winner at the 2025 Swiss Design Competition.",
      type: "case",
      image: ORIGIN + "/assets/Luxury Watch App Hero.jpg",
    },
    "/baby-food": {
      title: "Baby Food Subscription | UI/UX Case Study by Kraja",
      description:
        "A monthly baby-food subscription service designed for tired parents who shop on their phones at 2 a.m. Onboarding redesigned around the baby.",
      type: "case",
      image: ORIGIN + "/assets/baby-main.png",
    },
    "/consulting": {
      title: "Consulting Services | UX Case Study by Kraja",
      description:
        "Online consultations for startups and small businesses. Designed so founders book a call the way they actually think.",
      type: "case",
      image: ORIGIN + "/assets/consult-hero.png",
    },
    "/real-estate": {
      title: "Real Estate App | UX Case Study by Kraja",
      description:
        "Communication between real-estate agents and their clients, faster than WhatsApp. Unified inbox where listings sit next to chat.",
      type: "case",
      image: ORIGIN + "/assets/realestate-hero.jpg",
    },
    "/travel": {
      title: "Travel App | UI/UX Case Study by Kraja",
      description:
        "Reserving and discovering travel destinations for young people, built around how Gen-Z actually plans trips on their phones.",
      type: "case",
      image: ORIGIN + "/assets/travel-hero.jpg",
    },
    "/interface-designs": {
      title: "Interface Designs Gallery | Kraja",
      description:
        "A gallery of interface design work across multiple products: dashboards, mobile flows, design system components, and marketing pages.",
      type: "case",
    },
    "/brand/logo-design": {
      title: "Logo Design Portfolio | Kraja",
      description:
        "20+ logos across industries: tech startups, real estate agencies, dental clinics, adventure brands. Each one built to own its space.",
      type: "brand",
    },
    "/brand/nef": {
      title: "NEF, A Quiet Logistics Mark | Kraja",
      description:
        "Brand identity for NEF, a B2B logistics company that didn't want to look like a B2B logistics company.",
      type: "brand",
    },
    "/brand/bos": {
      title: "BOS Sport Club Identity | Kraja",
      description:
        "A youth basketball club identity built for jerseys, gym walls, and Instagram in equal measure.",
      type: "brand",
    },
    "/brand/uranak": {
      title: "Uranak Music Festival Identity | Kraja",
      description:
        "Full suite of graphic assets for Uranak, Serbia's biggest May Day music festival held at Srebrno Jezero.",
      type: "brand",
    },
    "/brand/serbian-week": {
      title: "Serbian Week Ski Festival Identity | Kraja",
      description:
        "Annual ski week at Risoul, France. Identity built to stretch from social banners to slope signage without losing energy.",
      type: "brand",
    },
    "/brand/bed-and-beer": {
      title: "Bed & Beer Hostel Identity | Kraja",
      description:
        "A backpacker hostel that brews its own beer downstairs. Brand built to feel friendly without being twee.",
      type: "brand",
    },
    "/brand/puzzle": {
      title: "Puzzle Travel Group | Kraja",
      description:
        "Travel agency brand identity work for Puzzle Group.",
      type: "brand",
    },
  };

  // ── Head element helpers ────────────────────────────────────────────────────
  function setMeta(attr, key, content) {
    let el = document.head.querySelector(`meta[${attr}="${key}"]`);
    if (!el) {
      el = document.createElement("meta");
      el.setAttribute(attr, key);
      document.head.appendChild(el);
    }
    el.setAttribute("content", content);
  }
  function setCanonical(href) {
    let el = document.head.querySelector('link[rel="canonical"]');
    if (!el) {
      el = document.createElement("link");
      el.setAttribute("rel", "canonical");
      document.head.appendChild(el);
    }
    el.setAttribute("href", href);
  }
  function setRouteJsonLd(json) {
    let el = document.head.querySelector('script[data-seo="route"]');
    if (!el) {
      el = document.createElement("script");
      el.type = "application/ld+json";
      el.setAttribute("data-seo", "route");
      document.head.appendChild(el);
    }
    el.textContent = JSON.stringify(json);
  }
  function clearRouteJsonLd() {
    const el = document.head.querySelector('script[data-seo="route"]');
    if (el) el.parentNode.removeChild(el);
  }

  // ── Build the JSON-LD blob for the current route ────────────────────────────
  function buildJsonLd(path, info) {
    if (!info || !info.type || path === "/" || path === "/about") return null;

    if (info.type === "case") {
      return {
        "@context": "https://schema.org",
        "@type": "CreativeWork",
        name: info.title.replace(/\s*\|\s*Kraja.*$/, "").trim(),
        description: info.description,
        url: ORIGIN + path,
        image: info.image || DEFAULT_IMG,
        author: { "@type": "Person", name: AUTHOR, alternateName: "Kraja" },
        creator: { "@type": "Person", name: AUTHOR, alternateName: "Kraja" },
      };
    }
    if (info.type === "brand") {
      return {
        "@context": "https://schema.org",
        "@type": "CreativeWork",
        name: info.title.replace(/\s*\|\s*Kraja.*$/, "").trim(),
        description: info.description,
        url: ORIGIN + path,
        image: info.image || DEFAULT_IMG,
        author: { "@type": "Person", name: AUTHOR, alternateName: "Kraja" },
        about: { "@type": "Thing", name: "Brand identity design" },
      };
    }
    return null;
  }

  // ── Public API: call this whenever route changes ────────────────────────────
  window.__updateSeoForRoute = function (path) {
    const info = ROUTES[path] || ROUTES["/"];
    const url = ORIGIN + (path === "/" ? "/" : path);
    const image = info.image || DEFAULT_IMG;

    document.title = info.title;
    setMeta("name", "description", info.description);
    setCanonical(url);

    setMeta("property", "og:title", info.title);
    setMeta("property", "og:description", info.description);
    setMeta("property", "og:url", url);
    setMeta("property", "og:image", image);
    setMeta("property", "og:site_name", SITE);

    setMeta("name", "twitter:title", info.title);
    setMeta("name", "twitter:description", info.description);
    setMeta("name", "twitter:image", image);

    const jsonLd = buildJsonLd(path, info);
    if (jsonLd) setRouteJsonLd(jsonLd);
    else clearRouteJsonLd();
  };

  // Run once on initial load (covers direct landings to deep links).
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () {
      window.__updateSeoForRoute(window.location.pathname);
    });
  } else {
    window.__updateSeoForRoute(window.location.pathname);
  }
})();
