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
    imageUrl: '/projects/dantage-light.jpg',
    heroImage: '/projects/dantage-dark.jpg',
    overview: 'Dantage is a full-service digital agency that needed a new website to reflect their expertise and attract high-value clients. The goal was to create a modern, professional, and high-converting online platform that effectively communicates their brand and services.',
    problem: 'The previous website was outdated, difficult to navigate, and did not effectively showcase their portfolio or services. It suffered from a high bounce rate, failed to generate qualified leads, and did not represent the quality of their work, hindering business growth.',
    solution: 'We conducted a complete UX audit and redesigned the website from the ground up. The new design features a clean layout, intuitive navigation, and compelling case studies. We focused on clear calls-to-action, a streamlined contact process, and responsive design to improve lead generation and user experience across all devices.',
    gallery: ['/projects/dantage-light.jpg', '/projects/dantage-dark.jpg']
  },
  {
    slug: 'karya-energy',
    title: 'Karya Energy',
    description: 'A clean and modern website for a renewable energy provider, focusing on quality, trust, and sustainability.',
    tags: ['Web Design', 'Corporate', 'UI'],
    imageUrl: '/projects/karya.jpg',
    heroImage: '/projects/karya.jpg',
    overview: 'Karya is a leading provider in the renewable energy sector. They required a new website to establish their brand as a trusted leader, showcase their services, and educate potential clients about the benefits of sustainable energy solutions.',
    problem: 'Their existing online presence did not reflect their status as an industry leader. The site lacked clear information architecture, was not mobile-friendly, and failed to engage visitors, resulting in missed opportunities for client acquisition and partnerships.',
    solution: 'The new website was designed with a focus on trust and clarity. It features a professional and modern aesthetic, detailed service pages, and data-driven visualizations of their impact. The user experience was optimized for easy navigation, helping users find information about solar panels and wind power generators quickly.',
    gallery: ['/projects/karya.jpg']
  },
  {
    slug: 'ecosave-audits',
    title: 'EcoSave Home Energy',
    description: 'A user-friendly landing page for a home energy audit service, designed to simplify booking and increase conversions.',
    tags: ['Landing Page', 'UX', 'Conversion Optimization'],
    imageUrl: '/projects/ecosave.jpg',
    heroImage: '/projects/ecosave.jpg',
    overview: 'EcoSave provides professional energy audits to help homeowners identify inefficiencies, save money, and reduce their carbon footprint. The goal was to create a landing page that clearly explains the service and makes it easy for users to book an audit.',
    problem: 'Potential customers were confused about the audit process and the value proposition. The previous booking system was clunky and led to a high drop-off rate. The page lacked trust signals and customer testimonials, which are crucial for a service-based business.',
    solution: 'We designed a clear, 3-step process to explain "How it Works." The new design includes a simple and intuitive booking form, transparent pricing, and prominent sections for customer testimonials and certifications. This approach demystified the service and built trust, leading to a significant increase in scheduled audits.',
    gallery: ['/projects/ecosave.jpg']
  },
  {
    slug: 'artisans-corner',
    title: 'Artisan\'s Corner',
    description: 'An elegant e-commerce website for a marketplace featuring handcrafted goods, focusing on storytelling and product discovery.',
    tags: ['E-commerce', 'Web Design', 'Branding'],
    imageUrl: '/projects/artisan.jpg',
    heroImage: '/projects/artisan.jpg',
    overview: 'Artisan\'s Corner is a platform that connects makers of handcrafted goods with customers who appreciate quality and artistry. The website needed to be a beautiful and functional e-commerce experience that highlights the unique stories behind the products and their creators.',
    problem: 'The challenge was to create a design that felt both premium and personal. The platform needed to support a wide variety of products while maintaining a cohesive brand identity. The user journey from product discovery to checkout had to be seamless and inspiring.',
    solution: 'The final design uses a minimalist aesthetic with high-quality photography to let the products shine. We implemented features like "Meet The Makers" profiles and "Browse by Craft" to encourage exploration. The result is a visually-driven site that not only sells products but also builds a community around craftsmanship.',
    gallery: ['/projects/artisan.jpg']
  }
];