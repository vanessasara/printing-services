import { ArrowRight, GraduationCap, Stethoscope, Utensils, ShoppingBag, Briefcase, Calendar, Cpu, Shirt } from "lucide-react";


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
      heroImage: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&h=600&fit=crop",
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
          image: "https://images.unsplash.com/photo-1517842645767-c639042777db?w=400&h=300&fit=crop",
        },
        {
          name: "ID Cards",
          description: "Student and staff identification cards with security features",
          image: "https://images.unsplash.com/photo-1583852983243-8a81e54e5a48?w=400&h=300&fit=crop",
        },
        {
          name: "Certificates",
          description: "Professional achievement and completion certificates",
          image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=400&h=300&fit=crop",
        },
        {
          name: "Prospectuses",
          description: "High-quality brochures showcasing your institution",
          image: "https://images.unsplash.com/photo-1598901405737-eb5ed732f33d?w=400&h=300&fit=crop",
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
      heroImage: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=1200&h=600&fit=crop",
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
          image: "https://images.unsplash.com/photo-1598901405737-eb5ed732f33d?w=400&h=300&fit=crop",
        },
        {
          name: "Prescription Pads",
          description: "Secure prescription pads with anti-fraud features",
          image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&h=300&fit=crop",
        },
        {
          name: "Medical Packaging",
          description: "Sterile packaging for medical devices and supplies",
          image: "https://images.unsplash.com/photo-1607083206968-13611e3d76db?w=400&h=300&fit=crop",
        },
        {
          name: "Labels",
          description: "Medical-grade labels for prescriptions and samples",
          image: "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=400&h=300&fit=crop",
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
      heroImage: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&h=600&fit=crop",
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
          image: "https://images.unsplash.com/photo-1598901405737-eb5ed732f33d?w=400&h=300&fit=crop",
        },
        {
          name: "Food Packaging",
          description: "Takeout boxes, bags, and containers with custom branding",
          image: "https://images.unsplash.com/photo-1607083206968-13611e3d76db?w=400&h=300&fit=crop",
        },
        {
          name: "Labels & Stickers",
          description: "Food-safe labels for packaging and ingredients",
          image: "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=400&h=300&fit=crop",
        },
        {
          name: "Table Tents",
          description: "Promotional displays for tables and counters",
          image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=300&fit=crop",
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
      heroImage: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=600&fit=crop",
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
          image: "https://images.unsplash.com/photo-1607083206968-13611e3d76db?w=400&h=300&fit=crop",
        },
        {
          name: "Shopping Bags",
          description: "Branded retail bags for in-store purchases",
          image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=400&h=300&fit=crop",
        },
        {
          name: "Product Labels",
          description: "High-quality labels for product information and branding",
          image: "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=400&h=300&fit=crop",
        },
        {
          name: "Hang Tags",
          description: "Custom hang tags for clothing and accessories",
          image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=300&fit=crop",
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
      heroImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=600&fit=crop",
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
          image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=400&h=300&fit=crop",
        },
        {
          name: "Letterheads",
          description: "Professional letterheads for official correspondence",
          image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=300&fit=crop",
        },
        {
          name: "Presentation Folders",
          description: "High-quality folders for proposals and presentations",
          image: "https://images.unsplash.com/photo-1586281380614-94ca412df0e0?w=400&h=300&fit=crop",
        },
        {
          name: "Corporate Reports",
          description: "Annual reports and corporate documentation",
          image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=300&fit=crop",
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
      heroImage: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1200&h=600&fit=crop",
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
          image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=300&fit=crop",
        },
        {
          name: "Event Banners",
          description: "Large format banners and backdrops for events",
          image: "https://images.unsplash.com/photo-1487260211189-670c54da558d?w=400&h=300&fit=crop",
        },
        {
          name: "Name Badges",
          description: "Professional badges and lanyards for conferences",
          image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=400&h=300&fit=crop",
        },
        {
          name: "Event Programs",
          description: "Booklets and programs for conferences and weddings",
          image: "https://images.unsplash.com/photo-1598901405737-eb5ed732f33d?w=400&h=300&fit=crop",
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
      heroImage: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&h=600&fit=crop",
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
          image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=300&fit=crop",
        },
        {
          name: "Product Packaging",
          description: "Custom packaging for tech products and gadgets",
          image: "https://images.unsplash.com/photo-1607083206968-13611e3d76db?w=400&h=300&fit=crop",
        },
        {
          name: "Marketing Materials",
          description: "Flyers, brochures, and promotional items",
          image: "https://images.unsplash.com/photo-1561070791-36c11767b26a?w=400&h=300&fit=crop",
        },
        {
          name: "Tech Swag",
          description: "Branded stickers, t-shirts, and promotional items",
          image: "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=400&h=300&fit=crop",
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
      heroImage: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=1200&h=600&fit=crop",
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
          image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=300&fit=crop",
        },
        {
          name: "Luxury Boxes",
          description: "Premium rigid boxes for high-end products",
          image: "https://images.unsplash.com/photo-1607083206968-13611e3d76db?w=400&h=300&fit=crop",
        },
        {
          name: "Shopping Bags",
          description: "Designer shopping bags with luxury finishes",
          image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=400&h=300&fit=crop",
        },
        {
          name: "Lookbooks",
          description: "Fashion catalogs and collection lookbooks",
          image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=300&fit=crop",
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
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop",
    products: ["Custom Notebooks", "ID Cards", "Certificates", "Prospectuses", "Signage"],
    caseStudies: 45,
  },
  {
    slug: "healthcare-medical",
    name: "Healthcare & Medical",
    icon: Stethoscope,
    tagline: "Compliant, professional healthcare printing",
    description: "Medical-grade printing and packaging that meets healthcare standards",
    image: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=600&h=400&fit=crop",
    products: ["Medical Brochures", "Labels", "Patient Forms", "Prescription Pads", "Medical Packaging"],
    caseStudies: 32,
  },
  {
    slug: "restaurants-food",
    name: "Restaurants & Food",
    icon: Utensils,
    tagline: "Appetizing menus and food-safe packaging",
    description: "Food-safe materials and mouth-watering designs for the F&B industry",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop",
    products: ["Menu Cards", "Food Labels", "Takeout Packaging", "Table Tents", "Delivery Bags"],
    caseStudies: 78,
  },
  {
    slug: "retail-ecommerce",
    name: "Retail & E-commerce",
    icon: ShoppingBag,
    tagline: "Packaging that sells and protects",
    description: "Eye-catching retail packaging and shipping solutions that enhance brand value",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop",
    products: ["Product Boxes", "Shopping Bags", "Labels", "Hang Tags", "Shipping Boxes"],
    caseStudies: 120,
  },
  {
    slug: "corporate-business",
    name: "Corporate & Business",
    icon: Briefcase,
    tagline: "Professional printing for professional businesses",
    description: "Corporate stationery, marketing materials, and branded items for businesses",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop",
    products: ["Business Cards", "Letterheads", "Folders", "Corporate Gifts", "Reports"],
    caseStudies: 156,
  },
  {
    slug: "events-hospitality",
    name: "Events & Hospitality",
    icon: Calendar,
    tagline: "Making every event memorable",
    description: "Event materials, banners, and hospitality printing solutions",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&h=400&fit=crop",
    products: ["Invitations", "Banners", "Badges", "Event Signage", "Programs"],
    caseStudies: 89,
  },
  {
    slug: "technology-startups",
    name: "Technology & Startups",
    icon: Cpu,
    tagline: "Modern printing for innovative companies",
    description: "Fast, flexible printing solutions that keep pace with tech companies",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop",
    products: ["Pitch Decks", "Product Packaging", "Marketing Materials", "Swag", "Documentation"],
    caseStudies: 67,
  },
  {
    slug: "fashion-apparel",
    name: "Fashion & Apparel",
    icon: Shirt,
    tagline: "Packaging as stylish as your products",
    description: "Premium packaging and labels that complement fashion brands",
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=600&h=400&fit=crop",
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
