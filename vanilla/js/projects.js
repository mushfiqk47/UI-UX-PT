// Project data
const projects = [
    {
        slug: 'dantage-digital-agency',
        title: 'Dantage Digital Agency',
        description: 'A comprehensive website redesign for a digital agency to boost their online presence and lead generation.',
        tags: ['Web Design', 'Branding', 'UI/UX'],
        imageUrl: '/projects/dantage-light.jpg',
        heroImage: '/projects/dantage-dark.jpg'
    },
    {
        slug: 'karya-energy',
        title: 'Karya Energy',
        description: 'A clean and modern website for a renewable energy provider, focusing on quality, trust, and sustainability.',
        tags: ['Web Design', 'Corporate', 'UI'],
        imageUrl: '/projects/karya.jpg'
    },
    {
        slug: 'ecosave-audits',
        title: 'EcoSave Home Energy',
        description: 'A user-friendly landing page for a home energy audit service, designed to simplify booking and increase conversions.',
        tags: ['Landing Page', 'UX', 'Conversion Optimization'],
        imageUrl: '/projects/ecosave.jpg'
    },
    {
        slug: 'artisans-corner',
        title: "Artisan's Corner",
        description: 'An elegant e-commerce website for a marketplace featuring handcrafted goods, focusing on storytelling and product discovery.',
        tags: ['E-commerce', 'Web Design', 'Branding'],
        imageUrl: '/projects/artisan.jpg'
    }
];

// Function to create project cards
function createProjectCard(project) {
    return `
        <article class="project-card">
            <img src="${project.imageUrl}" alt="${project.title}" class="project-image">
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-tags">
                    ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
            </div>
        </article>
    `;
}

// Function to render all projects
function renderProjects() {
    const projectsGrid = document.getElementById('projectsGrid');
    if (projectsGrid) {
        projectsGrid.innerHTML = projects.map(project => createProjectCard(project)).join('');
    }
}

// Initialize projects when the DOM is loaded
document.addEventListener('DOMContentLoaded', renderProjects);