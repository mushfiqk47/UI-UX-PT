type Project = {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  heroImage: string;
  overview: string;
  problem: string;
  solution: string;
  research?: string;
  uxStrategy?: string;
  uiDesign?: string;
  keyTakeaways?: string;
  gallery: string[];
}

export const projects: Project[] = [
  {
    slug: 'generations-artisan-co',
    title: 'Generations Artisan Co.',
    description: 'A complete UX strategy and UI redesign for a heritage brand to create an immersive digital experience that reflects legacy, quality, and community.',
    tags: ['UI/UX Strategy', 'Branding', 'Web Design'],
    imageUrl: '/projects/generations-artisan.jpg',
    heroImage: '/projects/generations-artisan.jpg',
    overview: `
"Generations Artisan Co." is a brand built on a heritage of craftsmanship, where products are designed to be cherished and passed down through families. Their existing digital presence was fragmented and failed to communicate the depth of their story, the quality of their work, and the value of their community.

This project involved a complete UX strategy and UI redesign for their primary marketing website. The goal was to transform a static online brochure into an immersive digital experience that reflects the brand's core values: legacy, quality, and community.

My Role: Lead UI/UX Designer
Responsibilities: User Research, Information Architecture, Wireframing, Visual Design, Prototyping
Timeline: 8 Weeks
    `,
    problem: `
The initial website audit revealed several key issues:
- Unclear Value Proposition: The messaging was abstract and failed to immediately communicate what the company does.
- Ineffective Content Hierarchy: Important sections were presented with confusing financial terminology, which was alienating for potential customers.
- Weak Call-to-Actions (CTAs): Vague statements provided no clear path for user engagement.
- Lack of Trust & Social Proof: The "From Our Community" section was underdeveloped and offered no clear benefit.

User Problem Statement:
"How might we help potential customers who value quality and heritage quickly understand the brand's legacy, easily explore its products, and feel confident in making a significant, long-term investment?"
    `,
    solution: `
The information architecture was reorganized to guide users on a journey from discovery to commitment. Key UX decisions included:
- Reframing the Hero Section: We replaced an ambiguous tagline with a clear, value-driven headline: "Heirloom Quality, Designed for Modern Living."
- Clarifying Pricing: The section was renamed to "Investment & Process," with transparent "Starting From" figures for different service tiers.
- Creating a Clear Value Proposition: A dense text block was transformed into an icon-based section with four clear pillars: Technical Mastery, Sustainable Sourcing, Multi-Generational Design, and Personalized Collaboration.
- Building a Compelling Community Section: We developed a robust "Family Stories" section with high-quality testimonials and transformed "Join Our Community" into "Join the Legacy" with tangible benefits.

The UI was designed with a visual language of heritage and clarity, using a classic Serif for headings, a clean Sans-Serif for body text, and an earthy, neutral color palette. The redesigned website successfully repositioned the brand, leading to an increase in consultation requests and time-on-site.
    `,
    research: `
We ran stakeholder interviews with founders and master artisans, audited existing content, and reviewed analytics to understand drop‑off points. A competitive scan of heritage and luxury craft brands informed expectations around narrative, provenance, and proof. Three key personas emerged—The Heirloom Buyer, The Gift Giver, and The Interior Designer—each with distinct information needs along the journey.
    `,
    uxStrategy: `
We structured the experience as a guided narrative: Story → Craft → Collection → Commitment. Progressive disclosure simplified dense content, while trust anchors (origin, materials, guarantees) appeared contextually near CTAs. A modular IA allowed case studies, maker profiles, and community stories to interlink, keeping users engaged without losing orientation.
    `,
    uiDesign: `
A typographic system paired a refined serif for headlines with an unobtrusive sans for body copy. Warm neutrals and subdued accents supported documentary‑style photography. We introduced editorial layouts, subtle motion for wayfinding, and disciplined spacing for calmness and clarity—mirroring the brand’s values of legacy and care.
    `,
    keyTakeaways: `
The site moved from static brochure to living brand experience. Engagement deepened (longer session duration, more gallery views), consultation interest increased, and the team gained a reusable system of components for future launches—without diluting the heritage feel.
    `,
    gallery: ['/projects/generations-artisan.jpg']
  },
  {
    slug: 'dantage-digital-agency',
    title: 'Dantage Digital Agency',
    description: 'A comprehensive website redesign for a digital agency to boost their online presence and lead generation.',
    tags: ['Web Design', 'Branding', 'UI/UX'],
    imageUrl: '/projects/dantage-agency-light.jpg',
    heroImage: '/projects/dantage-agency-dark.jpg',
    overview: 'Dantage is a full-service digital agency that needed a new website to reflect their expertise and attract high-value clients. The goal was to create a modern, professional, and high-converting online platform that effectively communicates their brand and services.',
    problem: 'The previous website was outdated, difficult to navigate, and did not effectively showcase their portfolio or services. It suffered from a high bounce rate, failed to generate qualified leads, and did not represent the quality of their work, hindering business growth.',
    solution: 'We conducted a complete UX audit and redesigned the website from the ground up. The new design features a clean layout, intuitive navigation, and compelling case studies. We focused on clear calls-to-action, a streamlined contact process, and responsive design to improve lead generation and user experience across all devices.',
    research: `
Workshops clarified ICPs and service packaging. We audited GA data and session recordings to identify friction before contact. A competitor review benchmarked narrative depth, proof assets, and conversion pathways typical in agency sites.
    `,
    uxStrategy: `
We reframed the site around a clear lead path: Problem framing → Proof (case studies, outcomes, stack) → Service depth → Conversion. A case‑study taxonomy aligned sectors, deliverables, and results to help prospects self‑qualify. Frictionless CTAs (book a call, request proposal) were surfaced contextually.
    `,
    uiDesign: `
A confident visual language with strong contrast, disciplined grid, and purposeful whitespace. We standardized components for hero, service cards, results blocks, and testimonial sliders. The design scales from mobile to widescreen without losing hierarchy.
    `,
    keyTakeaways: `
Prospects reach relevant proof faster, with clearer next steps and fewer dead ends. Lead quality improves through better self‑selection, and the team can publish new case studies quickly using reusable patterns.
    `,
    gallery: ['/projects/dantage-agency-light.jpg', '/projects/dantage-agency-dark.jpg']
  },
  {
    slug: 'karya-energy',
    title: 'Karya Energy',
    description: 'A clean and modern website for a renewable energy provider, focusing on quality, trust, and sustainability.',
    tags: ['Web Design', 'Corporate', 'UI'],
    imageUrl: '/projects/karya-energy-homepage.jpg',
    heroImage: '/projects/karya-energy-homepage.jpg',
    overview: 'Karya is a leading provider in the renewable energy sector. They required a new website to establish their brand as a trusted leader, showcase their services, and educate potential clients about the benefits of sustainable energy solutions.',
    problem: 'Their existing online presence did not reflect their status as an industry leader. The site lacked clear information architecture, was not mobile-friendly, and failed to engage visitors, resulting in missed opportunities for client acquisition and partnerships.',
    solution: 'The new website was designed with a focus on trust and clarity. It features a professional and modern aesthetic, detailed service pages, and data-driven visualizations of their impact. The user experience was optimized for easy navigation, helping users find information about solar panels and wind power generators quickly.',
    research: `
Stakeholder and sales interviews exposed the most common pre‑sales questions. We reviewed technical documentation, certifications, and compliance requirements, and analyzed search patterns around solar and wind solutions to inform content depth.
    `,
    uxStrategy: `
We organized content into solution hubs (Solar, Wind, Storage) with audience pathways (Commercial, Municipal, Industrial). Clear ROI narratives, downloadable specs, and inquiry forms meet buyers at different evaluation stages.
    `,
    uiDesign: `
A restrained corporate aesthetic with accessible contrast, clean iconography, and simple data visualizations. Photography and maps humanize scale while maintaining credibility. Responsive tables make specs readable on mobile.
    `,
    keyTakeaways: `
The site communicates expertise without jargon, increases trust through transparent details, and shortens time‑to‑contact via clearer pathways and artifacts (datasheets, certifications).
    `,
    gallery: ['/projects/karya-energy-homepage.jpg']
  },
  {
    slug: 'terrain-furniture',
    title: 'Terrain Furniture',
    description: 'An immersive e-commerce experience for a sustainable furniture brand, focusing on craftsmanship and storytelling.',
    tags: ['E-commerce', 'Web Design', 'Branding'],
    imageUrl: '/projects/terrain-furniture.jpg',
    heroImage: '/projects/terrain-furniture.jpg',
    overview: 'Terrain is a brand dedicated to sustainably sourced, handcrafted furniture. They needed an e-commerce website that not only sold products but also conveyed their commitment to craftsmanship, sustainability, and community.',
    problem: 'The challenge was to create a shopping experience that felt premium and personal, avoiding the generic feel of many large e-commerce sites. The site needed to effectively tell the story behind each piece and build a connection with the customer.',
    solution: 'The new website features a rich, editorial design with high-quality photography and compelling storytelling. We implemented features like "Our Sustainability Promise" and "Meet the Artisans" to build trust. The product pages are detailed and immersive, and the checkout process is streamlined for a seamless user journey.',
    research: `
User interviews highlighted the importance of provenance and material detail. We studied high‑performing PDP patterns and audited product photography requirements to support an editorial shopping experience.
    `,
    uxStrategy: `
We built story‑led browsing that connects Collection → Material → Maker. PDPs use modular narrative blocks (provenance, process, material care) and guided filters drive quicker discovery. Bundles and recommendations increase perceived value.
    `,
    uiDesign: `
Editorial layouts with large, color‑accurate imagery and calm typography create a premium feel. Motion reinforces feedback (add‑to‑cart, swatches). Accessibility and performance were prioritized for a smooth purchase flow.
    `,
    keyTakeaways: `
Shoppers spend more time with products and move to cart with greater confidence. Content modules scale across launches, keeping the brand storytelling consistent.
    `,
    gallery: ['/projects/terrain-furniture.jpg']
  },
  {
    slug: 'artisans-corner',
    title: "Artisan's Corner",
    description: 'An elegant e-commerce website for a marketplace featuring handcrafted goods, focusing on storytelling and product discovery.',
    tags: ['E-commerce', 'Web Design', 'Branding'],
    imageUrl: '/projects/artisans-corner-ecommerce.jpg',
    heroImage: '/projects/artisans-corner-ecommerce.jpg',
    overview: "Artisan's Corner is a platform that connects makers of handcrafted goods with customers who appreciate quality and artistry. The website needed to be a beautiful and functional e-commerce experience that highlights the unique stories behind the products and their creators.",
    problem: 'The challenge was to create a design that felt both premium and personal. The platform needed to support a wide variety of products while maintaining a cohesive brand identity. The user journey from product discovery to checkout had to be seamless and inspiring.',
    solution: 'The final design uses a minimalist aesthetic with high-quality photography to let the products shine. We implemented features like "Meet The Makers" profiles and "Browse by Craft" to encourage exploration. The result is a visually-driven site that not only sells products but also builds a community around craftsmanship.',
    research: `
We interviewed sellers to map onboarding pain points and buyers to understand discovery behaviors. Search log analysis informed category, craft, and material facets. Marketplace trust patterns (policies, reviews, fulfillment clarity) shaped content needs.
    `,
    uxStrategy: `
We emphasized discovery with Browse by Craft, rich Maker Profiles, and faceted search. Story surfaces (process, materials, locality) appear across listing and PDP to differentiate items beyond price.
    `,
    uiDesign: `
A minimal system keeps the brand present while letting diverse products lead. A flexible card system, maker badges, and neutral palettes ensure consistency. Visual emphasis on photography and simple motion maintain focus on craft.
    `,
    keyTakeaways: `
Improved product discovery and trust signals lift conversion. Maker activation benefits from clearer profiles and lightweight onboarding, while the marketplace retains a cohesive identity at scale.
    `,
    gallery: ['/projects/artisans-corner-ecommerce.jpg']
  }
];
