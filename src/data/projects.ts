export interface Project {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  heroImage: string;
  overview: string;
  problem: string;
  solution: string;
  gallery: string[];
}

export const projects: Project[] = [
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
    gallery: ['/projects/terrain-furniture.jpg']
  },
  {
    slug: 'artisans-corner',
    title: 'Artisan\'s Corner',
    description: 'An elegant e-commerce website for a marketplace featuring handcrafted goods, focusing on storytelling and product discovery.',
    tags: ['E-commerce', 'Web Design', 'Branding'],
    imageUrl: '/projects/artisans-corner-ecommerce.jpg',
    heroImage: '/projects/artisans-corner-ecommerce.jpg',
    overview: 'Artisan\'s Corner is a platform that connects makers of handcrafted goods with customers who appreciate quality and artistry. The website needed to be a beautiful and functional e-commerce experience that highlights the unique stories behind the products and their creators.',
    problem: 'The challenge was to create a design that felt both premium and personal. The platform needed to support a wide variety of products while maintaining a cohesive brand identity. The user journey from product discovery to checkout had to be seamless and inspiring.',
    solution: 'The final design uses a minimalist aesthetic with high-quality photography to let the products shine. We implemented features like "Meet The Makers" profiles and "Browse by Craft" to encourage exploration. The result is a visually-driven site that not only sells products but also builds a community around craftsmanship.',
    gallery: ['/projects/artisans-corner-ecommerce.jpg']
  }
];