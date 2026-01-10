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
