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
      image: "/images/products/custom-boxes/cosmetic-packaging.jpg",
      heroImage: "/images/products/custom-boxes/cosmetic-packaging.jpg",
      images: [
        "/images/products/custom-boxes/cosmetic-packaging.jpg",
        "/images/products/custom-boxes/shipping-boxes.jpg",
        "/images/products/custom-boxes/customerbox-YJmxzGUymzc-unsplash.jpg",
        "/images/products/shopping-bags/shopping-bag-pattern.jpeg",
        "/images/products/stickers/retail-label.jpeg",
        "/images/products/food-packaging2.jpeg",
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
      image: "/images/products/brochures/restaurant-branding.jpg",
      heroImage: "/images/products/brochures/restaurant-branding.jpg",
      images: [
        "/images/products/brochures/restaurant-branding.jpg",
        "/images/products/flyers/restaurant-flyer.jpeg",
        "/images/products/food-packaging/burger-box-branded.jpeg",
        "/images/products/food-packaging/burger-fries-packaging.jpeg",
        "/images/products/food-packaging/pizza-box-packaging.jpeg",
        "/images/products/brocheer3.jpeg",
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
      image: "/images/products/custom-boxes/shipping-boxes.jpg",
      heroImage: "/images/products/custom-boxes/shipping-boxes.jpg",
      images: [
        "/images/products/custom-boxes/shipping-boxes.jpg",
        "/images/products/custom-boxes/cosmetic-packaging.jpg",
        "/images/products/custom-boxes/customerbox-YJmxzGUymzc-unsplash.jpg",
        "/images/products/shopping-bags/shopping-bag-pattern.jpeg",
        "/images/products/stickers/retail-label.jpeg",
        "/images/products/business-cards.jpeg",
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
      image: "/images/products/brochures/tech-startup-branding.jpg",
      heroImage: "/images/products/brochures/tech-startup-branding.jpg",
      images: [
        "/images/products/brochures/tech-startup-branding.jpg",
        "/images/products/business-cards/buenos-mockups-8cqdHOME9zY-unsplash.jpg",
        "/images/products/business-cards/select-photos-NPgq_TPo710-unsplash.jpg",
        "/images/products/folders/student-files.jpeg",
        "/images/products/letterheads/annie-spratt-t6ulw0R0dt8-unsplash.jpg",
        "/Branding.jpg",
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
      image: "/images/products/certificates/certificate-school.jpeg",
      heroImage: "/images/products/certificates/certificate-school.jpeg",
      images: [
        "/images/products/certificates/certificate-school.jpeg",
        "/images/products/folders/student-files.jpeg",
        "/images/products/brocheer3.jpeg",
        "/images/products/brocher1.jpeg",
        "/images/products/brocher2.jpeg",
        "/images/products/notepads/sigmund-p_qkdlpLBGk-unsplash.jpg",
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
    {
      id: 6,
      slug: "food-product-labels",
      title: "Food Product Labels",
      client: "Fresh Harvest Foods",
      industry: "Food & Beverage",
      category: "Design",
      date: "June 2024",
      image: "/images/products/stickers/food-label.jpeg",
      heroImage: "/images/products/stickers/food-label.jpeg",
      images: [
        "/images/products/stickers/food-label.jpeg",
        "/images/products/stickers/retail-label.jpeg",
        "/images/products/food-packaging/burger-box-branded.jpeg",
        "/images/products/food-packaging2.jpeg",
        "/images/products/custom-boxes/cosmetic-packaging.jpg",
        "/images/products/shopping-bags/shopping-bag-pattern.jpeg",
      ],
      excerpt: "Eye-catching product labels that increased shelf visibility and sales",
      challenge: "Fresh Harvest Foods, an organic food producer, needed product labels that would stand out in crowded supermarket aisles while communicating their commitment to natural, healthy ingredients. Their existing labels looked outdated and failed to attract health-conscious consumers.",
      solution: "We designed a fresh, modern label system using vibrant natural colors, clear typography, and engaging product photography. Each label prominently featured certifications, ingredients, and nutritional information in an easy-to-read format. We used high-quality waterproof materials suitable for refrigerated products.",
      results: [
        "52% increase in product sales within first 3 months",
        "Expanded to 15 new retail locations due to improved shelf appeal",
        "Customer surveys showed 78% recognized brand by label design",
        "Reduced customer questions about ingredients and certifications",
        "Won Packaging Design Award at Pakistan Food Expo",
      ],
      services: ["Label Design", "Digital Label Printing", "Die-Cutting", "Material Selection"],
      products: ["Product Labels", "Stickers", "Promotional Materials"],
      testimonial: {
        text: "Our new labels completely transformed how customers perceive our products. We've seen a dramatic increase in first-time buyers who told us they chose our products because the labels looked trustworthy and appealing. The investment paid for itself within weeks.",
        author: "Imran Siddiqui",
        role: "CEO, Fresh Harvest Foods",
      },
      tags: ["Food Labels", "Packaging Design", "Product Labels", "Organic", "Retail"],
      relatedProjects: [
        { slug: "luxury-cosmetic-packaging", title: "Luxury Cosmetic Packaging" },
        { slug: "restaurant-brand-identity", title: "Restaurant Brand Identity" },
        { slug: "ecommerce-shipping-boxes", title: "E-commerce Shipping Boxes" },
      ],
    },
    {
      id: 7,
      slug: "corporate-branding-package",
      title: "Corporate Branding Package",
      client: "Meridian Consulting",
      industry: "Professional Services",
      category: "Branding",
      date: "May 2024",
      image: "/Branding.jpg",
      heroImage: "/Branding.jpg",
      images: [
        "/Branding.jpg",
        "/images/products/business-cards/buenos-mockups-8cqdHOME9zY-unsplash.jpg",
        "/images/products/business-cards/select-photos-NPgq_TPo710-unsplash.jpg",
        "/images/products/letterheads/annie-spratt-t6ulw0R0dt8-unsplash.jpg",
        "/images/products/folders/student-files.jpeg",
        "/images/products/notepads/sigmund-p_qkdlpLBGk-unsplash.jpg",
      ],
      excerpt: "Complete corporate branding suite for professional consulting firm",
      challenge: "Meridian Consulting, a mid-size management consulting firm, needed a cohesive brand identity across all touchpoints to compete with larger international firms. Their existing materials were inconsistent and lacked a professional edge needed for high-value client pitches.",
      solution: "We created a comprehensive corporate branding package including notebooks, water bottles, tote bags, business cards, letterheads, presentation folders, and promotional items. The design featured a sophisticated navy and cream color palette with the distinctive 'M' monogram applied consistently across all materials using various printing techniques including embossing, foil stamping, and screen printing.",
      results: [
        "95% client feedback improvement on professional appearance",
        "Successfully won 3 major corporate contracts valued at $2M+",
        "Employee satisfaction increased with premium branded materials",
        "Brand recognition increased 150% in industry events",
        "Materials featured in Business Recorder corporate spotlight",
      ],
      services: ["Brand Identity Design", "Product Customization", "Screen Printing", "Embossing & Foil Stamping"],
      products: ["Notebooks", "Water Bottles", "Tote Bags", "Business Cards", "Promotional Items"],
      testimonial: {
        text: "The complete branding package Fast Printing delivered elevated our entire company image. Clients comment on the quality and consistency of our materials. It's given us confidence that we can compete with any firm, regardless of size.",
        author: "Kamran Qureshi",
        role: "Managing Partner, Meridian Consulting",
      },
      tags: ["Corporate Branding", "Promotional Products", "Business Stationery", "Brand Identity", "Professional Services"],
      relatedProjects: [
        { slug: "tech-startup-branding", title: "Tech Startup Brand Identity" },
        { slug: "restaurant-brand-identity", title: "Restaurant Brand Identity" },
        { slug: "school-prospectus-design", title: "School Prospectus & Marketing Materials" },
      ],
    },
    {
      id: 8,
      slug: "retail-display-packaging",
      title: "Retail Display Packaging",
      client: "GiftCraft Pakistan",
      industry: "Retail",
      category: "Packaging",
      date: "April 2024",
      image: "/images/products/stickers/retail-label.jpeg",
      heroImage: "/images/products/stickers/retail-label.jpeg",
      images: [
        "/images/products/stickers/retail-label.jpeg",
        "/images/products/custom-boxes/cosmetic-packaging.jpg",
        "/images/products/custom-boxes/shipping-boxes.jpg",
        "/images/products/shopping-bags/shopping-bag-pattern.jpeg",
        "/images/products/stickers/food-label.jpeg",
        "/images/products/food-packaging.jpeg",
      ],
      excerpt: "Custom retail packaging that maximized shelf impact and sales conversion",
      challenge: "GiftCraft, a retailer of handmade crafts and gifts, needed display packaging that would protect products while showcasing them attractively in retail environments. Their plain boxes were being damaged during shipping and didn't help products stand out on crowded shelves.",
      solution: "We designed custom retail display packaging with clear windows, sturdy construction, and vibrant printing. The packaging featured hang tabs for versatile display options, protective inserts, and clear product information. We used sustainable materials to align with their eco-friendly brand values while ensuring durability during transport and handling.",
      results: [
        "68% increase in impulse purchases at retail locations",
        "Reduced product damage during shipping by 85%",
        "Expanded into 25 new retail partners due to improved presentation",
        "Customer returns decreased by 40% due to better product protection",
        "Featured as supplier case study in Retail Pakistan magazine",
      ],
      services: ["Structural Design", "Display Packaging", "Digital Printing", "Die-Cutting"],
      products: ["Display Boxes", "Product Inserts", "Hang Tags", "Retail Labels"],
      testimonial: {
        text: "The new retail packaging solved two problems at once - protecting our delicate handmade items and making them irresistible on store shelves. Our retail partners love the professional look, and we've seen sales jump significantly.",
        author: "Zainab Farooqi",
        role: "Founder, GiftCraft Pakistan",
      },
      tags: ["Retail Packaging", "Display Boxes", "Point of Sale", "Product Packaging", "Sustainable"],
      relatedProjects: [
        { slug: "luxury-cosmetic-packaging", title: "Luxury Cosmetic Packaging" },
        { slug: "ecommerce-shipping-boxes", title: "E-commerce Shipping Boxes" },
        { slug: "food-product-labels", title: "Food Product Labels" },
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
