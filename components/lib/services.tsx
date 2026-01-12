import { ArrowRight, CheckCircle2, Printer, Package, Palette, Maximize, Leaf, Scissors } from "lucide-react";

export interface Service {
    id: number;
    slug: string;
    name: string;
    category: string;
    tagline: string;
    description: string;
    longDescription: string;
    heroImage: string;
    icon?: string;
    features: string[];
    benefits: {
      title: string;
      description: string;
    }[];
    process: {
      step: number;
      title: string;
      description: string;
    }[];
    applications: string[];
    pricing: {
      startingFrom: string;
      turnaround: string;
      rushAvailable: boolean;
    };
    relatedServices: {
      slug: string;
      name: string;
    }[];
  }
  


  export const services: Service[] = [
    {
      id: 1,
      slug: "digital-printing",
      name: "Digital Printing",
      category: "Printing Services",
      tagline: "Fast, flexible printing perfect for short runs and quick turnarounds",
      description: "High-quality digital printing solutions for business cards, flyers, brochures, and more. Perfect for small to medium runs with fast delivery.",
      longDescription: "Our digital printing service offers exceptional quality and flexibility for businesses that need quick turnarounds without compromising on quality. Using state-of-the-art digital presses, we can produce vibrant, high-resolution prints on a variety of materials. Digital printing is ideal for projects that require variable data printing, short runs, or rapid production times. Unlike traditional offset printing, digital printing doesn't require plates, making it cost-effective for smaller quantities and allowing for easy customization of each printed piece.",
      heroImage: "/digital-printing-banner.jpeg",
      features: [
        "High-quality output with vibrant colors",
        "Fast turnaround times (24-48 hours available)",
        "No minimum order quantities",
        "Variable data printing capabilities",
        "Cost-effective for short runs",
        "Wide range of paper stocks and finishes",
      ],
      benefits: [
        {
          title: "Superior Quality",
          description: "State-of-the-art digital presses ensure exceptional results with sharp text and vibrant colors every time",
        },
        {
          title: "Fast Delivery",
          description: "No plate-making required means we can start printing immediately and deliver in as little as 24 hours",
        },
        {
          title: "Cost-Effective",
          description: "Perfect for short runs without the setup costs associated with traditional printing methods",
        },
      ],
      process: [
        {
          step: 1,
          title: "File Submission",
          description: "Upload your print-ready files or work with our design team to create them",
        },
        {
          step: 2,
          title: "Proof Approval",
          description: "Review and approve digital proofs to ensure everything looks perfect",
        },
        {
          step: 3,
          title: "Digital Printing",
          description: "Your project is printed using advanced digital press technology",
        },
        {
          step: 4,
          title: "Finishing",
          description: "Cutting, folding, and any additional finishing touches are applied",
        },
        {
          step: 5,
          title: "Quality Check & Delivery",
          description: "Final inspection before secure packaging and fast delivery",
        },
      ],
      applications: [
        "Business Cards",
        "Flyers & Brochures",
        "Postcards",
        "Marketing Materials",
        "Event Materials",
        "Variable Data Printing",
      ],
      pricing: {
        startingFrom: "PKR 2,000",
        turnaround: "1-3 business days",
        rushAvailable: true,
      },
      relatedServices: [
        { slug: "offset-printing", name: "Offset Printing" },
        { slug: "large-format-printing", name: "Large Format Printing" },
        { slug: "business-printing", name: "Business Printing" },
      ],
    },
    {
      id: 2,
      slug: "offset-printing",
      name: "Offset Printing",
      category: "Printing Services",
      tagline: "High-volume printing with exceptional quality and cost-effectiveness",
      description: "Traditional offset printing for large quantity projects where quality and consistency are paramount. Best for runs of 500+ pieces.",
      longDescription: "Offset printing is the gold standard for high-volume, high-quality printing projects. This traditional printing method uses plates and ink rollers to transfer images to paper, resulting in superior color accuracy and consistency across large print runs. While it requires longer setup times than digital printing, offset printing becomes increasingly cost-effective as quantities increase. It's the preferred choice for magazines, catalogs, brochures, and any project requiring exceptional color matching and quality. Our offset presses can handle a wide range of paper stocks and sizes, with various finishing options available.",
      heroImage: "/offset-printing.jpeg",
      features: [
        "Exceptional color accuracy and consistency",
        "Cost-effective for large quantities (500+)",
        "Wide range of paper stocks and sizes",
        "Pantone color matching available",
        "Superior image quality",
        "Various finishing options",
      ],
      benefits: [
        {
          title: "Unmatched Quality",
          description: "Offset printing delivers sharper images and more accurate colors than any other printing method",
        },
        {
          title: "Volume Savings",
          description: "The more you print, the lower your per-unit cost becomes",
        },
        {
          title: "Consistent Results",
          description: "Every piece in your run will match perfectly from first to last",
        },
      ],
      process: [
        {
          step: 1,
          title: "Consultation & Quote",
          description: "Discuss your project requirements and receive a detailed quote",
        },
        {
          step: 2,
          title: "File Preparation",
          description: "Your files are preflighted and prepared for plate-making",
        },
        {
          step: 3,
          title: "Proof & Approval",
          description: "Review color proofs and approve before full production",
        },
        {
          step: 4,
          title: "Press Production",
          description: "Your project runs on our high-quality offset presses",
        },
        {
          step: 5,
          title: "Finishing & Delivery",
          description: "Cutting, binding, and any finishing before delivery",
        },
      ],
      applications: [
        "Magazines & Catalogs",
        "Brochures",
        "Annual Reports",
        "Books",
        "High-Volume Marketing Materials",
        "Corporate Publications",
      ],
      pricing: {
        startingFrom: "PKR 15,000",
        turnaround: "5-10 business days",
        rushAvailable: false,
      },
      relatedServices: [
        { slug: "digital-printing", name: "Digital Printing" },
        { slug: "large-format-printing", name: "Large Format Printing" },
        { slug: "specialty-printing", name: "Specialty Printing" },
      ],
    },
    {
      id: 3,
      slug: "screen-printing",
      name: "Screen Printing",
      category: "Printing Services",
      tagline: "Vibrant, durable prints on various materials and surfaces",
      description: "Screen printing for t-shirts, promotional items, signage, and specialty applications. Perfect for bold designs and unique materials.",
      longDescription: "Screen printing, also known as silk screening, is a versatile printing technique that allows us to print on a wide variety of materials including fabric, plastic, metal, wood, and more. This method uses a mesh screen to transfer ink onto the substrate, creating vibrant, long-lasting prints. Screen printing is ideal for promotional items, apparel, signage, and any application requiring durability and bold colors. It's particularly cost-effective for larger quantities and excels at printing on non-paper materials where other printing methods fall short.",
      heroImage: "/screen-printing.jpeg",
      features: [
        "Prints on virtually any surface",
        "Exceptionally durable and long-lasting",
        "Vibrant, opaque colors",
        "Cost-effective for medium to large runs",
        "Specialty inks available (metallic, fluorescent)",
        "Perfect for promotional products",
      ],
      benefits: [
        {
          title: "Material Versatility",
          description: "Print on fabric, plastic, metal, wood, glass, and more",
        },
        {
          title: "Superior Durability",
          description: "Screen printed designs withstand washing, weather, and wear",
        },
        {
          title: "Bold Colors",
          description: "Achieve vibrant, opaque colors that stand out",
        },
      ],
      process: [
        {
          step: 1,
          title: "Design Consultation",
          description: "Discuss your project and material requirements",
        },
        {
          step: 2,
          title: "Screen Preparation",
          description: "Create custom screens for your design",
        },
        {
          step: 3,
          title: "Color Mixing",
          description: "Mix custom inks to match your exact specifications",
        },
        {
          step: 4,
          title: "Printing",
          description: "Apply ink through screens onto your materials",
        },
        {
          step: 5,
          title: "Curing & Quality Control",
          description: "Cure inks and inspect each piece for quality",
        },
      ],
      applications: [
        "T-Shirts & Apparel",
        "Promotional Products",
        "Signage",
        "Posters",
        "Stickers & Decals",
        "Industrial Marking",
      ],
      pricing: {
        startingFrom: "PKR 8,000",
        turnaround: "7-10 business days",
        rushAvailable: true,
      },
      relatedServices: [
        { slug: "promotional-products", name: "Promotional Products" },
        { slug: "large-format-printing", name: "Large Format Printing" },
        { slug: "labels-stickers", name: "Labels & Stickers" },
      ],
    },
    {
      id: 4,
      slug: "large-format-printing",
      name: "Large Format Printing",
      category: "Printing Services",
      tagline: "Banners, posters, and signage that make a big impact",
      description: "Wide-format printing for banners, posters, trade show displays, and outdoor advertising. Premium quality in any size.",
      longDescription: "Our large format printing services deliver stunning visual impact for projects of any size. Using advanced wide-format printers, we can produce high-resolution graphics up to 16 feet wide and any length. Whether you need outdoor banners, indoor posters, trade show displays, or vehicle wraps, our large format printing delivers vibrant colors and sharp details. We offer a variety of materials including vinyl, fabric, canvas, and specialty substrates, along with finishing options like grommets, hemming, and mounting.",
      heroImage: "/large-format-printing.jpeg",
      features: [
        "Sizes up to 16 feet wide, unlimited length",
        "UV-resistant inks for outdoor durability",
        "Multiple material options",
        "High-resolution output (up to 1440 dpi)",
        "Various finishing options available",
        "Fast turnaround on most projects",
      ],
      benefits: [
        {
          title: "Maximum Impact",
          description: "Large-scale graphics that grab attention and make your message impossible to miss",
        },
        {
          title: "Versatile Applications",
          description: "Perfect for indoor displays, outdoor advertising, events, and more",
        },
        {
          title: "Weather Resistant",
          description: "UV-resistant inks and durable materials ensure your graphics last",
        },
      ],
      process: [
        {
          step: 1,
          title: "Consultation",
          description: "Discuss size, material, and application requirements",
        },
        {
          step: 2,
          title: "File Preparation",
          description: "Prepare high-resolution files optimized for large format",
        },
        {
          step: 3,
          title: "Proof Approval",
          description: "Review scaled digital proof before production",
        },
        {
          step: 4,
          title: "Production",
          description: "Print using professional wide-format equipment",
        },
        {
          step: 5,
          title: "Finishing & Installation",
          description: "Apply finishing and optional installation services",
        },
      ],
      applications: [
        "Outdoor Banners",
        "Trade Show Displays",
        "Retail Signage",
        "Vehicle Wraps",
        "Wall Graphics",
        "Window Graphics",
      ],
      pricing: {
        startingFrom: "PKR 3,000",
        turnaround: "2-5 business days",
        rushAvailable: true,
      },
      relatedServices: [
        { slug: "digital-printing", name: "Digital Printing" },
        { slug: "promotional-products", name: "Promotional Products" },
        { slug: "screen-printing", name: "Screen Printing" },
      ],
    },
    {
      id: 5,
      slug: "custom-boxes",
      name: "Custom Boxes",
      category: "Packaging Solutions",
      tagline: "Tailored packaging boxes for any product, any size",
      description: "Custom-designed boxes that protect your products and promote your brand. From small gift boxes to large shipping containers.",
      longDescription: "Our custom box manufacturing service creates packaging solutions perfectly tailored to your products and brand. We design and produce boxes in any size, shape, and style, from simple corrugated shipping boxes to luxury gift boxes with custom printing and finishing. Every box is engineered to protect your products during shipping while creating an unforgettable unboxing experience. Choose from various materials including corrugated cardboard, rigid board, and kraft paper, with options for full-color printing, spot UV, embossing, and more.",
      heroImage: "https://images.unsplash.com/photo-1607083206968-13611e3d76db?w=1200&h=600&fit=crop",
      features: [
        "Any size or shape custom manufactured",
        "Multiple material options",
        "Full-color printing available",
        "Various finishing options (lamination, UV, embossing)",
        "Structural design assistance",
        "Sample production available",
      ],
      benefits: [
        {
          title: "Perfect Fit",
          description: "Boxes designed specifically for your products reduce damage and waste",
        },
        {
          title: "Brand Enhancement",
          description: "Custom printing turns your packaging into a powerful marketing tool",
        },
        {
          title: "Unboxing Experience",
          description: "Create memorable moments that customers want to share on social media",
        },
      ],
      process: [
        {
          step: 1,
          title: "Requirements Analysis",
          description: "Discuss product specifications and packaging needs",
        },
        {
          step: 2,
          title: "Design & Prototyping",
          description: "Create structural design and produce physical samples",
        },
        {
          step: 3,
          title: "Sample Approval",
          description: "Review and test samples before production",
        },
        {
          step: 4,
          title: "Production",
          description: "Manufacture your custom boxes with precision",
        },
        {
          step: 5,
          title: "Quality Control & Delivery",
          description: "Inspect finished boxes and deliver to your facility",
        },
      ],
      applications: [
        "E-commerce Shipping",
        "Retail Packaging",
        "Gift Boxes",
        "Food Packaging",
        "Subscription Boxes",
        "Product Display",
      ],
      pricing: {
        startingFrom: "PKR 15,000",
        turnaround: "10-15 business days",
        rushAvailable: true,
      },
      relatedServices: [
        { slug: "labels-stickers", name: "Labels & Stickers" },
        { slug: "bags-pouches", name: "Bags & Pouches" },
        { slug: "packaging-design", name: "Packaging Design" },
      ],
    },
    {
      id: 6,
      slug: "labels-stickers",
      name: "Labels & Stickers",
      category: "Packaging Solutions",
      tagline: "Eye-catching labels and stickers for branding and information",
      description: "Custom labels and stickers in any shape, size, or material. Perfect for products, packaging, and promotions.",
      longDescription: "Our label and sticker printing services provide high-quality solutions for product labeling, branding, and promotional applications. We can print on a wide variety of materials including paper, vinyl, polyester, and specialty films, with options for various adhesives to suit your application. From simple black and white labels to full-color stickers with specialty finishes, we have the capabilities to bring your vision to life. All labels can be die-cut to any shape, and we offer both roll and sheet formats to suit your application method.",
      heroImage: "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=1200&h=600&fit=crop",
      features: [
        "Custom shapes and sizes",
        "Multiple material options (paper, vinyl, polyester)",
        "Various adhesive types",
        "Weather-resistant options",
        "Specialty finishes (metallic, holographic, matte)",
        "Roll or sheet format available",
      ],
      benefits: [
        {
          title: "Professional Appearance",
          description: "High-quality labels enhance your product's perceived value",
        },
        {
          title: "Durable & Versatile",
          description: "Choose materials suited to your specific application and environment",
        },
        {
          title: "Cost-Effective Branding",
          description: "Transform plain packaging into branded experiences affordably",
        },
      ],
      process: [
        {
          step: 1,
          title: "Specification Review",
          description: "Determine size, quantity, material, and application needs",
        },
        {
          step: 2,
          title: "Design & Dieline",
          description: "Create artwork and cutting template for your labels",
        },
        {
          step: 3,
          title: "Proof Approval",
          description: "Review digital or physical proof before production",
        },
        {
          step: 4,
          title: "Printing",
          description: "High-quality printing on selected material",
        },
        {
          step: 5,
          title: "Die-Cutting & Delivery",
          description: "Precision cutting and delivery in your preferred format",
        },
      ],
      applications: [
        "Product Labels",
        "Food & Beverage Labels",
        "Cosmetic Labels",
        "Promotional Stickers",
        "Warning & Safety Labels",
        "Branding Stickers",
      ],
      pricing: {
        startingFrom: "PKR 4,000",
        turnaround: "3-7 business days",
        rushAvailable: true,
      },
      relatedServices: [
        { slug: "custom-boxes", name: "Custom Boxes" },
        { slug: "bags-pouches", name: "Bags & Pouches" },
        { slug: "packaging-design", name: "Packaging Design" },
      ],
    },
    {
      id: 7,
      slug: "bags-pouches",
      name: "Bags & Pouches",
      category: "Packaging Solutions",
      tagline: "Custom bags and pouches for retail and food products",
      description: "Versatile bag and pouch solutions for retail packaging, food products, and promotional use. Available in various materials and sizes.",
      longDescription: "Our custom bags and pouches provide flexible packaging solutions for a wide range of products. From retail shopping bags to food-grade pouches, we offer options in paper, plastic, fabric, and biodegradable materials. Each bag can be customized with your branding through various printing methods. Whether you need small sachets, stand-up pouches, or large shopping bags, we have the manufacturing capabilities and design expertise to create the perfect packaging solution for your products.",
      heroImage: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=1200&h=600&fit=crop",
      features: [
        "Multiple material options (paper, plastic, fabric, biodegradable)",
        "Various sizes and styles available",
        "Custom printing and branding",
        "Food-safe options available",
        "Eco-friendly alternatives",
        "Handles and closure options",
      ],
      benefits: [
        {
          title: "Brand Visibility",
          description: "Turn every bag into a mobile advertisement for your business",
        },
        {
          title: "Versatile Solutions",
          description: "Suitable for retail, food service, events, and promotional use",
        },
        {
          title: "Sustainable Options",
          description: "Eco-friendly materials that align with environmental values",
        },
      ],
      process: [
        {
          step: 1,
          title: "Requirements Discussion",
          description: "Understand your product, usage, and branding needs",
        },
        {
          step: 2,
          title: "Design & Sample",
          description: "Create design and produce physical samples for approval",
        },
        {
          step: 3,
          title: "Material Selection",
          description: "Choose appropriate material for your specific use case",
        },
        {
          step: 4,
          title: "Production",
          description: "Manufacture bags with quality printing and finishing",
        },
        {
          step: 5,
          title: "Delivery",
          description: "Deliver packaged bags ready for use",
        },
      ],
      applications: [
        "Retail Shopping Bags",
        "Food Packaging",
        "Promotional Giveaways",
        "Gift Bags",
        "Product Pouches",
        "Event Merchandise",
      ],
      pricing: {
        startingFrom: "PKR 5,000",
        turnaround: "7-12 business days",
        rushAvailable: true,
      },
      relatedServices: [
        { slug: "custom-boxes", name: "Custom Boxes" },
        { slug: "labels-stickers", name: "Labels & Stickers" },
        { slug: "eco-friendly-packaging", name: "Eco-Friendly Packaging" },
      ],
    },
    {
      id: 8,
      slug: "eco-friendly-packaging",
      name: "Eco-Friendly Packaging",
      category: "Packaging Solutions",
      tagline: "Sustainable packaging solutions that care for the planet",
      description: "Environmentally responsible packaging made from recycled, biodegradable, and sustainable materials. Protect your products and the environment.",
      longDescription: "As environmental consciousness grows, businesses need packaging solutions that minimize environmental impact without compromising quality or functionality. Our eco-friendly packaging options include recycled cardboard, biodegradable plastics, plant-based materials, and compostable alternatives. We help you reduce your carbon footprint while maintaining the protective and marketing functions of traditional packaging. All materials are sourced from sustainable suppliers and can be customized to meet your specific requirements.",
      heroImage: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1200&h=600&fit=crop",
      features: [
        "100% recycled and recyclable materials",
        "Biodegradable and compostable options",
        "Plant-based and renewable materials",
        "Reduced carbon footprint",
        "Certified sustainable sourcing",
        "Custom printing with eco-friendly inks",
      ],
      benefits: [
        {
          title: "Environmental Responsibility",
          description: "Demonstrate your commitment to sustainability and attract eco-conscious consumers",
        },
        {
          title: "Brand Differentiation",
          description: "Stand out in the market with genuinely sustainable packaging solutions",
        },
        {
          title: "Compliance Ready",
          description: "Meet environmental regulations and industry standards",
        },
      ],
      process: [
        {
          step: 1,
          title: "Sustainability Assessment",
          description: "Evaluate your current packaging and identify improvement opportunities",
        },
        {
          step: 2,
          title: "Material Selection",
          description: "Choose from our range of eco-friendly materials",
        },
        {
          step: 3,
          title: "Design Optimization",
          description: "Design packaging that minimizes waste while maximizing protection",
        },
        {
          step: 4,
          title: "Sustainable Production",
          description: "Manufacture using environmentally responsible processes",
        },
        {
          step: 5,
          title: "Certification & Delivery",
          description: "Provide sustainability certificates and deliver your eco-packaging",
        },
      ],
      applications: [
        "E-commerce Shipping",
        "Food & Beverage",
        "Cosmetics & Personal Care",
        "Retail Products",
        "Corporate Gifts",
        "Event Materials",
      ],
      pricing: {
        startingFrom: "PKR 12,000",
        turnaround: "10-15 business days",
        rushAvailable: false,
      },
      relatedServices: [
        { slug: "custom-boxes", name: "Custom Boxes" },
        { slug: "bags-pouches", name: "Bags & Pouches" },
        { slug: "labels-stickers", name: "Labels & Stickers" },
      ],
    },
    {
      id: 9,
      slug: "brand-identity",
      name: "Brand Identity",
      category: "Design Services",
      tagline: "Complete brand development from concept to implementation",
      description: "Comprehensive brand identity design including logo, color palette, typography, and brand guidelines. Create a cohesive brand that resonates.",
      longDescription: "A strong brand identity is the foundation of business success. Our brand identity service goes beyond logo design to create a complete visual system that represents your values, differentiates you from competitors, and connects with your target audience. We develop comprehensive brand guidelines that ensure consistency across all touchpoints, from business cards to websites. The process includes market research, competitor analysis, mood boarding, concept development, and final delivery of all brand assets and documentation.",
      heroImage: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&h=600&fit=crop",
      features: [
        "Complete brand strategy development",
        "Logo design and variations",
        "Color palette and typography system",
        "Comprehensive brand guidelines",
        "All file formats for print and digital",
        "Brand application examples",
      ],
      benefits: [
        {
          title: "Professional Image",
          description: "Establish credibility and professionalism in your market",
        },
        {
          title: "Brand Recognition",
          description: "Create memorable visual identity that stands out",
        },
        {
          title: "Consistent Communication",
          description: "Ensure brand consistency across all marketing materials",
        },
      ],
      process: [
        {
          step: 1,
          title: "Discovery & Research",
          description: "Understand your business, audience, and competitive landscape",
        },
        {
          step: 2,
          title: "Strategy Development",
          description: "Define brand positioning, personality, and messaging",
        },
        {
          step: 3,
          title: "Concept Creation",
          description: "Develop multiple design directions for review",
        },
        {
          step: 4,
          title: "Refinement",
          description: "Perfect chosen direction based on feedback",
        },
        {
          step: 5,
          title: "Guidelines & Delivery",
          description: "Create comprehensive brand guide and deliver all assets",
        },
      ],
      applications: [
        "New Business Launches",
        "Brand Refreshes",
        "Company Rebranding",
        "Product Line Branding",
        "Sub-Brand Development",
        "Corporate Identity",
      ],
      pricing: {
        startingFrom: "PKR 50,000",
        turnaround: "15-20 business days",
        rushAvailable: false,
      },
      relatedServices: [
        { slug: "logo-design", name: "Logo Design" },
        { slug: "packaging-design", name: "Packaging Design" },
        { slug: "marketing-materials", name: "Marketing Materials Design" },
      ],
    },
    {
      id: 10,
      slug: "logo-design",
      name: "Logo Design",
      category: "Design Services",
      tagline: "Memorable logos that capture your brand essence",
      description: "Professional logo design that makes your brand instantly recognizable. From concept to final files, we create logos that work everywhere.",
      longDescription: "Your logo is the face of your brand, appearing on everything from business cards to billboards. Our logo design service creates versatile, memorable marks that effectively communicate your brand identity. We begin with research and sketching, then develop multiple concepts for your review. Each logo is designed to work across all applications and sizes, from favicon to billboard. You'll receive the final logo in all necessary formats, including vector files, along with usage guidelines.",
      heroImage: "https://images.unsplash.com/photo-1626785774625-ddcddc3445e9?w=1200&h=600&fit=crop",
      features: [
        "Multiple initial concepts",
        "Unlimited revisions on chosen concept",
        "All file formats (AI, EPS, PDF, PNG, SVG)",
        "Black & white and color versions",
        "Social media profile versions",
        "Basic usage guidelines",
      ],
      benefits: [
        {
          title: "Unique Design",
          description: "Original logos created specifically for your brand, never from templates",
        },
        {
          title: "Versatile Application",
          description: "Logos designed to work at any size and on any medium",
        },
        {
          title: "Future-Proof",
          description: "Timeless design that won't need frequent updates",
        },
      ],
      process: [
        {
          step: 1,
          title: "Brief & Research",
          description: "Understand your brand, industry, and design preferences",
        },
        {
          step: 2,
          title: "Concept Development",
          description: "Create 3-5 distinct logo concepts for review",
        },
        {
          step: 3,
          title: "Feedback & Selection",
          description: "Present concepts and gather your feedback",
        },
        {
          step: 4,
          title: "Refinement",
          description: "Perfect the chosen concept through revisions",
        },
        {
          step: 5,
          title: "Finalization & Delivery",
          description: "Deliver all file formats and usage guidelines",
        },
      ],
      applications: [
        "New Businesses",
        "Startups",
        "Product Logos",
        "Event Logos",
        "Rebrand Projects",
        "Logo Modernization",
      ],
      pricing: {
        startingFrom: "PKR 25,000",
        turnaround: "7-10 business days",
        rushAvailable: true,
      },
      relatedServices: [
        { slug: "brand-identity", name: "Brand Identity" },
        { slug: "business-printing", name: "Business Printing" },
        { slug: "digital-printing", name: "Digital Printing" },
      ],
    },
    {
      id: 11,
      slug: "packaging-design",
      name: "Packaging Design",
      category: "Design Services",
      tagline: "Stunning packaging designs that sell your products",
      description: "Creative packaging design that attracts customers and communicates your brand. From concept to print-ready files.",
      longDescription: "Packaging design is where aesthetics meet functionality. Our packaging designers create visually stunning designs that not only look beautiful but also protect your products and comply with regulations. We consider every aspect including structure, materials, printing techniques, and user experience. The design process includes market research, competitor analysis, concept development, 3D mockups, and print-ready file preparation. We ensure your packaging stands out on shelves and creates memorable unboxing experiences.",
      heroImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=600&fit=crop",
      features: [
        "Custom structural design",
        "3D mockups and visualization",
        "Print-ready file preparation",
        "Dieline creation",
        "Material recommendations",
        "Regulatory compliance guidance",
      ],
      benefits: [
        {
          title: "Shelf Appeal",
          description: "Designs that grab attention and drive purchase decisions",
        },
        {
          title: "Brand Consistency",
          description: "Packaging that perfectly aligns with your brand identity",
        },
        {
          title: "Production Ready",
          description: "Files prepared for flawless printing and manufacturing",
        },
      ],
      process: [
        {
          step: 1,
          title: "Product & Market Analysis",
          description: "Study your product, target audience, and competitive landscape",
        },
        {
          step: 2,
          title: "Concept Development",
          description: "Create multiple design directions with 3D mockups",
        },
        {
          step: 3,
          title: "Design Refinement",
          description: "Perfect chosen concept based on feedback",
        },
        {
          step: 4,
          title: "Technical Preparation",
          description: "Create dielines and prepare print-ready files",
        },
        {
          step: 5,
          title: "Production Support",
          description: "Assist with sample approval and production setup",
        },
      ],
      applications: [
        "Product Packaging",
        "Food & Beverage",
        "Cosmetics & Beauty",
        "E-commerce Boxes",
        "Gift Packaging",
        "Retail Products",
      ],
      pricing: {
        startingFrom: "PKR 35,000",
        turnaround: "10-15 business days",
        rushAvailable: true,
      },
      relatedServices: [
        { slug: "custom-boxes", name: "Custom Boxes" },
        { slug: "labels-stickers", name: "Labels & Stickers" },
        { slug: "brand-identity", name: "Brand Identity" },
      ],
    },
    {
      id: 12,
      slug: "marketing-materials",
      name: "Marketing Materials Design",
      category: "Design Services",
      tagline: "Professional designs for all your marketing collateral",
      description: "Eye-catching designs for brochures, flyers, posters, and all marketing materials. Designs that convert viewers into customers.",
      longDescription: "Effective marketing materials combine compelling design with strategic messaging to drive results. Our designers create professional marketing collateral that captures attention, communicates your value proposition, and motivates action. From single-page flyers to multi-page brochures, we ensure every piece is on-brand, visually appealing, and optimized for its intended use. All designs are provided print-ready with appropriate bleeds, color modes, and specifications for flawless production.",
      heroImage: "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=1200&h=600&fit=crop",
      features: [
        "Brochures and catalogs",
        "Flyers and leaflets",
        "Posters and banners",
        "Presentation folders",
        "Print-ready file preparation",
        "Multiple design revisions",
      ],
      benefits: [
        {
          title: "Professional Impact",
          description: "Marketing materials that elevate your brand perception",
        },
        {
          title: "Clear Communication",
          description: "Designs that effectively convey your message",
        },
        {
          title: "Versatile Formats",
          description: "Designs optimized for both print and digital use",
        },
      ],
      process: [
        {
          step: 1,
          title: "Content & Objectives",
          description: "Gather content and understand marketing goals",
        },
        {
          step: 2,
          title: "Layout Design",
          description: "Create initial layout and design concepts",
        },
        {
          step: 3,
          title: "Content Integration",
          description: "Incorporate all text, images, and branding elements",
        },
        {
          step: 4,
          title: "Review & Revision",
          description: "Refine design based on feedback",
        },
        {
          step: 5,
          title: "Final Files",
          description: "Deliver print-ready and digital-ready files",
        },
      ],
      applications: [
        "Marketing Campaigns",
        "Product Launches",
        "Trade Shows & Events",
        "Sales Materials",
        "Corporate Communications",
        "Promotional Campaigns",
      ],
      pricing: {
        startingFrom: "PKR 15,000",
        turnaround: "5-7 business days",
        rushAvailable: true,
      },
      relatedServices: [
        { slug: "digital-printing", name: "Digital Printing" },
        { slug: "large-format-printing", name: "Large Format Printing" },
        { slug: "brand-identity", name: "Brand Identity" },
      ],
    },
    {
      id: 13,
      slug: "business-printing",
      name: "Business Printing",
      category: "Business Solutions",
      tagline: "Essential business stationery that makes a professional impression",
      description: "Complete business printing services including business cards, letterheads, envelopes, and folders. Quality that represents your brand.",
      longDescription: "Professional business stationery is essential for making the right impression. Our business printing service provides all the essential materials your company needs to communicate professionally. From business cards that get noticed to letterheads that command respect, we ensure every piece reflects your brand identity and quality standards. We offer various paper stocks, finishes, and printing techniques to match your brand positioning, from economy options to premium luxury materials.",
      heroImage: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=1200&h=600&fit=crop",
      features: [
        "Business cards (standard and premium)",
        "Letterheads and company paper",
        "Envelopes in various sizes",
        "Presentation folders",
        "With compliments slips",
        "Various paper stocks and finishes",
      ],
      benefits: [
        {
          title: "Professional Image",
          description: "High-quality stationery that enhances your credibility",
        },
        {
          title: "Brand Consistency",
          description: "All materials perfectly match your brand identity",
        },
        {
          title: "Cost-Effective",
          description: "Bundle pricing for complete stationery sets",
        },
      ],
      process: [
        {
          step: 1,
          title: "Requirements Assessment",
          description: "Determine which materials you need and in what quantities",
        },
        {
          step: 2,
          title: "Design & Setup",
          description: "Adapt your brand identity to all stationery items",
        },
        {
          step: 3,
          title: "Material Selection",
          description: "Choose paper stocks and finishing options",
        },
        {
          step: 4,
          title: "Proof Approval",
          description: "Review and approve digital proofs",
        },
        {
          step: 5,
          title: "Production & Delivery",
          description: "Print all materials and deliver as a complete set",
        },
      ],
      applications: [
        "Corporate Stationery",
        "New Business Setup",
        "Rebrand Implementation",
        "Sales Team Materials",
        "Executive Stationery",
        "Office Supplies",
      ],
      pricing: {
        startingFrom: "PKR 8,000",
        turnaround: "3-5 business days",
        rushAvailable: true,
      },
      relatedServices: [
        { slug: "digital-printing", name: "Digital Printing" },
        { slug: "logo-design", name: "Logo Design" },
        { slug: "brand-identity", name: "Brand Identity" },
      ],
    },
    {
      id: 14,
      slug: "promotional-products",
      name: "Promotional Products",
      category: "Business Solutions",
      tagline: "Branded merchandise that keeps your brand in customers' hands",
      description: "Custom promotional products and corporate gifts. From pens to tote bags, create lasting impressions with branded merchandise.",
      longDescription: "Promotional products are powerful marketing tools that keep your brand visible long after the initial interaction. We offer a wide range of customizable promotional items suitable for trade shows, corporate gifts, employee appreciation, and marketing campaigns. Each product can be branded with your logo and messaging using appropriate printing or engraving techniques. From budget-friendly giveaways to premium corporate gifts, we help you select products that align with your brand and resonate with your audience.",
      heroImage: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1200&h=600&fit=crop",
      features: [
        "Wide range of product options",
        "Custom branding and printing",
        "Quality products from trusted suppliers",
        "Bulk pricing available",
        "Packaging and fulfillment services",
        "Product sourcing assistance",
      ],
      benefits: [
        {
          title: "Brand Visibility",
          description: "Products that keep your brand in front of customers daily",
        },
        {
          title: "Versatile Marketing",
          description: "Suitable for events, gifts, employee programs, and campaigns",
        },
        {
          title: "Lasting Impressions",
          description: "Quality products that recipients actually use and appreciate",
        },
      ],
      process: [
        {
          step: 1,
          title: "Product Selection",
          description: "Browse options or request custom product sourcing",
        },
        {
          step: 2,
          title: "Branding Design",
          description: "Adapt your logo and branding for the product",
        },
        {
          step: 3,
          title: "Sample Approval",
          description: "Review physical sample before production",
        },
        {
          step: 4,
          title: "Production",
          description: "Manufacture or source products with your branding",
        },
        {
          step: 5,
          title: "Packaging & Delivery",
          description: "Package appropriately and deliver to your location",
        },
      ],
      applications: [
        "Trade Show Giveaways",
        "Corporate Gifts",
        "Employee Recognition",
        "Event Merchandise",
        "Customer Appreciation",
        "Marketing Campaigns",
      ],
      pricing: {
        startingFrom: "PKR 10,000",
        turnaround: "10-20 business days",
        rushAvailable: false,
      },
      relatedServices: [
        { slug: "screen-printing", name: "Screen Printing" },
        { slug: "digital-printing", name: "Digital Printing" },
        { slug: "business-printing", name: "Business Printing" },
      ],
    },
    {
      id: 15,
      slug: "specialty-printing",
      name: "Specialty Printing",
      category: "Business Solutions",
      tagline: "Premium finishing techniques that make your prints extraordinary",
      description: "Advanced printing techniques including die-cutting, embossing, foil stamping, and spot UV. Elevate your materials with special finishes.",
      longDescription: "Specialty printing techniques add tactile and visual elements that transform ordinary printed materials into memorable experiences. Our specialty finishing services include die-cutting for custom shapes, embossing and debossing for dimensional effects, foil stamping for metallic accents, spot UV for selective glossy highlights, and more. These techniques can be combined to create truly unique pieces that command attention and convey quality. Perfect for business cards, invitations, packaging, and high-end marketing materials.",
      heroImage: "https://images.unsplash.com/photo-1621569899672-aa12763d4cc7?w=1200&h=600&fit=crop",
      features: [
        "Die-cutting for custom shapes",
        "Embossing and debossing",
        "Foil stamping (gold, silver, colors)",
        "Spot UV coating",
        "Letterpress printing",
        "Combination finishes",
      ],
      benefits: [
        {
          title: "Premium Perception",
          description: "Special finishes signal quality and attention to detail",
        },
        {
          title: "Tactile Experience",
          description: "Engage multiple senses for memorable impressions",
        },
        {
          title: "Differentiation",
          description: "Stand out from standard printed materials",
        },
      ],
      process: [
        {
          step: 1,
          title: "Technique Selection",
          description: "Discuss desired effects and recommend techniques",
        },
        {
          step: 2,
          title: "Design Preparation",
          description: "Prepare artwork with special finish specifications",
        },
        {
          step: 3,
          title: "Sample Production",
          description: "Create samples showing the special finishes",
        },
        {
          step: 4,
          title: "Approval",
          description: "Review and approve samples before full production",
        },
        {
          step: 5,
          title: "Specialty Production",
          description: "Apply special finishes with precision",
        },
      ],
      applications: [
        "Premium Business Cards",
        "Luxury Invitations",
        "High-End Packaging",
        "Certificates & Awards",
        "Special Event Materials",
        "Executive Stationery",
      ],
      pricing: {
        startingFrom: "PKR 20,000",
        turnaround: "7-14 business days",
        rushAvailable: false,
      },
      relatedServices: [
        { slug: "offset-printing", name: "Offset Printing" },
        { slug: "business-printing", name: "Business Printing" },
        { slug: "packaging-design", name: "Packaging Design" },
      ],
    },
  ];
  
  export function getAllServices(): Service[] {
    return services;
  }
  
  export function getServiceBySlug(slug: string): Service | undefined {
    return services.find(service => service.slug === slug);
  }
  
  export function getServiceById(id: number): Service | undefined {
    return services.find(service => service.id === id);
  }
  
  export function getServicesByCategory(category: string): Service[] {
    return services.filter(service => service.category === category);
  }

  export const serviceCategories = [
    {
      category: "Printing Services",
      description: "Professional printing solutions for all your business needs",
      icon: Printer,
      services: getServicesByCategory("Printing Services"),
    },
    {
      category: "Packaging Solutions",
      description: "Custom packaging that protects and promotes your products",
      icon: Package,
      services: getServicesByCategory("Packaging Solutions"),
    },
    {
      category: "Design Services",
      description: "Creative design solutions to elevate your brand",
      icon: Palette,
      services: getServicesByCategory("Design Services"),
    },
  ];
  
   
  export const additionalServices = [
    {
      slug: "business-printing",
      name: "Business Printing",
      icon: Printer,
      features: ["Business cards", "Letterheads", "Envelopes", "Folders"],
    },
    {
      slug: "promotional-products",
      name: "Promotional Products",
      icon: Scissors,
      features: ["Branded merchandise", "Corporate gifts", "Event materials", "Giveaways"],
    },
    {
      slug: "specialty-printing",
      name: "Specialty Printing",
      icon: Maximize,
      features: ["Die-cutting", "Embossing", "Foil stamping", "Spot UV"],
    },
  ];
  
  
