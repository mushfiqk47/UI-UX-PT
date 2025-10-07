export const Footer = () => {
  const footerLinks = {
    Product: [
      { label: "Features", href: "#" },
      { label: "Integrations", href: "#" },
      { label: "Pricing", href: "#" },
      { label: "Changelog", href: "#" },
    ],
    Company: [
      { label: "About", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Customers", href: "#" },
    ],
    Resources: [
      { label: "Community", href: "#" },
      { label: "Contact", href: "#" },
      { label: "DPA", href: "#" },
      { label: "Terms of service", href: "#" },
    ],
    Social: [
      { label: "Dribbble", href: "#" },
      { label: "Behance", href: "https://www.behance.net/mushfiqkabir1" },
      { label: "LinkedIn", href: "#" },
    ],
  };

  return (
    <footer className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
          <div className="col-span-2 md:col-span-1">
            <a href="#" className="text-2xl font-bold text-foreground">
              MK
            </a>
          </div>
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-bold text-foreground">{title}</h4>
              <ul className="mt-4 space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-text-secondary hover:text-foreground">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-16 border-t border-border pt-8 text-center text-text-secondary">
          <p>© 2024 Mushfiq Kabir Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};