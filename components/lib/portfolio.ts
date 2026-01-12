export interface PortfolioItem {
    id: number;
    slug: string;
    title: string;
    client: string;
    industry: string;
    category: string;
    date: string;
    image: string;
    heroImage: string;
    images: string[];
    excerpt: string;
    challenge: string;
    solution: string;
    results: string[];
    services: string[];
    products: string[];
    testimonial: {
      text: string;
      author: string;
      role: string;
    };
    tags: string[];
    relatedProjects: {
      slug: string;
      title: string;
    }[];
  }

  export const portfolio: PortfolioItem[] = [
    {
      id: 1,
      slug: "luxury-cosmetic-packaging",
      title: "Luxury Cosmetic Packaging",
      client: "Glow Beauty",
      industry: "Cosmetics",
      category: "Packaging",
      date: "November 2024",
      image: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=600&h=400&fit=crop",
      heroImage: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=1200&h=600&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1607083206968-13611e3d76db?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1583241800698-bc4892cb456c?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?w=800&h=600&fit=crop",
      ],
      excerpt: "Premium packaging design that elevated brand perception and increased product value",
      challenge: "Glow Beauty, a Pakistani cosmetics brand, needed packaging that would compete with international luxury brands while maintaining affordability for the local market. Their existing packaging looked generic and didn't reflect the premium quality of their products.",
      solution: "We designed a complete packaging system featuring rigid boxes with soft-touch lamination, custom die-cut inserts, and rose gold foil stamping. The design incorporated traditional Pakistani motifs with modern minimalist aesthetics. We also created matching labels, tissue paper, and shopping bags to provide a cohesive brand experience.",
      results: [
        "68% increase in perceived product value based on customer surveys",
        "Product featured in 5 major fashion and beauty magazines",
        "45% increase in retail price point accepted by customers",
        "Instagram engagement increased 200% from unboxing videos",
        "Packaging won Best Cosmetic Packaging at Pakistan Design Awards",
      ],
      services: ["Custom Box Design", "Rigid Box Manufacturing", "Foil Stamping", "Label Printing"],
      products: ["Rigid Boxes", "Labels & Stickers", "Tissue Paper", "Shopping Bags"],
      testimonial: {
        text: "Fast Printing didn't just create packaging; they created a brand experience. Our customers now consider our packaging a luxury item in itself. The attention to detail and understanding of the cosmetics market was exceptional.",
        author: "Ayesha Malik",
        role: "Founder & CEO, Glow Beauty",
      },
      tags: ["Luxury Packaging", "Cosmetics", "Rigid Boxes", "Foil Stamping", "Brand Identity"],
      relatedProjects: [
        { slug: "school-prospectus-design", title: "School Prospectus Design" },
        { slug: "ecommerce-shipping-boxes", title: "Ecommerce Shipping Boxes" },
        { slug: "restaurant-brand-identity", title: "Restaurant Brand Identity" },
      ],
    },
    {
      id: 2,
      slug: "restaurant-brand-identity",
      title: "Restaurant Brand Identity",
      client: "Spice Route Bistro",
      industry: "Food & Beverage",
      category: "Branding",
      date: "October 2024",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop",
      heroImage: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&h=600&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1598901405737-eb5ed732f33d?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1607083206968-13611e3d76db?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop",
      ],
      excerpt: "Complete brand identity from logo to menu cards, creating a cohesive dining experience",
      challenge: "Spice Route Bistro was opening their first location in Karachi and needed a complete brand identity from scratch. They wanted to convey their fusion of traditional Pakistani and modern international cuisine while appealing to both local food lovers and expatriates.",
      solution: "We developed a comprehensive brand identity including logo design, color palette, and typography. This was applied across all touchpoints: menu cards, takeout packaging, table tents, signage, and staff uniforms. The design used warm spice-inspired colors with contemporary typography and illustrations of spice routes on maps.",
      results: [
        "Restaurant fully booked for first 3 months after opening",
        "Featured in Dawn, Express Tribune, and The News food sections",
        "Menu cards posted on social media by 70% of diners",
        "Takeout packaging reused by customers as gift boxes",
        "Brand identity extended to 2 additional locations within first year",
      ],
      services: ["Brand Identity Design", "Menu Design", "Packaging Design", "Large Format Printing"],
      products: ["Menu Cards", "Takeout Boxes", "Shopping Bags", "Table Tents", "Signage"],
      testimonial: {
        text: "The brand identity Fast Printing created has become synonymous with our restaurant. People recognize our takeout bags from blocks away. The cohesive design across all materials makes us look like an established chain, even though we just opened.",
        author: "Chef Hassan Ali",
        role: "Owner, Spice Route Bistro",
      },
      tags: ["Branding", "Restaurant", "Menu Design", "Food Packaging", "Identity System"],
      relatedProjects: [
        { slug: "school-prospectus-design", title: "School Prospectus Design" },
        { slug: "ecommerce-shipping-boxes", title: "Ecommerce Shipping Boxes" },
        { slug: "tech-startup-branding", title: "Tech Startup Branding" },
      ],
    },
    {
      id: 3,
      slug: "ecommerce-shipping-boxes",
      title: "E-commerce Shipping Boxes",
      client: "StyleBox Fashion",
      industry: "Fashion & Apparel",
      category: "Packaging",
      date: "September 2024",
      image: "https://images.unsplash.com/photo-1607083206968-13611e3d76db?w=600&h=400&fit=crop",
      heroImage: "https://images.unsplash.com/photo-1607083206968-13611e3d76db?w=1200&h=600&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1607083206968-13611e3d76db?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=800&h=600&fit=crop",
      ],
      excerpt: "Creating an unboxing experience that drives customer loyalty and social sharing",
      challenge: "StyleBox, an online fashion retailer, was struggling with generic brown shipping boxes that didn't reflect their premium brand. They were losing opportunities for brand reinforcement and customer engagement during the crucial unboxing moment.",
      solution: "We designed custom mailer boxes with full-color printing inside and out. The exterior featured their minimalist logo and brand colors, while the interior included an inspiring message and care instructions. We also created custom tissue paper, thank you cards, and branded stickers to complete the unboxing experience.",
      results: [
        "Customer unboxing videos generated 2.5M+ social media impressions",
        "45% increase in repeat purchases within 3 months",
        "Customer acquisition cost reduced by 30% due to word-of-mouth",
        "95% of customers rated packaging as 'excellent' in surveys",
        "Featured in 3 fashion blogs as 'best unboxing experience'",
      ],
      services: ["Custom Box Design", "Digital Printing", "Offset Printing", "Structural Design"],
      products: ["Mailer Boxes", "Tissue Paper", "Stickers", "Thank You Cards"],
      testimonial: {
        text: "Our packaging has become a powerful marketing tool. Customers share their unboxing experiences without us even asking. The investment in custom packaging has paid for itself many times over through increased customer loyalty and free social media exposure.",
        author: "Sara Ahmed",
        role: "Founder, StyleBox Fashion",
      },
      tags: ["E-commerce", "Unboxing", "Custom Boxes", "Fashion", "Social Media"],
      relatedProjects: [
        { slug: "school-prospectus-design", title: "School Prospectus Design" },
        { slug: "tech-startup-branding", title: "Tech Startup Branding" },
        { slug: "restaurant-brand-identity", title: "Restaurant Brand Identity" },
      ],
    },
    {
      id: 4,
      slug: "tech-startup-branding",
      title: "Tech Startup Brand Identity",
      client: "CloudSync Solutions",
      industry: "Technology",
      category: "Branding",
      date: "August 2024",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop",
      heroImage: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&h=600&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&h=600&fit=crop",
      ],
      excerpt: "Modern brand identity for innovative tech company entering the Pakistani market",
      challenge: "CloudSync, a cloud storage startup, needed to establish credibility in Pakistan's competitive tech market. They required professional branding materials to pitch to investors and enterprise clients, but had a limited budget as a startup.",
      solution: "We created a modern, tech-forward brand identity with a focus on cost-effective digital printing. The system included business cards with spot UV, letterheads, presentation folders, and pitch deck printing. We used premium finishes strategically to maximize impact while staying within budget.",
      results: [
        "Successfully raised $500K seed funding from investors",
        "Closed 5 enterprise clients in first quarter",
        "Brand identity scaled to 15-person team within 6 months",
        "Featured in TechJuice and ProPakistani startup spotlights",
        "Materials used as case study in startup accelerator program",
      ],
      services: ["Brand Identity Design", "Business Card Printing", "Digital Printing", "Presentation Materials"],
      products: ["Business Cards", "Letterheads", "Presentation Folders", "Brochures"],
      testimonial: {
        text: "As a startup, we needed to look established and professional without breaking the bank. Fast Printing helped us create materials that competed with companies 10x our size. The quality of our pitch materials definitely helped us secure funding.",
        author: "Ahmed Khan",
        role: "Co-Founder & CEO, CloudSync Solutions",
      },
      tags: ["Startup", "Technology", "Branding", "Business Cards", "Investor Materials"],
      relatedProjects: [
        { slug: "school-prospectus-design", title: "School Prospectus Design" },
        { slug: "ecommerce-shipping-boxes", title: "Ecommerce Shipping Boxes" },
        { slug: "restaurant-brand-identity", title: "Restaurant Brand Identity" },
      ],
      
    },
    {
      id: 5,
      slug: "school-prospectus-design",
      title: "School Prospectus & Marketing Materials",
      client: "Bright Minds Academy",
      industry: "Education",
      category: "Marketing Materials",
      date: "July 2024",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop",
      heroImage: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&h=600&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1598901405737-eb5ed732f33d?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=600&fit=crop",
      ],
      excerpt: "Engaging prospectus design that increased admissions by 40%",
      challenge: "Bright Minds Academy, a progressive school in Lahore, was struggling to attract new students despite excellent academic results. Their old prospectus was text-heavy and failed to showcase the vibrant learning environment and modern facilities.",
      solution: "We redesigned their prospectus with engaging layouts, student photography, infographics showing academic achievements, and clear information architecture. The design used the school's colors but introduced modern typography and plenty of white space. We also created matching admission forms, certificates, and outdoor banners.",
      results: [
        "40% increase in admission applications year-over-year",
        "Prospectus shared by parents on social media groups",
        "Student enrollment reached full capacity for first time",
        "Design system extended to all school communications",
        "Reduced prospectus printing costs by 20% through efficient design",
      ],
      services: ["Brochure Design", "Offset Printing", "Large Format Printing", "Graphic Design"],
      products: ["Prospectus Brochures", "Admission Forms", "Certificates", "Banners"],
      testimonial: {
        text: "The new prospectus completely transformed how parents perceive our school. We've had parents tell us they chose us specifically because our materials looked so professional and showed what makes us special. It's been a game-changer for admissions.",
        author: "Dr. Farah Malik",
        role: "Principal, Bright Minds Academy",
      },
      tags: ["Education", "Brochure Design", "School Marketing", "Prospectus", "Admissions"],
      relatedProjects: [
        { slug: "tech-startup-branding", title: "Tech Startup Branding" },
        { slug: "ecommerce-shipping-boxes", title: "Ecommerce Shipping Boxes" },
        { slug: "restaurant-brand-identity", title: "Restaurant Brand Identity" },
      ],
    },
  ];
  
  // Helper functions
  export function getAllPortfolio(): PortfolioItem[] {
    return portfolio;
  }
  
  export function getPortfolioBySlug(slug: string): PortfolioItem | undefined {
    return portfolio.find(item => item.slug === slug);
  }
  
  export function getPortfolioById(id: number): PortfolioItem | undefined {
    return portfolio.find(item => item.id === id);
  }
  
  export function getPortfolioByCategory(category: string): PortfolioItem[] {
    return portfolio.filter(item => item.category === category);
  }
  
  export function getPortfolioByIndustry(industry: string): PortfolioItem[] {
    return portfolio.filter(item => item.industry === industry);
  }
  
  // Portfolio categories for filtering
  export const portfolioCategories = ["All", "Packaging", "Branding", "Marketing Materials", "Large Format"];
  
  // Simplified portfolio items for display on landing page
  export const portfolioItems = portfolio.map(item => ({
    slug: item.slug,
    title: item.title,
    client: item.client,
    category: item.category,
    excerpt: item.excerpt,
    image: item.image,
    tags: item.tags,
  }));
