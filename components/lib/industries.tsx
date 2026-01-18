import { GraduationCap, Stethoscope, Utensils, ShoppingBag, Briefcase, Calendar, Cpu, Shirt } from "lucide-react";


export interface Industry {
    id: number;
    slug: string;
    name: string;
    tagline: string;
    description: string;
    heroImage: string;
    challenges: {
      title: string;
      description: string;
    }[];
    solutions: {
      title: string;
      description: string;
    }[];
    products: {
      name: string;
      description: string;
      image: string;
    }[];
    caseStudies: {
      client: string;
      project: string;
      result: string;
    }[];
    testimonials: {
      name: string;
      role: string;
      text: string;
    }[];
    stats: {
      clientsServed: string;
      projectsCompleted: string;
      satisfactionRate: string;
    };
  }

export const industries: Industry[] = [
    {
      id: 1,
      slug: "schools-education",
      name: "Schools & Education",
      tagline: "Empowering education through quality printing",
      description: "Specialized printing and packaging solutions for schools, colleges, universities, and educational institutions. From custom notebooks to certificates, we support the education sector with quality materials.",
      heroImage: "/images/products/certificates/certificate-school.jpeg",
      challenges: [
        {
          title: "Budget Constraints",
          description: "Educational institutions often operate on tight budgets while requiring high-quality materials",
        },
        {
          title: "Volume Requirements",
          description: "Schools need large quantities of materials regularly, from admission forms to certificates",
        },
        {
          title: "Brand Consistency",
          description: "Maintaining consistent branding across all printed materials and multiple campuses",
        },
      ],
      solutions: [
        {
          title: "Educational Pricing",
          description: "Special volume discounts and educational pricing to fit school budgets without compromising quality",
        },
        {
          title: "Bulk Planning",
          description: "Annual contracts and bulk ordering systems that ensure timely delivery of all materials",
        },
        {
          title: "Brand Templates",
          description: "Custom templates that maintain brand consistency while allowing for easy updates and variations",
        },
      ],
      products: [
        {
          name: "Custom Notebooks",
          description: "Branded exercise books and notebooks for students",
          image: "/images/products/notepads/sigmund-p_qkdlpLBGk-unsplash.jpg",
        },
        {
          name: "ID Cards",
          description: "Student and staff identification cards with security features",
          image: "/images/products/business-cards/buenos-mockups-8cqdHOME9zY-unsplash.jpg",
        },
        {
          name: "Certificates",
          description: "Professional achievement and completion certificates",
          image: "/images/products/certificates/certificate-school.jpeg",
        },
        {
          name: "Prospectuses",
          description: "High-quality brochures showcasing your institution",
          image: "/images/products/brochures/tech-startup-branding.jpg",
        },
      ],
      caseStudies: [
        {
          client: "Karachi Grammar School",
          project: "Complete stationery solution for 15 campuses across Pakistan",
          result: "30% cost reduction while improving quality and delivery times",
        },
        {
          client: "Beaconhouse School System",
          project: "Custom branded notebooks and ID cards for 50,000+ students",
          result: "Enhanced brand recognition and 99% on-time delivery rate",
        },
      ],
      testimonials: [
        {
          name: "Dr. Ahmed Hassan",
          role: "Principal, City School",
          text: "Fast Printing has been our trusted partner for over 5 years. Their understanding of educational needs and consistent quality make them invaluable to our institution.",
        },
      ],
      stats: {
        clientsServed: "150+",
        projectsCompleted: "500+",
        satisfactionRate: "99%",
      },
    },
    {
      id: 2,
      slug: "healthcare-medical",
      name: "Healthcare & Medical",
      tagline: "Compliant, professional healthcare printing",
      description: "Medical-grade printing and packaging solutions that meet healthcare industry standards. From prescription pads to medical packaging, we understand the critical nature of healthcare materials.",
      heroImage: "/images/products/stickers/retail-label.jpeg",
      challenges: [
        {
          title: "Regulatory Compliance",
          description: "Healthcare materials must meet strict regulatory standards and safety requirements",
        },
        {
          title: "Sterile Packaging",
          description: "Medical products often require specialized sterile packaging solutions",
        },
        {
          title: "Patient Confidentiality",
          description: "Forms and documents must maintain patient privacy and security",
        },
      ],
      solutions: [
        {
          title: "Compliant Materials",
          description: "FDA-approved and medical-grade materials that meet all healthcare regulations",
        },
        {
          title: "Sterile Solutions",
          description: "Clean-room packaging and sterilization-compatible materials for medical products",
        },
        {
          title: "Secure Printing",
          description: "Confidential handling and secure printing processes for sensitive documents",
        },
      ],
      products: [
        {
          name: "Medical Brochures",
          description: "Patient information and healthcare brochures",
          image: "/images/products/brochures/tech-startup-branding.jpg",
        },
        {
          name: "Prescription Pads",
          description: "Secure prescription pads with anti-fraud features",
          image: "/images/products/letterheads/annie-spratt-t6ulw0R0dt8-unsplash.jpg",
        },
        {
          name: "Medical Packaging",
          description: "Sterile packaging for medical devices and supplies",
          image: "/images/products/custom-boxes/cosmetic-packaging.jpg",
        },
        {
          name: "Labels",
          description: "Medical-grade labels for prescriptions and samples",
          image: "/images/products/stickers/food-label.jpeg",
        },
      ],
      caseStudies: [
        {
          client: "Aga Khan University Hospital",
          project: "Medical packaging and prescription pad printing",
          result: "100% compliance with regulatory standards and improved efficiency",
        },
      ],
      testimonials: [
        {
          name: "Dr. Sara Malik",
          role: "Chief Administrator, City Hospital",
          text: "The attention to detail and regulatory compliance that Fast Printing brings is exactly what we need in the healthcare sector.",
        },
      ],
      stats: {
        clientsServed: "80+",
        projectsCompleted: "350+",
        satisfactionRate: "98%",
      },
    },
    {
      id: 3,
      slug: "restaurants-food",
      name: "Restaurants & Food Service",
      tagline: "Appetizing menus and food-safe packaging",
      description: "Food-safe materials and mouth-watering designs for restaurants, cafes, and food service businesses. Make your food look as good on paper as it tastes.",
      heroImage: "/images/products/brochures/restaurant-branding.jpg",
      challenges: [
        {
          title: "Food Safety Compliance",
          description: "All materials must meet food-contact safety standards and regulations",
        },
        {
          title: "Durability Requirements",
          description: "Packaging must withstand moisture, grease, and temperature variations",
        },
        {
          title: "Quick Turnaround",
          description: "Restaurants often need materials quickly for promotions and menu updates",
        },
      ],
      solutions: [
        {
          title: "Food-Grade Materials",
          description: "All materials certified for food contact with appropriate coatings and barriers",
        },
        {
          title: "Durable Construction",
          description: "Moisture and grease-resistant materials that maintain integrity during use",
        },
        {
          title: "Express Service",
          description: "Priority production and rush delivery options for urgent restaurant needs",
        },
      ],
      products: [
        {
          name: "Menu Cards",
          description: "Durable, attractive menus that showcase your offerings",
          image: "/images/products/brochures/restaurant-branding.jpg",
        },
        {
          name: "Food Packaging",
          description: "Takeout boxes, bags, and containers with custom branding",
          image: "/images/products/food-packaging/burger-box-branded.jpeg",
        },
        {
          name: "Labels & Stickers",
          description: "Food-safe labels for packaging and ingredients",
          image: "/images/products/stickers/food-label.jpeg",
        },
        {
          name: "Table Tents",
          description: "Promotional displays for tables and counters",
          image: "/images/products/flyers/restaurant-flyer.jpeg",
        },
      ],
      caseStudies: [
        {
          client: "Cafe Soul",
          project: "Complete rebrand including menus, packaging, and promotional materials",
          result: "25% increase in takeout orders and improved brand recognition",
        },
        {
          client: "Burger Lab",
          project: "Custom branded takeout packaging for nationwide chain",
          result: "Social media engagement increased 40% from unboxing posts",
        },
      ],
      testimonials: [
        {
          name: "Ali Raza",
          role: "Owner, Spice Route Restaurant",
          text: "Our new menus and packaging from Fast Printing have elevated our brand. Customers love the presentation!",
        },
      ],
      stats: {
        clientsServed: "200+",
        projectsCompleted: "800+",
        satisfactionRate: "97%",
      },
    },
    {
      id: 4,
      slug: "retail-ecommerce",
      name: "Retail & E-commerce",
      tagline: "Packaging that sells and protects",
      description: "Eye-catching retail packaging and shipping solutions that enhance brand value and create unforgettable unboxing experiences for online shoppers.",
      heroImage: "/images/products/custom-boxes/shipping-boxes.jpg",
      challenges: [
        {
          title: "Unboxing Experience",
          description: "Creating memorable moments that customers want to share on social media",
        },
        {
          title: "Product Protection",
          description: "Ensuring products arrive safely while minimizing packaging waste",
        },
        {
          title: "Brand Differentiation",
          description: "Standing out in crowded retail spaces and online marketplaces",
        },
      ],
      solutions: [
        {
          title: "Experience Design",
          description: "Custom packaging designed to create Instagram-worthy unboxing moments",
        },
        {
          title: "Protective Engineering",
          description: "Optimized packaging that protects products while reducing material waste",
        },
        {
          title: "Premium Presentation",
          description: "High-quality printing and finishes that make your brand shine",
        },
      ],
      products: [
        {
          name: "Shipping Boxes",
          description: "Custom e-commerce boxes with your branding",
          image: "/images/products/custom-boxes/shipping-boxes.jpg",
        },
        {
          name: "Shopping Bags",
          description: "Branded retail bags for in-store purchases",
          image: "/images/products/shopping-bags/shopping-bag-pattern.jpeg",
        },
        {
          name: "Product Labels",
          description: "High-quality labels for product information and branding",
          image: "/images/products/stickers/retail-label.jpeg",
        },
        {
          name: "Hang Tags",
          description: "Custom hang tags for clothing and accessories",
          image: "/images/products/business-cards/buenos-mockups-8cqdHOME9zY-unsplash.jpg",
        },
      ],
      caseStudies: [
        {
          client: "StyleBox Fashion",
          project: "Custom shipping boxes and tissue paper for online fashion store",
          result: "Instagram mentions increased 300%, customer retention up 45%",
        },
      ],
      testimonials: [
        {
          name: "Fatima Khan",
          role: "Founder, Artisan Market",
          text: "Our custom packaging has become a signature part of our brand. Customers often mention the beautiful presentation!",
        },
      ],
      stats: {
        clientsServed: "300+",
        projectsCompleted: "1200+",
        satisfactionRate: "98%",
      },
    },
    {
      id: 5,
      slug: "corporate-business",
      name: "Corporate & Business",
      tagline: "Professional printing for professional businesses",
      description: "Comprehensive corporate stationery, marketing materials, and branded items that enhance your business's professional image. From business cards to annual reports, we deliver quality that reflects your brand excellence.",
      heroImage: "/Branding.jpg",
      challenges: [
        {
          title: "Brand Consistency",
          description: "Maintaining consistent branding across all departments and materials",
        },
        {
          title: "Professional Image",
          description: "Materials must reflect corporate professionalism and quality standards",
        },
        {
          title: "Volume & Variety",
          description: "Managing diverse printing needs from multiple departments efficiently",
        },
      ],
      solutions: [
        {
          title: "Brand Management",
          description: "Centralized brand templates and guidelines ensuring consistency across all materials",
        },
        {
          title: "Premium Quality",
          description: "High-quality materials and finishes that project professional excellence",
        },
        {
          title: "Account Management",
          description: "Dedicated account managers to streamline ordering and maintain quality standards",
        },
      ],
      products: [
        {
          name: "Business Cards",
          description: "Premium business cards that make lasting impressions",
          image: "/images/products/business-cards/select-photos-NPgq_TPo710-unsplash.jpg",
        },
        {
          name: "Letterheads",
          description: "Professional letterheads for official correspondence",
          image: "/images/products/letterheads/annie-spratt-t6ulw0R0dt8-unsplash.jpg",
        },
        {
          name: "Presentation Folders",
          description: "High-quality folders for proposals and presentations",
          image: "/images/products/folders/student-files.jpeg",
        },
        {
          name: "Corporate Reports",
          description: "Annual reports and corporate documentation",
          image: "/images/products/brochures/tech-startup-branding.jpg",
        },
      ],
      caseStudies: [
        {
          client: "Engro Corporation",
          project: "Complete corporate stationery overhaul for 20+ offices nationwide",
          result: "40% cost savings through centralized ordering and improved brand consistency",
        },
        {
          client: "Lucky Cement",
          project: "Annual report design and printing for shareholders",
          result: "Received industry recognition for report design and presentation quality",
        },
      ],
      testimonials: [
        {
          name: "Adnan Siddiqui",
          role: "Corporate Communications Manager, Systems Ltd",
          text: "Fast Printing understands corporate requirements. Their attention to detail and consistent quality have made them our preferred partner for 8 years.",
        },
      ],
      stats: {
        clientsServed: "250+",
        projectsCompleted: "1500+",
        satisfactionRate: "99%",
      },
    },
    {
      id: 6,
      slug: "events-hospitality",
      name: "Events & Hospitality",
      tagline: "Making every event memorable",
      description: "Specialized printing solutions for events, weddings, conferences, and hospitality venues. From elegant invitations to large-format event signage, we help create memorable experiences.",
      heroImage: "/images/products/wedding-cards/wedding-card-nikah-purple.jpeg",
      challenges: [
        {
          title: "Tight Deadlines",
          description: "Events have fixed dates requiring guaranteed on-time delivery",
        },
        {
          title: "Premium Aesthetics",
          description: "Materials must match the elegance and theme of the event",
        },
        {
          title: "Large Scale Coordination",
          description: "Managing multiple print items and deliveries for large events",
        },
      ],
      solutions: [
        {
          title: "Rush Services",
          description: "Priority production and express delivery options for urgent event needs",
        },
        {
          title: "Luxury Finishes",
          description: "Premium papers, foiling, embossing, and other special finishes for elegant presentation",
        },
        {
          title: "Event Coordination",
          description: "Dedicated project managers to coordinate all printing needs for seamless execution",
        },
      ],
      products: [
        {
          name: "Wedding Invitations",
          description: "Elegant custom invitations for your special day",
          image: "/images/products/wedding-cards/wedding-card-nikah-maroon.jpeg",
        },
        {
          name: "Event Banners",
          description: "Large format banners and backdrops for events",
          image: "/images/products/roll-up-banners/roll-up-banner-agricultural.jpeg",
        },
        {
          name: "Name Badges",
          description: "Professional badges and lanyards for conferences",
          image: "/images/products/business-cards/buenos-mockups-8cqdHOME9zY-unsplash.jpg",
        },
        {
          name: "Event Programs",
          description: "Booklets and programs for conferences and weddings",
          image: "/images/products/brochures/restaurant-branding.jpg",
        },
      ],
      caseStudies: [
        {
          client: "Pearl Continental Hotels",
          project: "Complete event materials for 50+ conferences annually",
          result: "99.8% on-time delivery rate and 95% client satisfaction across all events",
        },
        {
          client: "Roots School System",
          project: "Annual convocation materials for 15,000 graduates across multiple campuses",
          result: "Flawless execution of complex multi-city delivery schedule",
        },
      ],
      testimonials: [
        {
          name: "Zara Ahmed",
          role: "Event Manager, Occasions by Zara",
          text: "In the events business, timing is everything. Fast Printing has never let us down, even with impossible deadlines. Their quality is unmatched.",
        },
      ],
      stats: {
        clientsServed: "180+",
        projectsCompleted: "750+",
        satisfactionRate: "98%",
      },
    },
    {
      id: 7,
      slug: "technology-startups",
      name: "Technology & Startups",
      tagline: "Modern printing for innovative companies",
      description: "Fast, flexible printing solutions that keep pace with tech companies and startups. From pitch decks to product packaging, we help innovative companies make their mark.",
      heroImage: "/images/products/brochures/tech-startup-branding.jpg",
      challenges: [
        {
          title: "Rapid Changes",
          description: "Startups need flexibility to update materials as they iterate and pivot",
        },
        {
          title: "Budget Constraints",
          description: "Young companies need quality materials while managing limited budgets",
        },
        {
          title: "Speed to Market",
          description: "Quick turnaround times to support fast-paced product launches",
        },
      ],
      solutions: [
        {
          title: "Small Batch Printing",
          description: "Digital printing for small quantities without sacrificing quality or breaking the bank",
        },
        {
          title: "Startup Packages",
          description: "Bundled solutions and special pricing designed for startup needs and budgets",
        },
        {
          title: "Express Production",
          description: "Same-day and next-day services to support your aggressive timelines",
        },
      ],
      products: [
        {
          name: "Pitch Decks",
          description: "Professional presentation materials for investors",
          image: "/images/products/brochures/tech-startup-branding.jpg",
        },
        {
          name: "Product Packaging",
          description: "Custom packaging for tech products and gadgets",
          image: "/images/products/custom-boxes/cosmetic-packaging.jpg",
        },
        {
          name: "Marketing Materials",
          description: "Flyers, brochures, and promotional items",
          image: "/images/products/flyers/restaurant-flyer.jpeg",
        },
        {
          name: "Tech Swag",
          description: "Branded stickers, t-shirts, and promotional items",
          image: "/images/products/stickers/retail-label.jpeg",
        },
      ],
      caseStudies: [
        {
          client: "Airlift Technologies",
          project: "Rapid production of marketing materials for aggressive expansion",
          result: "Supported launch in 8 cities with 72-hour turnaround on all materials",
        },
        {
          client: "Bykea",
          project: "Custom helmet stickers and rider materials for nationwide fleet",
          result: "Delivered 50,000+ units in 2 weeks, enabling rapid fleet expansion",
        },
      ],
      testimonials: [
        {
          name: "Omar Farooq",
          role: "Co-founder, TechHub Karachi",
          text: "Fast Printing gets the startup hustle. They move at our speed without compromising on quality. Essential partner for any growing tech company.",
        },
      ],
      stats: {
        clientsServed: "120+",
        projectsCompleted: "600+",
        satisfactionRate: "97%",
      },
    },
    {
      id: 8,
      slug: "fashion-apparel",
      name: "Fashion & Apparel",
      tagline: "Packaging as stylish as your products",
      description: "Premium packaging and labels that complement fashion brands and elevate the customer experience. From luxury boxes to hang tags, we help your products make a stylish statement.",
      heroImage: "/images/products/shopping-bags/shopping-bag-pattern.jpeg",
      challenges: [
        {
          title: "Brand Aesthetics",
          description: "Packaging must align with fashion brand's visual identity and premium positioning",
        },
        {
          title: "Seasonal Collections",
          description: "Regular updates needed for new collections and seasonal campaigns",
        },
        {
          title: "Premium Presentation",
          description: "High-end finishes and materials expected by fashion-conscious customers",
        },
      ],
      solutions: [
        {
          title: "Design Collaboration",
          description: "Work closely with your design team to create packaging that complements your collections",
        },
        {
          title: "Flexible Production",
          description: "Quick turnaround for seasonal changes while maintaining premium quality",
        },
        {
          title: "Luxury Finishes",
          description: "Specialty papers, foiling, embossing, and other premium finishes fashion brands expect",
        },
      ],
      products: [
        {
          name: "Garment Tags",
          description: "Custom hang tags and care labels",
          image: "/images/products/business-cards/select-photos-NPgq_TPo710-unsplash.jpg",
        },
        {
          name: "Luxury Boxes",
          description: "Premium rigid boxes for high-end products",
          image: "/images/products/custom-boxes/cosmetic-packaging.jpg",
        },
        {
          name: "Shopping Bags",
          description: "Designer shopping bags with luxury finishes",
          image: "/images/products/shopping-bags/shopping-bag-pattern.jpeg",
        },
        {
          name: "Lookbooks",
          description: "Fashion catalogs and collection lookbooks",
          image: "/images/products/brochures/restaurant-branding.jpg",
        },
      ],
      caseStudies: [
        {
          client: "Khaadi",
          project: "Custom packaging redesign for luxury lawn collection",
          result: "Packaging became a social media sensation with 500+ customer posts",
        },
        {
          client: "Generation",
          project: "Hang tags and packaging for seasonal collections",
          result: "25% reduction in production time while upgrading to premium materials",
        },
      ],
      testimonials: [
        {
          name: "Maheen Kardar",
          role: "Creative Director, Studio by TCS",
          text: "Our packaging is an extension of our brand. Fast Printing understands fashion and delivers the quality our customers expect.",
        },
      ],
      stats: {
        clientsServed: "90+",
        projectsCompleted: "450+",
        satisfactionRate: "98%",
      },
    },
  ];

 // This data will be imported from lib/industries.ts

 export const industriesList = [
  {
    slug: "schools-education",
    name: "Schools & Education",
    icon: GraduationCap,
    tagline: "Empowering education through quality printing",
    description: "Complete printing solutions for educational institutions - from notebooks to certificates",
    image: "/images/products/certificates/certificate-school.jpeg",
    products: ["Custom Notebooks", "ID Cards", "Certificates", "Prospectuses", "Signage"],
    caseStudies: 45,
  },
  {
    slug: "healthcare-medical",
    name: "Healthcare & Medical",
    icon: Stethoscope,
    tagline: "Compliant, professional healthcare printing",
    description: "Medical-grade printing and packaging that meets healthcare standards",
    image: "/images/products/stickers/retail-label.jpeg",
    products: ["Medical Brochures", "Labels", "Patient Forms", "Prescription Pads", "Medical Packaging"],
    caseStudies: 32,
  },
  {
    slug: "restaurants-food",
    name: "Restaurants & Food",
    icon: Utensils,
    tagline: "Appetizing menus and food-safe packaging",
    description: "Food-safe materials and mouth-watering designs for the F&B industry",
    image: "/images/products/brochures/restaurant-branding.jpg",
    products: ["Menu Cards", "Food Labels", "Takeout Packaging", "Table Tents", "Delivery Bags"],
    caseStudies: 78,
  },
  {
    slug: "retail-ecommerce",
    name: "Retail & E-commerce",
    icon: ShoppingBag,
    tagline: "Packaging that sells and protects",
    description: "Eye-catching retail packaging and shipping solutions that enhance brand value",
    image: "/images/products/custom-boxes/shipping-boxes.jpg",
    products: ["Product Boxes", "Shopping Bags", "Labels", "Hang Tags", "Shipping Boxes"],
    caseStudies: 120,
  },
  {
    slug: "corporate-business",
    name: "Corporate & Business",
    icon: Briefcase,
    tagline: "Professional printing for professional businesses",
    description: "Corporate stationery, marketing materials, and branded items for businesses",
    image: "/Branding.jpg",
    products: ["Business Cards", "Letterheads", "Folders", "Corporate Gifts", "Reports"],
    caseStudies: 156,
  },
  {
    slug: "events-hospitality",
    name: "Events & Hospitality",
    icon: Calendar,
    tagline: "Making every event memorable",
    description: "Event materials, banners, and hospitality printing solutions",
    image: "/images/products/wedding-cards/wedding-card-nikah-purple.jpeg",
    products: ["Invitations", "Banners", "Badges", "Event Signage", "Programs"],
    caseStudies: 89,
  },
  {
    slug: "technology-startups",
    name: "Technology & Startups",
    icon: Cpu,
    tagline: "Modern printing for innovative companies",
    description: "Fast, flexible printing solutions that keep pace with tech companies",
    image: "/images/products/brochures/tech-startup-branding.jpg",
    products: ["Pitch Decks", "Product Packaging", "Marketing Materials", "Swag", "Documentation"],
    caseStudies: 67,
  },
  {
    slug: "fashion-apparel",
    name: "Fashion & Apparel",
    icon: Shirt,
    tagline: "Packaging as stylish as your products",
    description: "Premium packaging and labels that complement fashion brands",
    image: "/images/products/shopping-bags/shopping-bag-pattern.jpeg",
    products: ["Garment Tags", "Luxury Boxes", "Shopping Bags", "Lookbooks", "Swing Tags"],
    caseStudies: 54,
  },
];
  export function getAllIndustries(): Industry[] {
    return industries;
  }

  export function getIndustryBySlug(slug: string): Industry | undefined {
    return industries.find(industry => industry.slug === slug);
  }

  export function getIndustryById(id: number): Industry | undefined {
    return industries.find(industry => industry.id === id);
  }
