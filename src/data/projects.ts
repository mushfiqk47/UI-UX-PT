export type Project = {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  heroImage: string;
  gallery?: string[];
  overview: string;
  problem: string;
  research: string;
  uxStrategy: string;
  uiDesign: string;
  keyTakeaways: string;
};

export const projects: Project[] = [
  {
    slug: "terrain",
    title: "Terrain",
    description:
      "Sustainably crafted furniture designed to last generations, not seasons.",
    tags: ["E-commerce", "Sustainability", "Storytelling"],
    heroImage: "https://cdn.builder.io/api/v1/image/assets%2F42744ba418204494ab1123ba3d167847%2Fbd26291cd2474421839a5b8e75581572?format=webp&width=800",
    gallery: ["https://cdn.builder.io/api/v1/image/assets%2F42744ba418204494ab1123ba3d167847%2Fbd26291cd2474421839a5b8e75581572?format=webp&width=800"],
    overview:
      "Terrain creates heirloom-quality furniture with sustainable materials and artisan techniques. The goal was to evolve a static catalog into an experience that communicates legacy, craft, and conscience across the journey.",
    problem:
      "The previous experience felt like a generic catalog and didn’t communicate provenance, materials, or care. Users struggled to understand why Terrain was ‘worth it’ beyond aesthetics.",
    research:
      "We reviewed analytics, ran interviews with repeat buyers, and benchmarked premium furniture DTC patterns. Personas emphasized provenance, material care, and longevity guarantees as critical decision drivers.",
    uxStrategy:
      "Restructure the journey: Story → Craft → Collection → Commitment. Surface trust anchors (materials, sourcing, guarantees) near CTAs. Create collection hubs and editorial PDP modules (provenance, care, artisan notes).",
    uiDesign:
      "Editorial layouts, warm neutrals, and documentary photography. Serif display for heritage, clean sans for clarity. Subtle motion and generous spacing create calm and confidence.",
    keyTakeaways:
      "Higher engagement on PDP narrative modules and uplift in add-to-cart from trust proximity. Content system scales to new collections without diluting heritage tone.",
  },
  {
    slug: "artisans-corner",
    title: "Artisan’s Corner",
    description:
      "Marketplace connecting local artisans with those who value handcrafted goods.",
    tags: ["Marketplace", "E-commerce", "Makers"],
    heroImage: "https://cdn.builder.io/api/v1/image/assets%2F42744ba418204494ab1123ba3d167847%2F1f549c6b903d49fd871f764bb9e45220?format=webp&width=800",
    gallery: ["https://cdn.builder.io/api/v1/image/assets%2F42744ba418204494ab1123ba3d167847%2F1f549c6b903d49fd871f764bb9e45220?format=webp&width=800"],
    overview:
      "A curated marketplace to discover makers and their stories. We needed a shopping flow that celebrates craft while keeping discovery simple and performant.",
    problem:
      "Generic grid browsing underplayed maker identity, and filters didn’t reflect how users shop by craft, material, or locality. Trust signs for marketplace fulfillment were inconsistent.",
    research:
      "Interviews with buyers and sellers plus search log analysis. People browse by craft first, then material and story. Sellers needed clearer profiles and lightweight onboarding.",
    uxStrategy:
      "Introduce Browse by Craft, rich Maker Profiles, and consistent trust patterns (policies, reviews). PDPs use modular storytelling (process, materials, locality) to differentiate beyond price.",
    uiDesign:
      "Minimal system that lets products lead: neutral palette, flexible cards, strong photo emphasis. Motion is restrained to keep focus on craft.",
    keyTakeaways:
      "Improved discovery, stronger trust, and better maker activation. Content modules scale across diverse inventory while maintaining brand cohesion.",
  },
  {
    slug: "karya",
    title: "Karya Energy",
    description:
      "Clean, credible website for a renewable energy provider with proof-driven content.",
    tags: ["Corporate", "Energy", "B2B"],
    heroImage: "https://cdn.builder.io/api/v1/image/assets%2F42744ba418204494ab1123ba3d167847%2F9a566679f9454d5890a1f9529629ab57?format=webp&width=800",
    gallery: ["https://cdn.builder.io/api/v1/image/assets%2F42744ba418204494ab1123ba3d167847%2F9a566679f9454d5890a1f9529629ab57?format=webp&width=800"],
    overview:
      "Karya required a proof-rich site for solar and wind solutions serving multiple audiences. The experience needed to convert interest into qualified conversations.",
    problem:
      "Outdated IA, unclear value communication, and limited mobile usability led to high bounce and low inquiries.",
    research:
      "Stakeholder and sales interviews revealed repeated pre‑sales questions. We analyzed search patterns and compliance requirements to inform content depth.",
    uxStrategy:
      "Organize by solution hubs (Solar, Wind, Storage) with audience pathways (Commercial, Municipal, Industrial). Place ROI narratives, datasheets, and inquiry CTAs contextually.",
    uiDesign:
      "Restrained corporate aesthetic with accessible contrast, clean iconography, and simple data viz. Responsive tables and artifact downloads aid evaluation on any device.",
    keyTakeaways:
      "Clearer pathways shortened time‑to‑contact and increased qualified leads while communicating technical credibility without jargon.",
  },
  {
    slug: "dantage",
    title: "Dantage Digital Agency",
    description:
      "Strategy-led web, software, branding, motion, and SEO solutions that drive growth.",
    tags: ["Agency", "Web", "Branding", "SEO"],
    heroImage: "https://cdn.builder.io/api/v1/image/assets%2F42744ba418204494ab1123ba3d167847%2F23130e62753044dc8349f84a4028056a?format=webp&width=800",
    gallery: ["https://cdn.builder.io/api/v1/image/assets%2F42744ba418204494ab1123ba3d167847%2F23130e62753044dc8349f84a4028056a?format=webp&width=800"],
    overview:
      "Dantage needed a conversion-focused site that surfaces outcomes, proof, and services with a clear path to contact.",
    problem:
      "The prior site underplayed outcomes, scattered case studies, and lacked a strong lead path, resulting in poor self-qualification.",
    research:
      "Workshops defined ICPs and service packaging; analytics and session reviews exposed friction pre‑contact. Competitor scan benchmarked proof density and conversion patterns.",
    uxStrategy:
      "Reframe around a lead path: Problem framing → Proof (case studies, outcomes) → Service depth → Conversion. Surface frictionless CTAs and structured case taxonomy.",
    uiDesign:
      "Confident, high-contrast system with disciplined grid and component standardization. Motion adds clarity to interactions without distraction.",
    keyTakeaways:
      "Prospects reach relevant proof faster and self‑qualify better, increasing lead quality and speed to conversation.",
  },
  {
    slug: "prodmast",
    title: "Prodmast",
    description:
      "Precision engineering and automation solutions for modern manufacturing.",
    tags: ["Manufacturing", "Automation", "B2B"],
    heroImage: "https://cdn.builder.io/api/v1/image/assets%2F42744ba418204494ab1123ba3d167847%2Fcd731d6d35e741c1844efe8f6d1b4cc5?format=webp&width=800",
    gallery: ["https://cdn.builder.io/api/v1/image/assets%2F42744ba418204494ab1123ba3d167847%2Fcd731d6d35e741c1844efe8f6d1b4cc5?format=webp&width=800"],
    overview:
      "Prodmast helps manufacturers increase efficiency, reduce costs, and innovate. The site needed to communicate complex capabilities simply and credibly.",
    problem:
      "Scattered content and broad messaging made it hard for prospects to see fit or value. Proof and outcomes weren’t connected to services.",
    research:
      "Stakeholder interviews and case review identified key metrics prospects care about: throughput, downtime reduction, cost savings, and time‑to‑market.",
    uxStrategy:
      "Map services to measurable outcomes and embed case metrics throughout. Provide clear consultation pathways and expectations.",
    uiDesign:
      "Modern industrial aesthetic with clear hierarchy and iconography. Trust blocks, metric callouts, and structured sections improve scanability.",
    keyTakeaways:
      "Improved clarity and credibility increased consultation requests and aligned expectations pre‑sales.",
  },
];
